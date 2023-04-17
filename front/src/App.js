import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import { Route, Routes} from "react-router-dom";
import Navegacion from './componentes/Navegacion.jsx';
import Home from './componentes/Home.jsx';
import Formulario from './componentes/Formulario.jsx';
import About from './componentes/About.jsx';
import Servicios from './componentes/Servicios.jsx';
import Donde from './componentes/Donde.jsx';
import Footer from './componentes/Footer.jsx';
import logo from './images/logonuevo.png'
import 'csshake';



function App() {
  return (
    <div className="App">
      <div className='divPpal'>
      <Row >
        <Col className='colLogo'>
          <img src={logo} alt="logoPagina" className='shake-little'/>
        </Col>
      </Row>
      </div>
      <div className='divPpalTitulo'>
      <Row>
        <Col className='colTituloPpal'>
          <h1 className='tituloPpal'>
            PLUTON EN LINEA - Astrología y Tarot
          </h1>  
        </Col>
      </Row>
      </div>
        <Navegacion />
        <Routes>  
          <Route path="/" element = {<Home />} />
          <Route path="About" element = {<About />} />
          <Route path="Servicios" element = {<Servicios />} />
          <Route path="Donde" element = {<Donde />} />
          <Route path="Formulario" element = {<Formulario />} />
          
        </Routes> 
        

        <Footer/>
    </div>
  );
}

export default App;
