import "../serv.css";
import React from "react";
import { Link } from "react-router-dom";

const MobileApp = () => {
  return (
    <div>
      <main className="servMain">
        <h2>Pruebas de penetración de aplicaciones móviles</h2>

        <div className="servInfo">
          <img
            className="servImg"
            src="../../img/auditory.jpg"
            alt="auditory"
          />
          <div className="servDescription">
            <h3 className="servH3">$ 999</h3>
            <p className="servText">
              Evaluamos la seguridad de tus aplicaciones móviles, simulando
              ataques para identificar vulnerabilidades y debilidades. Nuestro
              equipo experto en hacking ético analiza las aplicaciones en busca
              de problemas como fugas de datos, inyecciones de código, problemas
              de autenticación y más.
            </p>

            <h4 className="h4Ul">Beneficios</h4>
            <ul className="servUl">
              <li className="servLi">
                <i className="fas fa-shield-alt"></i>
                Detección de vulnerabilidades en aplicaciones móviles.
              </li>
              <li className="servLi">
                <i className="fas fa-shield-alt"></i>
                Protección de la información confidencial de los usuarios.
              </li>
              <li className="servLi">
                <i className="fas fa-shield-alt"></i>
                Mejora de la seguridad y confianza en tus aplicaciones móviles.
              </li>
            </ul>
          </div>
        </div>

        <div className="linkDiv">
          <Link className="serviceLink" to="/buy">
            Adquirir
          </Link>
        </div>
      </main>
    </div>
  );
};

export default MobileApp;
