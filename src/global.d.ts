// Дозволяє імпорт стилів
declare module '*.module.scss';
declare module '*.module.sass';
declare module '*.module.css';

// Дозволяє імпорт звичайних CSS
declare module '*.css';

// Дозволяє імпорт зображень
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.svg';

// Google Tag Manager
interface Window {
  dataLayer: unknown[];
}

// Google Consent Mode / GTM loader (объявлены в index.html)
interface Window {
  gtag?: (...args: unknown[]) => void;
  loadGTM?: () => void;
  __gtmLoaded?: boolean;
}
