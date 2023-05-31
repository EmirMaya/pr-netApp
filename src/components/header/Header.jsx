//imports
import './header.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    //añadimos una variable estado para ver si el navbar esta desplegado
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    //funcion que cambia el estado de isNavbarOpen
    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    }
    return (
        <header className='appHeader'>
            <div className='logoDiv'>
                <Link className='logo' to='/'>
                    <img src="../../public/img/logo.png" alt="logo" />
                </Link>
                <h1 className='homeH1'>PR-NET</h1>
            </div>

            <nav className='navbar'>
                <div className='navToggle' onClick={toggleNavbar}>
                    <i className="burger fas fa-bars"></i>
                </div>


                <ul className={`navList  ${isNavbarOpen ? 'open' : ''}`}>
                    <li className='navItem'>
                        <Link to='/'>Inicio</Link>
                    </li>
                    <li className='navItem'>
                        <Link to='/services'>Servicios</Link>
                    </li>
                    <li className='navItem'>
                        <Link to='/us'>Nosotros</Link>
                    </li>
                    <li className='navItem'>
                        <Link to='/contact'>Contacto</Link>
                    </li>
                </ul>
                {/* {isNavbarOpen && (
                        <div className="navOverlay" onClick={toggleNavbar}></div>
                    )} */}
            </nav>

        </header>
    )
}

export default Header