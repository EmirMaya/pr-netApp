import "./header.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import cartSvg from "../../../public/img/cart.svg";
import Cart from "../../components/Cart/Cart";

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const openModal = () => {
    setShowModal(true);
    setShowCart(true);
  };

  return (
    <header className="appHeader">
      <div className="logoDiv">
        <NavLink className="logo" to="/">
          <img src="../../img/logo.png" alt="logo" />
        </NavLink>
        <h1 className="homeH1">PR-NET</h1>
      </div>

      <nav className="navbar">
        <div className="navToggle" onClick={toggleNavbar}>
          <i className="burger fas fa-bars"></i>
        </div>

        <ul className={`navList  ${isNavbarOpen ? "open" : ""}`}>
          <li className="navItem">
            <NavLink to="/" onClick={toggleNavbar}>
              Inicio
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink to="/services" onClick={toggleNavbar}>
              Servicios
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink to="/us" onClick={toggleNavbar}>
              Nosotros
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink to="/contact" onClick={toggleNavbar}>
              Contacto
            </NavLink>
          </li>
          <li className="navItem">
            <button
              onClick={() => {
                openModal();
                toggleNavbar();
              }}
              className="cart-button"
            >
              <img src={cartSvg} alt="Cart" className="cart-icon" />
            </button>
          </li>
        </ul>
      </nav>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton />
        <Modal.Body>{showCart && <Cart />}</Modal.Body>
      </Modal>
    </header>
  );
};

export default Header;
