import "../serv.css";
import React from "react";
import { Link } from "react-router-dom";

const Awareness = () => {
  return (
    <div>
      <main className="servMain">
        <h2>Servicios de concientización en seguridad</h2>

        <div className="servInfo">
          <img
            className="servImg"
            src="../../img/auditory.jpg"
            alt="auditory"
          />
          <div className="servDescription">
            <h3 className="servH3">$ 999</h3>
            <p className="servText">
              Ofrecemos programas de capacitación y concientización en seguridad
              informática para empleados y equipos de TI. Nuestros cursos y
              talleres educativos están diseñados para mejorar la conciencia de
              seguridad, enseñando a identificar amenazas, buenas prácticas de
              seguridad y cómo protegerse contra ataques cibernéticos.
            </p>

            <h4 className="h4Ul">Beneficios</h4>
            <ul className="servUl">
              <li className="servLi">
                <i className="fas fa-shield-alt"></i>
                Mayor conocimiento y conciencia de seguridad entre los
                empleados.
              </li>
              <li className="servLi">
                <i className="fas fa-shield-alt"></i>
                Reducción del riesgo de violaciones de seguridad causadas por
                errores humanos.
              </li>
              <li className="servLi">
                <i className="fas fa-shield-alt"></i>
                Fortalecimiento de las defensas contra ataques cibernéticos.
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

export default Awareness;
