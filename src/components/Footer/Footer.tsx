import styles from "./Footer.module.scss";
import { Mail, Phone } from "lucide-react";
import telegramIcon from "../../assets/icons/telegram.svg";
import whatsAppIcon from "../../assets/icons/whatsapp.svg";
import logo from "../../assets/logo.png";

const Footer = () => {
  const handlePrivacyClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    window.open("/datenschutzerklaerung", "_blank");
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Logo block */}
        <div className={styles.logoBlock}>
          <h3>PUTZZILLA</h3>
          <img src={logo} alt="Putzilla Logo" className={styles.logo} />
        </div>

        {/* Email & Phone */}
        <div className={styles.column}>
          <h4 onClick={handlePrivacyClick}>Datenschutz</h4>
          <div className={styles.contactItem}>
            <Mail size={26} color="#fcee96" />
            <a href="mailto:reinigungputzzilla@gmail.com">
              reinigungputzzilla@gmail.com
            </a>
          </div>
          <div className={styles.contactItem}>
            <Phone size={26} color="#fcee96" />
            <a href="tel:+4915123873732">+49 151 23873732</a>
          </div>
        </div>

        {/* Telegram & WhatsApp */}
        <div className={styles.column}>
          <h4 className={styles.hiddenTitle}>ㅤ</h4>

          {/* Telegram */}
          <div className={styles.contactItem}>
            <img
              src={telegramIcon}
              alt="Telegram"
              width={26}
              height={26}
              className={styles.socialIcon}
            />
            <a
              href="https://t.me/+4915123873732"
              target="_blank"
              rel="noopener noreferrer"
            >
              +49 151 23873732
            </a>
          </div>

          {/* WhatsApp */}
          <div className={styles.contactItem}>
            <img
              src={whatsAppIcon}
              alt="WhatsApp"
              width={26}
              height={26}
              className={styles.socialIcon}
            />
            <a
              href="https://wa.me/4915123873732"
              target="_blank"
              rel="noopener noreferrer"
            >
              +49 151 23873732
            </a>
          </div>
        </div>
      </div>

      <a 
        className={styles.address}
        href="https://www.google.com/maps?q=Schillerstr+56,+86161+Augsburg"
        target="_blank"
      >
          Schillerstr 56, 86161 Augsburg
      </a>
    </footer>
  );
};

export default Footer;
