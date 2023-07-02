import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Navegacion() {
    return ( 
    <>
    
        <div class="container" className='navbarcolor'>
            <div>
            <Row className='p-0'>
                <Col className='col-12 p-0'>            
                    <Navbar bg="light" variant="light" >
                        <Container className='fondo' >
                        <Navbar.Brand href="/" className="me-auto">Home</Navbar.Brand>
                            <div class="container">
                                <Nav className="me-auto">
                                    <Nav.Link href="Servicios" className='navLink'>Servicios</Nav.Link>
                                    <Nav.Link href="Formulario" className='navLink'>Hace tu consulta!</Nav.Link>
                                    <Nav.Link href="Blog" className='navLink'>Blog</Nav.Link>
                                </Nav>
                            </div>
                        </Container>
                    </Navbar>
                </Col>
        </Row>

            </div>

        
        </div>
        
        
    </>
    );
}


export default Navegacion;