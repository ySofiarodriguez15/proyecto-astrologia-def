import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import calculoCarta from '../images/CartaNatal.png';
import tarot from '../images/Tarot.png';
import cuencos from '../images/Cuencos1.jpg';
import diapasones from '../images/diapasones.jpg';




function Servicios() {
  return (
    <Container className="mt-5">
      <Row className="display-5" >
        <Col xs >
          <img src={calculoCarta} alt="calculoCartaNatal" height={"400px"} className="imgResponsive"/>
        </Col>
        <Col xs lg="5">
          <img src={tarot} alt="fotoCarta" height={"400px"} className="imgResponsive"/>
        </Col>
      </Row>
      
    </Container>
  );
}

export default Servicios;