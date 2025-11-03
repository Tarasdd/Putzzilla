import { useState } from "react";
import styles from "./CallRequestForm.module.scss";
import { Phone } from "lucide-react";

const BOT_TOKEN = "7616900875:AAFFFXqSDN_GMe7QcFy4qD-GYNasyFKQpEo";

const CHAT_IDS = [
  "1058120922",
  "6096677058",
  "556744332",
  "8392132830",
];

const CallRequestForm = () => {
  const [formData, setFormData] = useState({
    phone: "",
    time: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const cleaned = value.replace(/[^\d+\-\s]/g, "");
      if (cleaned.length > 15) return;
      setFormData({ ...formData, [name]: cleaned });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const text = `
📞 <b>Нова заявка: передзвонити клієнту</b>
━━━━━━━━━━━━━━━━━━
📱 <b>Телефон:</b> ${formData.phone}
🕒 <b>Зручний час:</b> ${formData.time || "-"}
`;

    try {
      await Promise.all(
        CHAT_IDS.map((id) =>
          fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              chat_id: id,
              text,
              parse_mode: "HTML",
            }),
          })
        )
      );

      alert("✅ Wir rufen Sie in Kürze zurück!");
      setFormData({ phone: "", time: "" });
    } catch (err) {
      console.error(err);
      alert("❌ Ein Fehler ist aufgetreten. Versuchen Sie es später noch einmal.");
    }
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.textBlock}>
        <h2>
          Wir rufen
          <br />
          Sie zurück
        </h2>

        <div className={styles.contact}>
          <div>
            <p className={styles.number}>
              <Phone size={22} stroke="#fcee96" /> +49 151 23873732
            </p>
            <p className={styles.subtext}>Rund um die Uhr erreichbar</p>
          </div>
        </div>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label htmlFor="phone">Telefonnummer*</label>
          <input
            id="phone"
            name="phone"
            type="text"
            placeholder="Telefonnummer"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="time">Ihre Erreichbarkeit</label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
          >
            <option value="">Wählen Sie einen passenden Zeitpunkt</option>
            <option value="08:00 - 10:00">08:00 - 10:00</option>
            <option value="10:00 - 12:00">10:00 - 12:00</option>
            <option value="12:00 - 14:00">12:00 - 14:00</option>
            <option value="14:00 - 16:00">14:00 - 16:00</option>
            <option value="16:00 - 18:00">16:00 - 18:00</option>
          </select>
        </div>

        <button type="submit" className={styles.submit}>
          Rückruf anfordern
        </button>
      </form>
    </section>
  );
};

export default CallRequestForm;
