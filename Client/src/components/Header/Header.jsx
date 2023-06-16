//imports
import "./header.css";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  //añadimos una variable estado para ver si el navbar esta desplegado
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  //funcion que cambia el estado de isNavbarOpen
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  return (
    <header className="appHeader">
      <div className="logoDiv">
        <Link className="logo" to="/">
          <img src="../../img/logo.png" alt="logo" />
        </Link>
        <h1 className="homeH1">PR-NET</h1>
      </div>

      <nav className="navbar">
        <div className="navToggle" onClick={toggleNavbar}>
          <i className="burger fas fa-bars"></i>
        </div>

        <ul className={`navList  ${isNavbarOpen ? "open" : ""}`}>
          <li className="navItem">
            <NavLink to="/" onClick={toggleNavbar}>Inicio</NavLink>
          </li>
          <li className="navItem">
            <NavLink to="/services" onClick={toggleNavbar}>Servicios</NavLink>
          </li>
          <li className="navItem">
            <NavLink to="/us" onClick={toggleNavbar}>Nosotros</NavLink>
          </li>
          <li className="navItem">
            <NavLink to="/contact" onClick={toggleNavbar}>Contacto</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
