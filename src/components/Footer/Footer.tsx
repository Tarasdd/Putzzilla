import styles from "./Footer.module.scss";
import { Mail, Phone, Send, MessageCircle } from "lucide-react";
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.logoBlock}>
          <h3>PUTZZILLA</h3>
          <img src={logo} alt="Putzilla Logo" className={styles.logo} />
        </div>

        {/* Impressum */}
        <div className={styles.column}>
          <h4>Datenschutz</h4>
          <div className={styles.contactItem}>
            <Mail size={26} color="#fcee96" />
            <a href="mailto:reinigungputzzilla@gmail.com">reinigungputzzilla@gmail.com</a>
          </div>
          <div className={styles.contactItem}>
            <Phone size={26} color="#fcee96" />
            <a href="tel:+4915123873732">+49 151 23873732</a>
          </div>
        </div>

        {/* Datenschutz */}
        <div className={styles.column}>
          <h4 className={styles.hiddenTitle}>ㅤ</h4>
          <div className={styles.contactItem}>
            <Send size={26} color="#fcee96" />
            <a href="tel:+4915123873732">+49 151 23873732</a>
          </div>
          <div className={styles.contactItem}>
            <MessageCircle size={26} color="#fcee96" />
            <a href="tel:+4915123873732">+49 151 23873732</a>
          </div>
        </div>
      </div>

      <p className={styles.address}>Schillerstr 56 86161 Augsburg</p>
    </footer>
  );
};

export default Footer;
