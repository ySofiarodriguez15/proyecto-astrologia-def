import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import calculoCarta from '../images/calculoCarta.png';
import fotoCarta from '../images/fotoCarta.png';
import cuencos from '../images/Cuencos1.jpg';
import diapasones from '../images/diapasones.jpg';




function Servicios() {
  return (
    <Container>
      <Row >
      <Col md="auto">
        <div>
            <h4 className="h4Carta">Cartas Natales</h4>
        </div>
      </Col>
        <Col xs >
          <img src={calculoCarta} alt="calculoCartaNatal" height={"400px"}/>
        </Col>
        <Col xs lg="5">
          <img src={fotoCarta} alt="fotoCarta" height={"400px"}/>
        </Col>
      </Row>
      <Row>
        <Col><img src={cuencos} alt="cuencos" height={"350px"}/></Col>
        <Col md="auto">
            <div className="armonizaciones">
            <h4 className="h4Armonizaciones">Armonizaciones</h4>
                <ul>
                    <li>Cuencos Tibetanos</li>
                    <li>Diapasones</li>
                </ul>
            </div>
            </Col>
        <Col xs lg="4.9">
          <img src={diapasones} alt="diapasones" height={"350px"} width={"400px"}/>
        </Col>
      </Row>
    </Container>
  );
}

export default Servicios;