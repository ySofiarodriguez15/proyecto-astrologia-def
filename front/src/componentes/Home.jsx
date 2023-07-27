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
                    <p className='pHome'> Aquí encontrarás un espacio dedicado a explorar el apasionante mundo del tarot y la astrología. Nuestro objetivo es brindarte una experiencia enriquecedora y profunda que te permita comprender y aprovechar el poder transformador de estas disciplinas. En Plutón en Línea te ofrecemos algunos servicios para ayudarte en tu camino de autoconocimiento. ¿Te gustaría descubrir las misteriosas influencias astrológicas en tu vida a través de una consulta de carta natal personalizada? Estamos disponibles para ofrecerte lecturas e interpretaciones que te ayudarán a comprender tus fortalezas, debilidades y potencialidades.
                        Además, también te invitamos a explorar nuestro servicio de tarot evolutivo, una herramienta poderosa para acceder a tu sabiduría interior y obtener una comprensión más profunda de tus desafíos y oportunidades. Te guiaremos en un viaje de autoexploración y crecimiento personal.
                        En Plutón en línea, la astrología es más que una simple disciplina, es una herramienta para la transformación y el autodescubrimiento. Te invitamos a sumergirte en el fascinante mundo del zodíaco, los planetas, las casas astrológicas y las poderosas energías de Plutón, que simbolizan la transformación profunda y el renacimiento del alma.
                        Nos apasiona compartir contigo nuestra sabiduría astrológica y ayudarte a aprovechar al máximo tu potencial en tu vida cotidiana. 
                        ¡Gracias por unirte a nuestra comunidad! Te deseamos un emocionante viaje de descubrimiento y transformación.
                        Que los astros iluminen tu camino.</p>
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
