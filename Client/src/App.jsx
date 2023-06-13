import "./assets/styles/App.css";
import { Route, Routes } from "react-router-dom";
import Services from "./containers/pages/Services";
import Us from "./containers/pages/AboutUs";
import Contact from "./containers/pages/Contact";
import Header from "./components/navigation/header/Header";
import Footer from "./components/navigation/footer/Footer";
import Auditory from "./components/services/auditory/auditory";
import MobileApp from "./components/services/mobileApp/MobileApp";
import Awareness from "./components/services/awareness/Awareness";
import Incidents from "./components/services/incidents/Incidents";
import Internet from "./components/services/internet/Internet";
import Error404 from "./containers/errors/Error404"
import Home from "./containers/pages/Home";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Routes>
          <Route path="*" element={<Error404 />} />

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
