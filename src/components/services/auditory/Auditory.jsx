import "../serv.css";
import React from "react";
import { Link } from "react-router-dom";

const Auditory = () => {
  return (
    <div>
      <main className="servMain">
        <h2>Auditorias de seguridad</h2>

        <div className="servInfo">
          <img
            className="servImg"
            src="../../img/auditory.jpg"
            alt="auditory"
          />
          <div className="servDescription">
            <h3 className="servH3">$ 999</h3>
            <p className="servText">
              Realizamos evaluaciones exhaustivas de la infraestructura de
              seguridad de tu organización para identificar posibles
              vulnerabilidades y puntos débiles. Nuestro equipo de expertos en
              hacking ético utiliza metodologías probadas y herramientas
              avanzadas para evaluar la seguridad de tus sistemas y redes.
            </p>

            <h4 className="h4Ul">Beneficios</h4>
            <ul className="servUl">
              <li className="servLi">
                <i className="fas fa-shield-alt"></i>
                Identificación de vulnerabilidades y riesgos de seguridad.
              </li>
              <li className="servLi">
                <i className="fas fa-shield-alt"></i>
                Recomendaciones personalizadas para mejorar la seguridad.
              </li>
              <li className="servLi">
                <i className="fas fa-shield-alt"></i>
                Protección proactiva contra amenazas y ataques cibernéticos.
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

export default Auditory;
