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
import logo from './images/LOGO OK-editadono definitivo.jpg'


function App() {
  return (
    <div className="App">
      <div className='divPpal'>
      <Row  className='rowPpal'>
        <Col >
        <h1 className='titulo'>
          BIENVENIDOS A PLUTON EN LINEA
        </h1>  
        </Col>

        <Col>
        <img src={logo} alt="logoPagina" className='logo'/>
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
