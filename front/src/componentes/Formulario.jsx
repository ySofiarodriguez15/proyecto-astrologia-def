
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

        const handleChange = (e) => {
            setInputs({
                ...inputs,
                [e.target.name]: e.target.value
            })
        };

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
                <div className="d-flex flex-column align-items-center">
                {Object.keys(inputs).map((key, index) => (
                    <Form.Group className="pt-3" key={index} style={{ maxWidth: "200px" }}>
                    <Form.Label id="form">
                        {key === "email" ? key.toUpperCase() : key[0].toUpperCase() + key.slice(1)}</Form.Label>
                    <Form.Control
                        name={key}
                        value={inputs[key]}
                        onChange={handleChange}
                    />
                    </Form.Group>
                ))}
                    <Button className="mt-3" onClick={handleClick}>Enviar</Button>
                </div>
            );
            };


export default Formulario;