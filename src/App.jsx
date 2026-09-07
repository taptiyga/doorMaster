import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Services } from "./components/Services/Services";
import { Calculator } from "./components/Calculator/Calculator";
import { HowItWorks } from "./components/HowItWorks/HowItWorks";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Advantages } from "./components/Advantages/Advantages";
import { Reviews } from "./components/Reviews/Reviews";
import { FAQ } from "./components/FAQ/FAQ";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { Footer } from "./components/Footer/Footer";

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Calculator />
        <HowItWorks />
        <Portfolio />
        <Advantages />
        <Reviews />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
