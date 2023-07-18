
import calculoCarta from '../images/CartaNatal.png';
import tarot from '../images/Tarot.png';
import { Container, Row, Col } from 'react-bootstrap';
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
              handleClick( <ul>
                <li>Interpretación de tu Sol, Luna y Ascendente + algún aspecto de interés que quieras que interpretemos (puede ser amor/relaciones, inclinaciones vocacionales, trabajo, etc).  </li>
                <li>Análisis de tu carta natal. Te enviaremos el dibujo de tu carta astral, junto con un archivo detallado que explora cada uno de sus componentes. Conoce cómo los planetas y las casas influyen en tu vida y descubre tus fortalezas y desafíos.</li>
                <p className='container'>En Plutón en Linea, nos preocupamos por brindarte un servicio de calidad. Primero, nos comunicaremos contigo a través de WhatsApp para asegurarnos de tener los datos de nacimiento correctos. Luego, en un plazo de 7 días, te enviaremos por correo electrónico el dibujo de tu carta natal y su descripción detallada. El pago se realiza una vez que hayamos finalizado la interpretación y esté lista para enviar.</p>
                <p className='container'>Es importante tener en cuenta que la astrología no es un juego de adivinación. Nos enfocamos en el crecimiento personal, el autoconocimiento y la exploración de nuevos puntos de vista. Nuestros servicios te ayudarán a reconocerte como individuo y a obtener una visión más profunda de ti mismo. ¡Déjanos guiar tu viaje de autodescubrimiento!</p>
              </ul>)
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
              <p className='container'>
              En Pluton en Linea, te ofrecemos lecturas de tarot para brindarte una orientación.
              
              ¿Cómo funciona?

              Envía tu pregunta: Envíanos tus preguntas o áreas de interés a través de nuestro formulario en línea o por correo electrónico. Cuantas más detalles nos proporciones, más precisa y relevante será tu lectura.

              Realización de la tirada: se realizará una tirada de cartas personalizada para responder a tus preguntas. Utilizamos diferentes mazos y técnicas de lectura para ofrecerte una buena experiencia.

              Video personalizado: Una vez que se haya completado la lectura, recibirás un video personalizado en el que nuestro lector te guiará a través de las cartas y te brindará sus interpretaciones. Este video te permitirá conectarte de manera más profunda con el mensaje y los consejos que las cartas tienen para ti.

              Entrega segura: Te enviaremos el video de la tirada a través de un enlace privado y seguro, para que puedas acceder a él en cualquier momento y desde cualquier dispositivo. De esta manera, podrás revisar la lectura y capturar todos los detalles importantes.

              Recuerda, en Plutón en Linea, nos tomamos el tiempo necesario para brindarte una lectura de calidad y personalizada. Nos enfocamos en tu crecimiento personal y te ofrecemos una experiencia auténtica y significativa con el tarot.</p>)}
          />
        </Col>
      </Row>
      {mostrarInfo && <div>{infoImagen}</div>}
    </Container>
  );
}

export default Servicios;