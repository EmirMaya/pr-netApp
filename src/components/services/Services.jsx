import './services.css'
import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'

const Services = () => {
    return (
        <div className='serviceDiv'>
            <Header />
            <main>
                <div className='servicesDiv'>
                    <h2>
                        Servicios
                    </h2>
                    <div className='cardContainer'>
                        <div className='cardService'>
                            <img src="../../public/img/auditory.jpg" alt="" />
                            <h3 className='cardH3'>Auditorías de <br/>seguridad</h3>
                            <p className='cardPrice'>$ 999</p>

                            <Link className='cardButton' to=''>
                                Adquirir
                            </Link>


                        </div>
                        <div className='cardService'>
                            <img src="../../public/img/auditory.jpg" alt="" />
                            <h3 className='cardH3'>Pruebas de penetración de aplicaciones móviles</h3>
                            <p className='cardPrice'>$ 999</p>

                            <Link className='cardButton' to=''>
                                Adquirir
                            </Link>

                        </div>
                        <div className='cardService'>
                            <img src="../../public/img/auditory.jpg" alt="" />
                            <h3 className='cardH3'>Servicios de concientización en seguridad</h3>
                            <p className='cardPrice'>$ 999</p>

                            <Link className='cardButton' to=''>
                                Adquirir
                            </Link>

                        </div>
                        <div className='cardService'>
                            <img src="../../public/img/auditory.jpg" alt="" />
                            <h3 className='cardH3'>Respuesta a incidentes de seguridad</h3>
                            <p className='cardPrice'>$ 999</p>

                            <Link className='cardButton' to=''>
                                Adquirir
                            </Link>

                        </div>
                        <div className='cardService'>
                            <img src="../../public/img/auditory.jpg" alt="" />
                            <h3 className='cardH3'>Evaluación de seguridad de Internet de las Cosas (IoT)</h3>
                            <p className='cardPrice'>$ 999</p>
                            <Link className='cardButton' to=''>
                                Adquirir
                            </Link>
                        </div>

                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Services