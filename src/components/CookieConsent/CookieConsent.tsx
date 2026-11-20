import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import styles from "./CookieConsent.module.scss";
import { OPEN_COOKIE_SETTINGS_EVENT } from "../../services/cookieSettings";

const ONE_YEAR = 31536000;

// Удаляем cookies Google (Ads / Analytics), если посетитель отозвал согласие.
const removeGoogleCookies = () => {
  const host = window.location.hostname;
  const baseDomain = host.split(".").slice(-2).join(".");
  document.cookie
    .split(";")
    .map((c) => c.split("=")[0].trim())
    .filter((name) => /^(_ga|_gid|_gat|_gcl)/.test(name))
    .forEach((name) => {
      [undefined, host, `.${baseDomain}`].forEach((domain) => {
        document.cookie =
          `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT` +
          (domain ? `; domain=${domain}` : "");
      });
    });
};

const CookieConsent = () => {
  const [cookies, setCookie] = useCookies(["cookieConsent"]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!cookies.cookieConsent) {
      setIsVisible(true);
    }
  }, [cookies]);

  useEffect(() => {
    const open = () => setIsVisible(true);
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, open);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, open);
  }, []);

  const acceptAll = () => {
    setCookie("cookieConsent", "accepted", { path: "/", maxAge: ONE_YEAR });
    setIsVisible(false);
    window.loadGTM?.();
  };

  const decline = () => {
    setCookie("cookieConsent", "declined", { path: "/", maxAge: ONE_YEAR });
    setIsVisible(false);

    // Если GTM уже работал (согласие дали раньше, а теперь отозвали) —
    // запрещаем всё, чистим cookies Google и перезагружаем страницу без GTM.
    if (window.__gtmLoaded) {
      window.gtag?.("consent", "update", {
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
        analytics_storage: "denied",
      });
      removeGoogleCookies();
      window.location.reload();
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className={styles.cookieWrapper}
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-title"
    >
      <div className={styles.cookieContent}>
        <h3 id="cookie-title">Cookies &amp; Datenschutz</h3>
        <p>
          Wir verwenden technisch notwendige Cookies, damit diese Website
          funktioniert. Nur mit Ihrer Einwilligung nutzen wir zusätzlich den
          Google Tag Manager und Google Ads, um den Erfolg unserer Werbung zu
          messen. Dabei können Daten an Google (auch in die USA) übermittelt
          werden.
          <br />
          <br />
          Ihre Einwilligung ist freiwillig und kann jederzeit über
          „Cookie-Einstellungen“ unten auf der Seite widerrufen werden. Weitere
          Informationen finden Sie in unserer{" "}
          <a
            href="/datenschutzerklaerung"
            target="_blank"
            rel="noopener noreferrer"
          >
            Datenschutzerklärung
          </a>
          .
        </p>

        <div className={styles.buttons}>
          <button type="button" onClick={decline} className={styles.decline}>
            Ablehnen
          </button>
          <button type="button" onClick={acceptAll} className={styles.accept}>
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
