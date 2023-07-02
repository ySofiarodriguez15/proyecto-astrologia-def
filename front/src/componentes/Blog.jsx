import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';


function About() {
    return ( 

        <main>
            


                <nav className="linkAbout">
                    <Button className="primary">
                    <Link to= "/" className="botonAbout"> Home </Link>
                    </Button>
                </nav>

        
        

        </main>
    );
}

export default About;