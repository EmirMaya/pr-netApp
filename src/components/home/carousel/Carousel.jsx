//imports
import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'better-react-carousel'
import './carousel.css'

const CarouselComp = () => {
    return (
        <Carousel className="carousel" rows={1} autoplay={5000} loop={true}>
            <Carousel.Item className='carouselItem'>
                <img className="carouselImg" src="../../public/img/carousel1.jpg" />
                <div className='carouselDiv'>
                    <div className='carouselBox'>
                        <h3 className='carouselH3'>
                            Garantizando la seguridad<br /> de tu infraestructura
                        </h3>
                        <Link className='carouselLink'>
                            Ver más
                        </Link>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item className='carouselItem'>
                <img className="carouselImg" src="../../public/img/carousel2.jpg" />
                <div className='carouselDiv'>
                    <div className='carouselBox'>
                        <h3 className='carouselH3'>
                            Fortaleciendo tus <br />
                            defensas digitales
                        </h3>
                        <Link className='carouselLink'>
                            Ver más
                        </Link>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item className='carouselItem'>
                <img className="carouselImg" src="../../public/img/carousel3.jpeg" />
                <div className='carouselDiv'>
                    <div className='carouselBox'>
                        <h3 className='carouselH3'>
                            Profesionales en protección <br /> contra ataques informáticos

                        </h3>
                        <Link className='carouselLink'>
                            Ver más
                        </Link>
                    </div>
                </div>
            </Carousel.Item>
            {/* ... */}
        </Carousel>
    )
}

export default CarouselComp