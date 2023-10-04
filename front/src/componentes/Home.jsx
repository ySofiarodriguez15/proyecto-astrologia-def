import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import img1 from '../images/Home.png';





function Home() {
    return (
        <div class="container">
        <Row>
            <div class="container">
                <Col className="col-12">
                        <img src={img1} alt="Imágen no disponible" height={950} class="imgResponsive"/>
                </Col>
            </div>

            <Col className="col-12">
                <div>
                    <h1 className='pHome'> Una guía para explorar el misterioso mundo del inconsciente y la astrología</h1>
                    <p className='pHome'> La idea es que encuentres un espacio para explorar el apasionante mundo del tarot y la astrología. El objetivo es brindarte una experiencia enriquecedora que te permita comprender y aprovechar el poder transformador de estas disciplinas. En Plutón en Linea se ofrecen servicios para ayudarte en tu camino de autoconocimiento.
                        ¿Te gustaría descubrir las influencias astrológicas en tu vida a través de una consulta de tu carta natal? A través de ella podemos comprender nuestras fortalezas, debilidades y potencialidades.
                        Además, me atrevo a acercarme para que exploremos el tarot evolutivo, una herramienta poderosa para acceder a tu sabiduría interior y obtener una comprensión más profunda de tus desafíos y oportunidades. Será un viaje de autoexploración y crecimiento personal.
                        Te invito a sumergirte en el fascinante mundo del zodíaco, los planetas, las casas astrológicas y las poderosas energías de Plutón, que simbolizan la transformación profunda y el renacimiento del alma.
                        ¡Gracias por visitar la web! Espero poder acompañarte en este viaje.
                    </p>
                </div>
                </Col>

        </Row>

        <Row>
            <Col className="col-12 fw-normal">
                <h4>Alguna consulta? No dudes en preguntarnos!</h4>
            </Col>
        </Row>      
        <Row>
            <Col className="col-12">
                <button className='botonHome'>
                    <Nav.Link href="Formulario"><h6 className='h6ButonHome'>Click aquí para consultas</h6></Nav.Link>
                </button>
            </Col>
        </Row>
        </div>
    );
}

export default Home;
