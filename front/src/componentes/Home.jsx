import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import img1 from '../images/Fondo de Vídeo Degradado Color y Estilo Rojo Claro Verde Claro.png';
import img2 from '../images/neptunojupi.png'
import img3 from '../images/plutonept.png';




function Home() {
    return (
        <Carousel variant="dark" className = "carousel">
        <Carousel.Item>
            <img
            className="fotoCarousel"
            src={img1}
            alt="First slide"
            />

        </Carousel.Item>
        <Carousel.Item>
            <img
            className="fotoCarousel"
            src={img2}
            alt="Second slide"
            />

        </Carousel.Item>
        <Carousel.Item>
            <img
            className="fotoCarousel"
            src={img3}
            alt="Third slide"
            />

        </Carousel.Item>
        </Carousel>
    );
}

export default Home;
