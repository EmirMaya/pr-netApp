import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="container text-center mt-5">
      <h1 class="display-1 fw-bold">404</h1>
      <p class="fs-3">
        {" "}
        <span class="text-danger">Opps!</span> Página no encontrada
      </p>
      <Link to="/" class="btn btn-primary custom-btn">
        Ir al inicio
      </Link>
    </div>
  );
};

export default Error404;
