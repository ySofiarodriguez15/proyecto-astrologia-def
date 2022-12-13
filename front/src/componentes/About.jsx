import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import avatar1 from '../images/avatar1.jpg';
import avatar2 from '../images/avatar2.jpg';
import avatar3 from '../images/avatar3.jpg';
import avatar4 from '../images/avatar.jpg';


function About() {
    return ( 

        <main>
                <p className="container"></p>
                <Container className="container1">
                <Row>
                    <Col>
                    <Card style={{ width: '51rem' }}>
                    <div className="divStaff">
                    <Card.Body className="cardBody1">
                        <div className="h2About">
                        <h2 >CONOCE NUESTRO STAFF</h2>       
                        </div>      
                    </Card.Body>
                    </div>
                    </Card>
                    
                    
                    
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={avatar1} />
                        <Card.Body>
                            <Card.Title>Cande</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            
                        </Card.Body>
                        </Card>
                    
                    
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }} className="bodyCard">
                        <Card.Img variant="top" src={avatar2} />
                        <Card.Body >
                            <Card.Title>Sofi</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            
                        </Card.Body>
                        </Card>
                    
                    
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={avatar3} />
                        <Card.Body>
                            <Card.Title>Naza</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            
                        </Card.Body>
                        </Card>
                    
                    
                    </Col>
                    <Col>  
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={avatar4} />
                        <Card.Body>
                            <Card.Title>Anggie</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
                </Container>








                <nav className="linkAbout">
                    <Button className="primary">
                    <Link to= "/" className="botonAbout"> Home </Link>
                    </Button>
                </nav>


        </main>


            );
}

export default About;