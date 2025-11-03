import { useState } from "react";
import styles from "./OurServicesSection.module.scss";

import circle from "../../assets/circle.svg";
import plus from "../../assets/plus.svg";
import cleanerImg from "../../assets/OurServicesPerson.png";

const services = [
  {
    title: "Reinigung von Arbeitsräumen und Büros",
    description:
      "Unsere Dienstleistung umfasst die gründliche Reinigung von Arbeitsräumen und Büros. Wir sorgen für Sauberkeit, Hygiene und Ordnung an jedem Arbeitsplatz, damit Ihre Mitarbeiter in einer angenehmen und produktiven Umgebung arbeiten können.",
  },
  {
    title: "Gebäudereinigung",
    description:
      "Unsere Gebäudereinigung bietet eine umfassende Pflege und Sauberkeit für Innen- und Außenbereiche. Wir reinigen Büros, Treppenhäuser, Flure und Gemeinschaftsräume gründlich und zuverlässig, um ein gepflegtes und repräsentatives Erscheinungsbild Ihres Gebäudes zu gewährleisten.",
  },
  {
    title: "Auto-Innenreinigung",
    description:
      "Unsere Auto-Innenreinigung sorgt für ein sauberes, frisches und gepflegtes Fahrzeuginterieur. Wir reinigen Polster, Teppiche und Armaturen gründlich, entfernen Flecken und Gerüche und bringen den Innenraum Ihres Autos wieder in neuwertigen Zustand.",
  },
  {
    title: "Reinigung des Geländes",
    description:
      "Wir kümmern uns um die ganzjährige Pflege Ihrer Außenanlagen. Dazu gehören Schnee- und Laubentfernung, Rasenmähen, Heckenschnitt und allgemeine Gartenpflege. So bleibt Ihr Grundstück stets sauber, sicher und gepflegt.",
  },
  {
    title: "Endreinigung umzugreinigung",
    description:
      "Unsere End- und Umzugsreinigung umfasst die vollständige Reinigung aller Räume sowie kleinere Renovierungsarbeiten. Wir übernehmen das Streichen von Wänden, kosmetische Reparaturen und sorgen dafür, dass Ihre Immobilie sauber, gepflegt und übergabebereit ist.",
  },
  {
    title: "Bau- und Renovierungsendreinigung",
    description:
      "Unsere Bau- und Renovierungsendreinigung entfernt zuverlässig Staub, Bauschutt und Verschmutzungen nach Bau- oder Renovierungsarbeiten. Wir sorgen für saubere Böden, Fenster, Oberflächen und Räume, sodass Ihr Objekt bezugsfertig und gepflegt erscheint.",
  },
  // {
  //   title: "End- und Umzugsreinigung",
  //   description:
  //     "Gründliche Reinigung nach Renovierungen oder Umzügen. Entfernung von Staub, Bauschutt und anderen Rückständen.",
  // },
  // {
  //   title: "Bau- und Renovierungsendreinigung",
  //   description:
  //     "Reinigung von neu gebauten oder renovierten Gebäuden vor der Übergabe. Perfekte Vorbereitung für den Einzug.",
  // },
];

function OurServicesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="services" className={styles.ourServices}>
      <div className={styles.circle}>
        <img src={circle} alt="Circle" />
      </div>

      <div className={styles.leftColumn}>
        <div className={styles.imageWrapper}>
          <img src={cleanerImg} alt="Cleaner" />
        </div>
      </div>

      <div className={styles.textBlock}>
        <h2 className={styles.title}>Unsere Dienstleistungen:</h2>

        <div className={styles.servicesList}>
          {services.map((service, index) => (
            <div key={index} className={styles.service}>
              <div
                className={styles.header}
                onClick={() => toggleService(index)}
              >
                <span>{service.title}</span>
                <img
                  src={plus}
                  alt="toggle"
                  className={`${styles.icon} ${
                    openIndex === index ? styles.open : ""
                  }`}
                />
              </div>

              <div
                className={`${styles.descriptionWrapper} ${
                  openIndex === index ? styles.open : ""
                }`}
              >
                <p className={styles.description}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className={styles.moreServices}>Und Weitere Dienstleistungen...</p>
      </div>
    </section>
  );
}

export default OurServicesSection;
