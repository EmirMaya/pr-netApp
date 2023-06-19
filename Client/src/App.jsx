import "./assets/styles/App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Us from "./pages/AboutUs/AboutUs";
import Services from "./pages/Services/Services";
import DetailService from "./pages/DetailService/DetailService";
import Contact from "./pages/Contact/Contact";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Error404 from "./components/Error404/Error404";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Routes>
          <Route path="*" element={<Error404 />} />
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/cart" element={<Cart />} />
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
