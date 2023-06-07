import "../serv.css";
import React from "react";
import { Link } from "react-router-dom";

const Incidents = () => {
  return (
    <div>
      <main className="servMain">
        <h2>Respuesta a incidentes de seguridad</h2>

        <div className="servInfo">
          <img
            className="servImg"
            src="../../img/auditory.jpg"
            alt="auditory"
          />
          <div className="servDescription">
            <h3 className="servH3">$ 999</h3>
            <p className="servText">
              Brindamos servicios de respuesta rápida y eficiente en caso de que
              tu organización sufra un incidente de seguridad. Nuestro equipo de
              expertos en respuesta a incidentes ayudará a mitigar los impactos,
              investigar la causa raíz del incidente y restaurar la seguridad
              del sistema afectado.
            </p>

            <h4 className="h4Ul">Beneficios</h4>
            <ul className="servUl">
              <li className="servLi">
                <i className="fas fa-shield-alt"></i>
                Respuesta rápida y eficiente ante incidentes de seguridad.
              </li>
              <li className="servLi">
                <i className="fas fa-shield-alt"></i>
                Reducción del tiempo de inactividad y pérdida de datos.
              </li>
              <li className="servLi">
                <i className="fas fa-shield-alt"></i>
                Mejora de la capacidad de recuperación frente a futuros
                incidentes
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

export default Incidents;
