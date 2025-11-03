import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import CookieConsent from "./components/CookieConsent/CookieConsent";

function App() {
  return (
    <CookiesProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route
              path="/datenschutzerklaerung"
              element={<PrivacyPolicy />}
            />
          </Routes>
          <CookieConsent />
        </div>
      </Router>
    </CookiesProvider>
  );
}

export default App;