import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Navegacion() {
    return ( 
    <>
    
        <div className="navbarcolor" >
        <Navbar bg="light" variant="light" >
            <Container className='fondo' >
            <Navbar.Brand href="/" className="me-auto">Home</Navbar.Brand>
            
                <Nav className="me-auto">
                    <Nav.Link href="Servicios" className='navLink'>Servicios</Nav.Link>
                    <Nav.Link href="Formulario" className='navLink'>Hace tu propia consulta!</Nav.Link>
                    <Nav.Link href="Blog" className='navLink'>Blog</Nav.Link>
                </Nav>
            
            </Container>
        </Navbar>
        </div>
        
    </>
    );
}


export default Navegacion;