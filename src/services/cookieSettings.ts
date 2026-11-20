// Повторное открытие cookie-баннера (например, из футера или со страницы Datenschutz).
export const OPEN_COOKIE_SETTINGS_EVENT = "open-cookie-settings";

export const openCookieSettings = () => {
  window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT));
};
