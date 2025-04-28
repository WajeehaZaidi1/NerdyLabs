import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import HeroSection from "./components/HeroSection";
import VisionSection from "./components/VisionSection";
import Solutions from "./pages/Solutions";
import ContactForm from "./components/ContactForm";
import HeroPage from "./pages/HeroPage";
import ContactPage from "./pages/ContactPage";
import NerdsPage from "./pages/NerdsPage";
import Mission from "./pages/Mission";
import Careers from "./pages/Careers";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroPage />
                {/* <VisionSection /> */}
                {/* <Solutions /> */}
                {/* <ContactForm /> This is now at the very end */}
              </>
            }
          />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/nerds" element={<NerdsPage />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </main>
      <Footer/>
    </>
  );
}

export default App;
