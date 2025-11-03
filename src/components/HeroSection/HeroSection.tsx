import Container from "../UI/Container";
import styles from "./HeroSection.module.scss";
import checkMark from "../../assets/checkMark.svg";
import circle from "../../assets/circle.svg";
import person from "../../assets/personHeroSection.png";

function HeroSection() {
  // 🔹 Функція для плавного скролу
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section id="about" className={styles.hero}>
      <Container>
        <div className={styles.content}>
          {/* --- Left block --- */}
          <div className={styles.textBlock}>
            <h1 className={styles.title}>
              Stressfrei, Professionell <br />
              und Zuverlässig
            </h1>

            <p className={styles.subtitle}>
              <em>mit Putzzilla.</em>
            </p>

            <p className={styles.description}>
              Putzilla ist nicht nur ein Name — es ist unser Versprechen: Schmutz hat bei uns keine Chance!
              Unser „Reinigungs-Monster“ steht symbolisch für Energie, Gründlichkeit und Zuverlässigkeit.
            </p>

            <div className={styles.buttons}>
              <a href="tel:+491604580712" className={styles.callBtn}>
                + 49 160 4580712
              </a>

              <button
                className={styles.appointmentBtn}
                onClick={() => scrollToSection("callback")}
              >
                Termin vereinbaren →
              </button>
            </div>
          </div>

          {/* --- Right block (image + badge) --- */}
          <div className={styles.imageBlock}>
            <img
              src={circle}
              alt="Background Circle"
              className={styles.circle}
            />
            <img
              src={person}
              alt="Putzilla Mitarbeiter"
              className={styles.person}
            />
            
            {/* ✅ Перенесений бейдж сюди */}
            <div className={styles.badge}>
              <img src={checkMark} alt="Checkmark" />
              <span>Zertifizierte Fachkraft</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
