import React from "react";
import styles from "./PrivacyPolicy.module.scss";

const PrivacyPolicy = () => {
  return (
    <section className={styles.policy}>
      <div className={styles.container}>
        <h1 className={styles.title}>Datenschutzerklärung</h1>
        <p className={styles.updated}>Stand: Oktober 2025</p>

        <h2>1. Verantwortlicher</h2>
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website ist:
          <br />
          <strong>Putzzilla Cleaning</strong> <br />
          Inhaberin: Dmytro Tereshchenko <br />
          Adresse: Schillerstr 56, 86161 Augsburg <br />
          Telefon: +49 151 23873732 <br />
          E-Mail: reinigungputzzilla@gmail.com <br />
          Website: putzzilla.com
        </p>

        <h2>2. Allgemeine Hinweise zur Datenverarbeitung</h2>
        <p>
          Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen.
          Wir behandeln Ihre personenbezogenen Daten vertraulich und
          entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser
          Datenschutzerklärung. Personenbezogene Daten sind alle Daten, mit
          denen Sie persönlich identifiziert werden können.
        </p>

        <h2>
          3. Erhebung und Speicherung personenbezogener Daten sowie Art und
          Zweck der Verwendung
        </h2>
        <h3>a) Beim Besuch der Website</h3>
        <p>
          Beim Aufrufen unserer Website werden automatisch Informationen an den
          Server unserer Website gesendet und in sogenannten Logfiles
          gespeichert (z. B. IP-Adresse, Datum und Uhrzeit, Browsertyp,
          Referrer-URL). Diese Daten werden zur Sicherstellung eines
          reibungslosen Betriebs und zur Systemsicherheit verwendet.
        </p>

        <h3>b) Kontaktformular</h3>
        <p>
          Wenn Sie uns per Kontaktformular Anfragen senden, werden Ihre
          Angaben zwecks Bearbeitung der Anfrage gespeichert. Diese Daten geben
          wir nicht ohne Ihre Einwilligung weiter. Rechtsgrundlage: Art. 6 Abs.
          1 lit. b DSGVO.
        </p>

        <h3>c) Terminvereinbarung</h3>
        <p>
          Bei Nutzung unseres Terminformulars werden Ihre eingegebenen Daten
          zur Bearbeitung Ihres Termins verarbeitet. Nach Abschluss werden
          diese gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten
          bestehen.
        </p>

        <h2>4. Verwendung von Google Fonts</h2>
        <p>
          Diese Website verwendet Google Fonts zur einheitlichen Darstellung
          von Schriftarten. Beim Laden werden Daten an Google in den USA
          übertragen. Weitere Informationen finden Sie unter:{" "}
          <a
            href="https://policies.google.com/privacy?hl=de"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://policies.google.com/privacy?hl=de
          </a>
        </p>

        <h2>5. Cookies</h2>
        <p>
          Unsere Website verwendet ausschließlich technisch notwendige Cookies,
          die für die Funktionalität erforderlich sind. Tracking- oder
          Analyse-Cookies werden nicht verwendet.
        </p>

        <h2>6. Dauer der Datenspeicherung</h2>
        <p>
          Personenbezogene Daten werden gelöscht, sobald der Zweck entfällt
          oder Sie Ihre Einwilligung widerrufen, sofern keine gesetzlichen
          Aufbewahrungsfristen bestehen.
        </p>

        <h2>7. Ihre Rechte</h2>
        <ul>
          <li>Auskunft über gespeicherte Daten (Art. 15 DSGVO)</li>
          <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
          <li>Löschung (Art. 17 DSGVO)</li>
          <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
          <li>Beschwerde bei der Aufsichtsbehörde (Art. 77 DSGVO)</li>
        </ul>

        <h2>8. Datensicherheit</h2>
        <p>
          Wir verwenden SSL-Verschlüsselung, um Ihre Daten sicher zu
          übertragen. Erkennbar an „https://“ und dem Schloss-Symbol in der
          Browserzeile.
        </p>

        <h2>9. Änderungen dieser Datenschutzerklärung</h2>
        <p>
          Diese Erklärung kann an gesetzliche Vorgaben oder technische
          Entwicklungen angepasst werden. Die jeweils aktuelle Version finden
          Sie immer unter{" "}
          <strong>www.putzzilla.com/datenschutzerklaerung</strong>.
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
