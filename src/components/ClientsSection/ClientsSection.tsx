import styles from "./ClientsSection.module.scss";
import client1 from "../../assets/logos/novus.png";
import client2 from "../../assets/logos/mix.png";
import client3 from "../../assets/logos/billa.png";
import client4 from "../../assets/logos/president.png";
import client5 from "../../assets/logos/sportlife.png";
import client6 from "../../assets/logos/tam.png";

function ClientsSection() {
  return (
    <section id="clients" className={styles.clients}>
      <div className={styles.content}>
        <div className={styles.textBlock}>
          <h2 className={styles.title}>Unsere Kunden vertrauen uns</h2>
          <p className={styles.subtitle}>
            Führende Marken, die mit <em>Putzzilla</em> zusammenarbeiten.
          </p>
        </div>

        <div className={styles.logosBlock}>
          <div className={styles.logoRow}>
            <img src={client1} alt="Client 1" />
            <img src={client2} alt="Client 2" />
            <img src={client3} alt="Client 3" />
            <img src={client4} alt="Client 4" />
            <img src={client5} alt="Client 5" />
            <img src={client6} alt="Client 6" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientsSection;
