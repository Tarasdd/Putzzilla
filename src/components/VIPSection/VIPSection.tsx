import styles from "./VIPSection.module.scss";
import cleaner from "../../assets/VIPSectionPerson.png";

const VIPSection = () => {
  const smoothScrollTo = (targetId: string) => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1000; 
    let start: number | null = null;

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const animation = (currentTime: number) => {
      if (!start) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeOutCubic(progress);

      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  const handleVIPClick = () => {
    const form = document.getElementById("callback");
    if (form) {
      const vipCheckbox = form.querySelector('input[name="vip"]') as HTMLInputElement;
      if (vipCheckbox && !vipCheckbox.checked) {
        vipCheckbox.checked = true;

        const event = new Event("input", { bubbles: true });
        vipCheckbox.dispatchEvent(event);
      }

      smoothScrollTo("callback");
    }
  };

  const handleDiscoverClick = () => {
    smoothScrollTo("vip-benefits");
  };

  return (
    <section id="pricing" className={styles.vip}>
      <p className={styles.discount}>SPARE BIS ZU 20% VON DEN PREIS</p>

      <h2 className={styles.title}>
        Hol unsere <span>VIP Abo</span> und profitiere <br /> ab sofort davon
      </h2>

      <div className={styles.imageContainer}>
        <img src={cleaner} alt="VIP Service" className={styles.image} />
      </div>

      <div className={styles.textBlock}>
        <h3>Wofür brauchst du unsere VIP Tarif?</h3>
        <p>
          Intensives Reinigen von stark verschmutzten Böden, Ecken, Wänden –
          einschließlich schwer zugänglicher Stellen. Streifenfreier Durchblick –
          innen und außen, je nach Gebäudehöhe und Ausstattung.
        </p>

        <div className={styles.buttons}>
          <button onClick={handleVIPClick} className={styles.primary}>
            VIP holen
          </button>
          <button onClick={handleDiscoverClick} className={styles.secondary}>
            Mehr entdecken
          </button>
        </div>
      </div>
    </section>
  );
};

export default VIPSection;
