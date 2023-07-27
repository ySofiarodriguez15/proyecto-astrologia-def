
import React, {useState} from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';


const Formulario=()=> {
    const URL = 'http://localhost:9000/crear';

    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        motivo:'',
        email:'',
        telefono:'',
        descripcion:''
    });

    useEffect(()=>{
        console.log(values);
    }, [values]);

    const handleInputChange = (e) =>{
        e.preventDefault();
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    useEffect(()=>{
        console.log(values)
    },[values]) 

        const handleClick = async (e) =>{
            e.preventDefault()
            const response = await axios.post(URL, values)
            console.log(response.status===200)
            if (response.status===200){
                Swal.fire({
                    title: response.data,
                    text: 'Gracias por enviar sus Datos',
                    icon: 'success',
                    confirmButtonText: 'Aceptar'
                })
            }

        } 
        
    return ( 
        <>
        
        <h1 class="mt-5 mb-4 text-center">Completa tus datos</h1>
        <form onSubmit={handleClick} class="container">
            <Row className='m-0 p-0'>
            <div class="container">
            <Col className='col-12 mb-1'>
            <input
                class="inputForm"
                placeholder='Nombre'
                name='nombre'
                value={values.nombre}
                onChange={handleInputChange}
            />
            </Col>
            </div>


            <div class="container">
                <Col className='col-12 mb-1'>
                    <input
                        class="inputForm"
                        placeholder='Apellido'
                        name='apellido'
                        value={values.apellido}
                        onChange={handleInputChange}
                    />      
                </Col>
            </div>
            
            </Row>

            <div>
            <Row className='m-0 p-0'>
                <div class="container">
                    <Col className='col-12 mb-1'>
                
                        <input
                            class="inputForm"
                            placeholder='Motivo'
                            name='motivo'
                            value={values.motivo}
                            onChange={handleInputChange}
                        />
                    </Col>
                </div>
            <div class="container">
                <Col className='col-12 mt-0 mb-1'>
                        
                        <input
                        class="inputForm"
                        placeholder='Email'
                        name='email'
                        value={values.email}
                        onChange={handleInputChange}
                        />
                </Col>
            </div> 

            <div class="container">
                <Col className='col-12 mt-0 mb-1'>
                        
                        <input
                        class="inputForm"
                        placeholder='Teléfono/Celular'
                        name='telefono'
                        value={values.telefono}
                        onChange={handleInputChange}
                        />
                </Col>
            </div> 

            </Row>
            </div>

            
            <Row>
                <div class="container">
                    <Col className='col-12' >
                        <input
                            class="descripcionForm"
                            placeholder='Contanos un poco más'
                            name='descripcion'
                            value={values.descripcion}
                            onChange={handleInputChange}
                        />

                    </Col>
                </div>
            </Row>
            
            <div class="mt-4">
                <Row>
                    <Col className='col-12'>
                        <button type='submit' className='botonHome'>Enviar</button>
                    </Col>
                </Row>
            </div>
        </form>
        
    </>

            );
            };


export default Formulario