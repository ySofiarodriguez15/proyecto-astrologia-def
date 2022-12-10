
import React, {useState} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const Formulario=()=> {
    const URL = 'http://localhost:3001/crear';

    const [inputs, setInputs] =useState({
        nombre:"",
        apellido:"",
        motivo:"",
        email:"",
    });

        const handleClick = async () =>{
            await axios.post(URL, inputs)
            setInputs({
                nombre:"",
                apellido:"",
                motivo:"",
                email:""
            })
        }
        
    return ( 
        <Form className="containerForm">
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="string" placeholder="ej: Susana" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Apellido</Form.Label>
            <Form.Control type="string" placeholder="Ej: González" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contanos un poco más</Form.Label>
            <Form.Control type="string" placeholder="Tu motivo de consulta" className ="placeMotivo" />
        </Form.Group>
        <Form.Group className="mb-5" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="string" placeholder="Tu email para comunicarnos" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>
        <Button variant="success" type="Enviar" className ="botonFormulario" onClick={handleClick}>
            Enviar
        </Button>
        </Form>
            );
            };


export default Formulario