import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import styles from "./CookieConsent.module.scss";

const CookieConsent = () => {
  const [cookies, setCookie] = useCookies(["cookieConsent"]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!cookies.cookieConsent) {
      setIsVisible(true);
    }
  }, [cookies]);

  const acceptAll = () => {
    setCookie("cookieConsent", "accepted", { path: "/", maxAge: 31536000 });
    setIsVisible(false);
  };

  const decline = () => {
    setCookie("cookieConsent", "declined", { path: "/", maxAge: 31536000 });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={styles.cookieWrapper}>
      {/* document.cookie = "cookieConsent=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;"; */}
      <div className={styles.cookieContent}>
        <h3>Diese Website verwendet Cookies.</h3>
        <p>
        Diese Website verwendet Cookies und ähnliche Technologien, um Ihnen ein optimales Nutzererlebnis zu bieten. Dazu gehören funktionale Cookies, die für den Betrieb der Seite notwendig sind, sowie Cookies zu Analyse-, Statistik- und Marketingzwecken.
        Durch die Nutzung unserer Website oder durch Anklicken von „Alle akzeptieren“ stimmen Sie der Verarbeitung Ihrer Daten gemäß unserer Datenschutzinformationen zu. Sie können Ihre Zustimmung jederzeit anpassen oder widerrufen.
        Wofür wir Cookies nutzen:
        Technisch notwendige Cookies Damit die Webseite einwandfrei funktioniert — z. B. für Navigation, Formulare, Sicherheitsfunktionen und Service-Buchungen.
        Analyse- und Statistik-Cookies Um zu verstehen, wie Besucher unsere Website nutzen und welche Inhalte verbessert werden können. Wir verwenden diese Daten ausschließlich anonymisiert, um unsere Angebote zu optimieren.
        Marketing- und Personalisierungs-Cookies Um Ihnen relevante Inhalte und Services anzeigen zu können sowie unsere Kommunikation und Werbemaßnahmen zu verbessern. Dazu können auch Cookies von Drittanbietern gehören.
        Sie haben die Kontrolle. Sie können selbst entscheiden, welche Kategorien Sie zulassen möchten. Nicht notwendige Cookies werden nur gesetzt, wenn Sie zustimmen. Ihre Einstellungen können Sie jederzeit in den Cookie-Einstellungen ändern.
        Weitere Informationen finden Sie in unserer 👉 <a href="/datenschutzerklaerung" target="_blank" rel="noopener noreferrer">
              Datenschutzerklärung
            </a>.
        </p>
        
        <div className={styles.buttons}>
          <button onClick={decline} className={styles.settings}>
            Einstellungen
          </button>
          <button onClick={acceptAll} className={styles.accept}>
            Alle Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;