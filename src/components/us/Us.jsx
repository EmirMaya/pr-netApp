//imports
import './us.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'

const Us = () => {

    const [showInfo, setShowInfo] = useState(false);

    const handleIconClick = () => {
        setShowInfo(!showInfo);
    }

    return (
        <div className='usDiv'>
            <Header />
            <main>
                <h2>Nosotros</h2>
                <div className='infoDiv'>
                    <div className='iconContainer'>
                        <div className='titleDiv'>
                            <i class="fas fa-plus" onClick={handleIconClick}></i>
                            <h3>Quienes somos</h3>
                        </div>

                        {showInfo && (
                            <div className='info'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur ab expedita harum doloribus praesentium quae eos quod nostrum, facere in blanditiis voluptates doloremque, fugit impedit possimus, libero quaerat adipisci laborum.
                            </div>
                        )}
                    </div>

                    <div className='iconContainer'>
                        <div className='titleDiv'>
                            <i class="fas fa-plus" onClick={handleIconClick}></i>
                            <h3>Quienes somos</h3>
                        </div>

                        {showInfo && (
                            <div className='info'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur ab expedita harum doloribus praesentium quae eos quod nostrum, facere in blanditiis voluptates doloremque, fugit impedit possimus, libero quaerat adipisci laborum.
                            </div>
                        )}
                    </div>

                    <div className='iconContainer'>
                        <div className='titleDiv'>
                            <i class="fas fa-plus" onClick={handleIconClick}></i>
                            <h3>Quienes somos</h3>
                        </div>

                        {showInfo && (
                            <div className='info'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur ab expedita harum doloribus praesentium quae eos quod nostrum, facere in blanditiis voluptates doloremque, fugit impedit possimus, libero quaerat adipisci laborum.
                            </div>
                        )}
                    </div>

                    <div className='iconContainer'>
                        <div className='titleDiv'>
                            <i class="fas fa-plus" onClick={handleIconClick}></i>
                            <h3>Quienes somos</h3>
                        </div>

                        {showInfo && (
                            <div className='info'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur ab expedita harum doloribus praesentium quae eos quod nostrum, facere in blanditiis voluptates doloremque, fugit impedit possimus, libero quaerat adipisci laborum.
                            </div>
                        )}
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Us