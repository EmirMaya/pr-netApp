import React from 'react'
import { Link } from 'react-router-dom'


function Error404() {
  return (
    <body>
        <div class="d-flex align-items-center justify-content-center vh-100">
            <div class="text-center">
                <h1 class="display-1 fw-bold">404</h1>
                <p class="fs-3"> <span class="text-danger">Opps!</span> Página no encontrada</p>
                <p class="lead">
                    La página que buscas no existe.
                  </p>
                <Link to="/" class="btn btn-primary custom-btn">Ir al inicio</Link>
            </div>
        </div>
    </body>

  )
}

export default Error404