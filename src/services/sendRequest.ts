// Отправка заявок с сайта на нашу серверную функцию /api/send-request.
// Секретов здесь нет: токен Telegram хранится только на сервере.

export type AppointmentRequest = {
  type: "appointment";
  date: string;
  time: string;
  message: string;
  name: string;
  phone: string;
  email: string;
  vip: boolean;
  privacy: boolean;
};

export type CallbackRequest = {
  type: "callback";
  phone: string;
  time: string;
};

export async function sendRequest(data: AppointmentRequest | CallbackRequest): Promise<void> {
  const response = await fetch("/api/send-request", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }
}
