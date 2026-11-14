import { useState } from "react";
import styles from "./ContactForm.module.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar } from "lucide-react";
import { sendRequest } from "../../services/sendRequest";

const ContactForm = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const [formData, setFormData] = useState({
    date: "",
    time: "",
    message: "",
    name: "",
    phone: "",
    email: "",
    privacy: false,
    vip: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    const { name, value, type } = target;

    if (name === "phone") {
      const cleanedValue = value.replace(/[^\d+\-\s]/g, "");
      if (cleanedValue.length > 15) return;
      setFormData({ ...formData, [name]: cleanedValue });
      return;
    }

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? (target as HTMLInputElement).checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await sendRequest({ type: "appointment", ...formData });

      // Google Ads: учёт заявки через GTM (только при успешной отправке)
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "submit_lead_form" });

      alert("✅ Nachricht erfolgreich gesendet! Wir werden Sie in Kürze anrufen.");

      setFormData({
        date: "",
        time: "",
        message: "",
        name: "",
        phone: "",
        email: "",
        privacy: false,
        vip: false,
      });
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Ein Fehler ist aufgetreten. Versuchen Sie es später noch einmal.");
    }
  };

  const handlePrivacyClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    window.open("/datenschutzerklaerung", "_blank");
  };

  return (
    <form id="callback" className={styles.form} onSubmit={handleSubmit}>
      <p className={styles.text}>
        Füllen Sie das Formular aus, um einen Termin zu vereinbaren.
      </p>

      <div className={styles.row}>
        <div className={styles.field}>
        <label htmlFor="date">Datum</label>
        <div className={styles.dateWrapper}>
          <DatePicker
            id="date"
            selected={selectedDate}
            onChange={(date: Date | null) => {
              setSelectedDate(date);
              if (date) {
                const formatted = date.toLocaleDateString("de-DE", {
                  day: "2-digit",
                  month: "2-digit",
                });
                setFormData({ ...formData, date: formatted });
              }
            }}
            dateFormat="dd.MM"
            placeholderText="Datum"
            customInput={
              <input
                type="text"
                value={formData.date}
                name="date"
                placeholder="Datum"
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
              />
            }
            showPopperArrow={false}
            showMonthDropdown
            showYearDropdown={false}
            renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "0 8px",
                  alignItems: "center",
                }}
              >
                <button onClick={decreaseMonth} type="button">
                  {"<"}
                </button>
                <span>
                  {date.toLocaleString("de-DE", { month: "long" })}
                </span>
                <button onClick={increaseMonth} type="button">
                  {">"}
                </button>
              </div>
            )}
          />
          <Calendar className={styles.calendarIcon} />
        </div>
      </div>

        <div className={styles.field}>
          <label htmlFor="time">Uhrzeit (optional)</label>
          <input
            id="time"
            type="text"
            name="time"
            placeholder="z. B. 14:00"
            value={formData.time}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Ihr Anliegen</label>
        <textarea
          id="message"
          name="message"
          placeholder="Ihr Anliegen"
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="name">Name / Adresse*</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Name/ Adresse"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="phone">Telefon*</label>
          <input
            id="phone"
            type="text"
            name="phone"
            placeholder="+49 170 1234567"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="email">E-Mail*</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="beispiel@mail.de"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <label className={styles.checkbox} style={{ fontWeight: "bold" }}>
        <input
          type="checkbox"
          name="vip"
          checked={formData.vip}
          onChange={handleChange}
        />
        Ich will VIP holen
      </label>

      <label className={styles.checkbox}>
        <input
          type="checkbox"
          name="privacy"
          checked={formData.privacy}
          onChange={handleChange}
          required
        />
        <span className={styles.privacyText} onClick={handlePrivacyClick}>
          Ich habe die Datenschutzerklärung gelesen und akzeptiert
        </span>
      </label>

      <button type="submit" className={styles.submit}>
        Termin Senden
      </button>

      <div className={styles.textBlock}>
        <p className={styles.title}>Termin erfolgreich gesendet!</p>
        <p className={styles.text}>
          Vielen Dank für Ihre Anfrage. Wir werden uns in Kürze mit Ihnen per
          E-Mail kontaktieren.
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
