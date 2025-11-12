import AppointmentSection from "../../components/AppointmentSection/AppointmentSection";
import CallRequestForm from "../../components/CallRequestForm/CallRequestForm";
import ClientsSection from "../../components/ClientsSection/ClientsSection";
import ContactForm from "../../components/ContactForm/ContactForm";
import ConvincedSection from "../../components/ConvincedSection/ConvincedSection";
import DevicesSection from "../../components/DevicesSection/DeviceSection";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HeroSection from "../../components/HeroSection/HeroSection";
import OurServicesSection from "../../components/OurServicesSection/OurServicesSection";
import VipBenefits from "../../components/VipBenefits/VipBenefits";
import VIPSection from "../../components/VIPSection/VIPSection";

function MainPage() {

  return (
    <>
      <Header />
      <HeroSection />
      <DevicesSection />
      <OurServicesSection />
      <AppointmentSection />
      <ContactForm />
      <VIPSection />
      <VipBenefits />
      <ClientsSection />
      <CallRequestForm />
      <ConvincedSection />
      <Footer />
    </>
  )
}

export default MainPage;