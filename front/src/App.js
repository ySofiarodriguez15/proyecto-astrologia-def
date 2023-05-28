import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import { Route, Routes} from "react-router-dom";
import Navegacion from './componentes/Navegacion.jsx';
import Home from './componentes/Home.jsx';
import Formulario from './componentes/Formulario.jsx';
import Blog from './componentes/Blog.jsx';
import Servicios from './componentes/Servicios.jsx';
import Donde from './componentes/Donde.jsx';
import Footer from './componentes/Footer.jsx';
import logo from './images/logonuevo.png'
import 'csshake';



function App() {
  return (
    <div className="App">
      <div class="container justify-content-center">
      <Row>
        <Col className='p-1'>
          <img src={logo} alt="logoPagina" className='shake-little'/>
        </Col>
      </Row>
      </div>
      <div >
      <Row>
        <Col className='colTituloPpal'>
          <h1 className='tituloPpal' class='text-center fw-normal p-2'>
            PLUTON EN LINEA - Astrología y Tarot Evolutivo
          </h1>  
        </Col>
      </Row>
      </div>
        <Navegacion />
        <Routes>  
          <Route path="/" element = {<Home />} />
          <Route path="Servicios" element = {<Servicios />} />
          <Route path="Formulario" element = {<Formulario />} />
          <Route path="Blog" element = {<Blog />} />
          
        </Routes> 
        

        <Footer/>
    </div>
  );
}

export default App;
