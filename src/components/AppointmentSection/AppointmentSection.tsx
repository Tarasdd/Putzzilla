import styles from "./AppointmentSection.module.scss";
import cleanerImg from "../../assets/personHeroSection.png"; 

function AppointmentSection() {
  return (
    <section className={styles.appointment}>
      <div className={styles.textBlock}>
        <p className={styles.subtitle}>BEQUEME TERMINE, STRESSFREI</p>
        <h2 className={styles.title}>
          Termin <br /> Vereinbaren
        </h2>
      </div>

      <div className={styles.imageBlock}>
        <img src={cleanerImg} alt="Cleaner" />
      </div>
    </section>
  );
}

export default AppointmentSection;
