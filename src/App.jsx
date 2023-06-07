import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Us from "./components/us/Us";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Auditory from "./components/services/auditory/auditory";
import MobileApp from "./components/services/mobileApp/MobileApp";
import Awareness from "./components/services/awareness/Awareness";
import Incidents from "./components/services/incidents/Incidents";
import Internet from "./components/services/internet/Internet";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/us" element={<Us />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auditory" element={<Auditory />} />
          <Route path="/mobileApp" element={<MobileApp />} />
          <Route path="/awareness" element={<Awareness />} />
          <Route path="/incidents" element={<Incidents />} />
          <Route path="/internet" element={<Internet />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
