
import calculoCarta from '../images/CartaNatal.png';
import tarot from '../images/Tarot.png';
import { Container, Row, Col} from 'react-bootstrap';
import React, { useState } from 'react';





function Servicios() {
  const [mostrarInfo, setMostrarInfo] = useState(false);
  const [infoImagen, setInfoImagen] = useState('');

  const handleClick = (info) => {
    setMostrarInfo(!mostrarInfo);
    setInfoImagen(info);
  };

  return (
    <Container className="mt-5">
      <Row className="display-5">
        <Col xs>
          <img
            src={calculoCarta}
            alt="calculoCartaNatal"
            height={"400px"}
            className="imgResponsive"
            onClick={() =>
              handleClick( 
              <div>
              <ul>
                <li>Interpretación de tu Sol, Luna y Ascendente + algún aspecto de interés que quieras que interpretemos (puede ser amor/relaciones, inclinaciones vocacionales, trabajo, etc).  </li>
                <li>Análisis de tu carta natal. Se enviará el dibujo de tu carta astral, junto con un archivo detallado que explora cada uno de sus componentes. Conoce cómo los planetas y las casas influyen en tu vida y descubre tus fortalezas y desafíos.</li></ul>
                <p className='container'>En Plutón en Linea, hay un gran interés por brindarte un servicio de calidad. Primero, nos comunicaremos a través de WhatsApp para asegurarnos de tener los datos de nacimiento correctos. Luego, en un plazo de 7 días, te enviaremos por correo electrónico el dibujo de tu carta natal y su descripción detallada. El pago se realiza una vez que hayamos finalizado la interpretación y esté lista para enviar.
                  También existe la opción de poder concretar una cita vía Zoom.
                </p>
                <p className='container'>Es importante tener en cuenta que la astrología no es un juego de adivinación. Nos enfocamos en el crecimiento personal, el autoconocimiento y la exploración de nuevos puntos de vista. Nuestros servicios te ayudarán a reconocerte como individuo y a obtener una visión más profunda de ti mismo. ¡Déjanos guiar tu viaje de autodescubrimiento!</p>
                <Row>
                  <Col className='container'>
                    <button className='botonHome'>
                      <a href='./Formulario' className='text-dark '>
                        Ir al formulario
                      </a>         
                    </button>
                  </Col>
                </Row>
              </div>
              )
            }
          />
        </Col>
        <Col xs lg="5">
          <img
            src={tarot}
            alt="fotoCarta"
            height={"400px"}
            className="imgResponsive"
            onClick={() => handleClick( 
              <div className='container'>
              <p className='container'>
              Ofrecemos lecturas de tarot para brindarte una orientación.
              
              ¿Cómo funciona?

              Envía tu pregunta: Envía tus preguntas o áreas de interés a través del formulario en línea o por correo electrónico. Cuantos más detalles proporciones, más relevante será para tu lectura.

              Realización de la tirada: se realizará una tirada de cartas personalizada para responder a tus preguntas. Serán utilizados diferentes mazos y técnicas de lectura para ofrecerte una buena experiencia.

              Video personalizado: Una vez que se haya completado la lectura, recibirás un video personalizado en el que la lectura te guiará a través de las cartas y te brindará sus interpretaciones. Este video te permitirá conectarte de manera más profunda con el mensaje y los consejos que las cartas tienen para ti.

              Entrega segura: Te enviaremos el video de la tirada a través de un enlace privado y seguro, para que puedas acceder a él en cualquier momento y desde cualquier dispositivo. De esta manera, podrás revisar la lectura cuantas veces quieras.

              </p>
              
              <Row>
                  <Col className='container'>
                    <button className='botonHome'>
                      <a href='./Formulario' className='text-dark link-underline-light'>
                        Ir al formulario
                      </a>         
                    </button>
                  </Col>
                </Row>
              
              
              </div>
              )}
          />
        </Col>
      </Row>
      {mostrarInfo && <div>{infoImagen}</div>}
    </Container>
  );
}

export default Servicios;