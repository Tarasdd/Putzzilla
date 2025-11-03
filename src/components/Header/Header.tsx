import styles from "../Header/Header.module.scss";
import logo from "../../assets/logo.png";

function Header() {
  const handleScroll = (e: React.MouseEvent<HTMLElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      const start = window.scrollY;
      const end = target.getBoundingClientRect().top + start;
      const duration = 1000; 
      const startTime = performance.now();

      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeOutCubic(progress);
        window.scrollTo(0, start + (end - start) * eased);

        if (elapsed < duration) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  };

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} height={140} alt="Putzilla Cleaning" />
      </div>

      <div className={styles.nav}>
        <a href="#about" onClick={(e) => handleScroll(e, "#about")}>
          Über uns
        </a>
        <a href="#services" onClick={(e) => handleScroll(e, "#services")}>
          Leistungen
        </a>
        <a href="#callback" onClick={(e) => handleScroll(e, "#callback")}>
          Preise
        </a>
      </div>

      <button
        className={styles.button}
        onClick={(e) => handleScroll(e, "#callback")}
      >
        Termin vereinbaren
      </button>
    </div>
  );
}

export default Header;
