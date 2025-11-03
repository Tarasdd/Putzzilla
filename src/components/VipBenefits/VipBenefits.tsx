import React from "react";
import styles from "./VipBenefits.module.scss";

const benefits = [
  {
    title: "Priorisierte Terminplanung",
    text: "Bevorzugte Termine, selbst zu Stoßzeiten, für maximale Flexibilität und Komfort.",
    highlight: true,
  },
  {
    title: "Exklusive Angebote und Rabatte",
    text: "Sonderkonditionen und attraktive Rabatte sparen Geld und sichern exklusiven Service.",
  },
  {
    title: "Persönlicher Ansprechpartner",
    text: "Fester Ansprechpartner kümmert sich individuell um alle Wünsche und Anliegen.",
  },
  {
    title: "Premium-Qualität und gründliche Kontrolle",
    text: "Höchste Reinigungsstandards mit sorgfältiger Kontrolle für perfekte Ergebnisse.",
  },
  {
    title: "Zusätzliche Services auf Anfrage",
    text: "Extra-Leistungen wie Renovierung.",
  },
  {
    title: "Zeitersparnis und Komfort",
    text: "Wir organisieren alles, Sie genießen saubere Räume ohne Aufwand.",
    highlight: true,
  },
];

const VipBenefits: React.FC = () => {
  return (
    <section id="vip-benefits" className={styles.container}>
      {benefits.map((item, index) => (
        <div
          key={index}
          className={`${styles.card} ${item.highlight ? styles.highlight : ""}`}
        >
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.text}>{item.text}</p>
        </div>
      ))}
    </section>
  );
};

export default VipBenefits;
