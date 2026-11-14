// Vercel Serverless Function: POST /api/send-request
// Принимает данные формы с сайта и пересылает их в Telegram.
// Токен бота и chat_id живут только здесь, в переменных окружения Vercel,
// и никогда не попадают в браузер.

type AppointmentPayload = {
  type: "appointment";
  date?: string;
  time?: string;
  message?: string;
  name: string;
  phone: string;
  email: string;
  vip?: boolean;
  privacy: boolean;
};

type CallbackPayload = {
  type: "callback";
  phone: string;
  time?: string;
};

type Payload = AppointmentPayload | CallbackPayload;

const MAX_LEN = 1000;

// Telegram parse_mode=HTML: экранируем ввод, чтобы символы < > & не ломали сообщение
// и пользователь не мог подставить свою разметку.
const esc = (value: unknown): string =>
  String(value ?? "")
    .slice(0, MAX_LEN)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .trim();

const isNonEmpty = (value: unknown): value is string =>
  typeof value === "string" && value.trim().length > 0 && value.length <= MAX_LEN;

const isPhone = (value: unknown): value is string =>
  typeof value === "string" && /^[\d+\-\s]{5,20}$/.test(value);

function validate(body: unknown): Payload | null {
  if (!body || typeof body !== "object") return null;
  const data = body as Record<string, unknown>;

  if (data.type === "callback") {
    if (!isPhone(data.phone)) return null;
    return { type: "callback", phone: data.phone, time: data.time as string };
  }

  if (data.type === "appointment") {
    if (!isNonEmpty(data.name) || !isPhone(data.phone) || !isNonEmpty(data.email)) return null;
    if (data.privacy !== true) return null;
    return {
      type: "appointment",
      date: data.date as string,
      time: data.time as string,
      message: data.message as string,
      name: data.name,
      phone: data.phone,
      email: data.email,
      vip: data.vip === true,
      privacy: true,
    };
  }

  return null;
}

function buildMessage(p: Payload): string {
  if (p.type === "callback") {
    return `
📞 <b>Нова заявка: передзвонити клієнту</b>
━━━━━━━━━━━━━━━━━━
📱 <b>Телефон:</b> ${esc(p.phone)}
🕒 <b>Зручний час:</b> ${esc(p.time) || "-"}
`;
  }

  return `
📅 <b>Нова заявка на прибирання</b>
━━━━━━━━━━━━━━━━━━
🗓 <b>Дата:</b> ${esc(p.date) || "-"}
⏰ <b>Час:</b> ${esc(p.time) || "-"}
👤 <b>Ім’я / Адреса:</b> ${esc(p.name)}
📞 <b>Телефон:</b> ${esc(p.phone)}
📧 <b>Email:</b> ${esc(p.email)}
💎 <b>VIP-Service:</b> ${p.vip ? "Так ✅" : "Ні ❌"}
📝 <b>Повідомлення:</b> ${esc(p.message) || "-"}
✅ <b>Політика:</b> Так
`;
}

const json = (status: number, body: object) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

export async function POST(request: Request): Promise<Response> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatIds = (process.env.TELEGRAM_CHAT_IDS ?? "")
    .split(",")
    .map((id) => id.trim())
    .filter(Boolean);

  if (!token || chatIds.length === 0) {
    console.error("TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_IDS is not configured");
    return json(500, { ok: false, error: "Server is not configured" });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return json(400, { ok: false, error: "Invalid JSON" });
  }

  const payload = validate(body);
  if (!payload) return json(400, { ok: false, error: "Invalid form data" });

  const text = buildMessage(payload);

  const results = await Promise.allSettled(
    chatIds.map((chatId) =>
      fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML" }),
      })
    )
  );

  const delivered = results.filter((r) => r.status === "fulfilled" && r.value.ok).length;
  if (delivered < chatIds.length) {
    console.error(`Telegram: delivered ${delivered}/${chatIds.length}`);
  }

  // Заявка считается принятой, если её получил хотя бы один из адресатов.
  return delivered > 0 ? json(200, { ok: true }) : json(502, { ok: false, error: "Delivery failed" });
}
