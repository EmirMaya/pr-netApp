// Imports
import './home.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../header/Header'
import CarouselComp from './carousel/Carousel'
import Footer from '../footer/Footer'



const Home = () => {



    return (
        <div className='homeDiv'>
            <Header />

            <main className='homeMain'>
                <CarouselComp />
                <div className='services'>
                    <h4>
                        Servicios de seguridad cibernética
                    </h4>
                    <div className='serviceDiv'>
                        <img className='serviceImg' src="../../public/img/services.jpg" alt="" />
                        <ul className='serviceUl'>
                            <li className='serviceLi'>
                                <div>
                                    <i className="fas fa-laptop"></i>
                                    Resguardo
                                </div>
                                <p className='serviceText'>Los datos de tu empresa pueden quedar resguardados de manera correcta, fiable y flexible.</p>
                            </li>
                            <li className='serviceLi'>
                                <i className="fas fa-laptop"></i>Protección
                                <p className='serviceText'>
                                    Ningún incidente en tu infraestructura podrá dejar a tu organización a la deriva, siempre Veeam estará para responder.
                                </p>
                            </li>
                            <li className='serviceLi'>
                                <i className="fas fa-laptop"></i>
                                ¿Como podemos ayudarte?
                                <p className='serviceText'>
                                    Sabemos lo complejo que puede ser gestionar la ciberseguridad en las Pymes, por eso nuestras soluciones proporcionan visibilidad y administración centralizadas de los dispositivos de seguridad sin sacrificar la eficiencia y la calidad de la experiencia del cliente.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className='linkDiv'>
                        <Link className='serviceLink' to='/services'>
                            Explorar
                        </Link>
                    </div>
                </div>

                <div className='thirdDiv'>
                    <h4>
                        Aspectos Diferenciales
                    </h4>

                    <div className='cardsDiv'>
                        <div className='card'>
                            <img className='cardImg' src="../../public/img/analytics.svg" alt="" />
                            <h5 className='cardTitle'>
                                Analytics
                            </h5>
                        </div>
                        <div className='card'>
                            <img className='cardImg' src="../../public/img/cloud.svg" alt="" />
                            <h5 className='cardTitle'>
                                Respaldo de datos
                            </h5>
                        </div>
                        <div className='card'>
                            <img className='cardImg' src="../../public/img/progress.svg" alt="" />
                            <h5 className='cardTitle'>
                                Continuidad
                            </h5>
                        </div>
                        <div className='card'>
                            <img className='cardImg' src="../../public/img/security.svg" alt="" />
                            <h5 className='cardTitle'>
                                Seguridad
                            </h5>
                        </div>
                        <div className='card'>
                            <img className='cardImg' src="../../public/img/server.svg" alt="" />
                            <h5 className='cardTitle'>
                                Servidores
                            </h5>
                        </div>
                        <div className='card'>
                            <img className='cardImg' src="../../public/img/team.svg" alt="" />
                            <h5 className='cardTitle'>
                                Servicio personalizado
                            </h5>

                        </div>

                        <div className='linkDiv'>
                            <Link className='serviceLink' to='/us'>
                                Descubre
                            </Link>
                        </div>
                    </div>
                </div>

            </main>

            <Footer />
        </div >
    )
}

export default Home