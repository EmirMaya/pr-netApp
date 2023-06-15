import "./assets/styles/App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/navigation/header/Header";
import Home from "./containers/pages/Home";
import Us from "./containers/pages/AboutUs";
import Services from "./containers/pages/Services";
import DetailService from "./containers/pages/DetailService";
import Contact from "./containers/pages/Contact";
import Footer from "./components/navigation/footer/Footer";
import Error404 from "./containers/errors/Error404";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Routes>
          <Route path="*" element={<Error404 />} />
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<DetailService />} />
          <Route path="/us" element={<Us />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
