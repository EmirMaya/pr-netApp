import "../serv.css";
import React from "react";
import { Link } from "react-router-dom";

const Internet = () => {
  return (
    <div>
      <main className="servMain">
        <h2>Evaluación de seguridad de Internet de las Cosas (IoT)</h2>

        <div className="servInfo">
          <img
            className="servImg"
            src="../../img/auditory.jpg"
            alt="auditory"
          />
          <div className="servDescription">
            <h3 className="servH3">$ 999</h3>
            <p className="servText">
              Realizamos pruebas de seguridad en dispositivos y sistemas
              conectados a Internet de las Cosas. Nuestro equipo examinará la
              seguridad de tus dispositivos IoT, identificará posibles
              vulnerabilidades y te brindará recomendaciones para proteger la
              privacidad y la integridad de los datos en entornos IoT.
            </p>

            <h4 className="h4Ul">Beneficios</h4>
            <ul className="servUl">
              <li className="servLi">
                <i className="fas fa-shield-alt"></i>
                Evaluación de la seguridad de tus dispositivos IoT.
              </li>
              <li className="servLi">
                <i className="fas fa-shield-alt"></i>
                Identificación y mitigación de riesgos de seguridad en entornos
                IoT.
              </li>
              <li className="servLi">
                <i className="fas fa-shield-alt"></i>
                Protección de datos y privacidad en dispositivos y sistemas
                conectados.
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

export default Internet;
