
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
        <form onSubmit={handleClick} className="bodyFormulario" class="container">
            <div >
            <Row className='m-1 p-0' class="justify-content-center display">
            <Col className='col-2 mb-2'>
            <input className='divFormulario'
                class="justify-content-evenly"
                placeholder='Nombre'
                name='nombre'
                value={values.nombre}
                onChange={handleInputChange}
            />
            </Col>
            <Col className='col-2 mb-2'>
            
            <input className='divFormulario'
                class="justify-content-center"
                placeholder='Apellido'
                name='apellido'
                value={values.apellido}
                onChange={handleInputChange}
            />
            
            
            </Col>
            </Row>
            <Row className='m-1 p-0' class="justify-content-center display">
            <Col className='col-2 mb-1'>
            
            <input className='divFormulario'

                placeholder='Motivo'
                name='motivo'
                value={values.motivo}
                onChange={handleInputChange}
            />

            
            </Col>
            <Col className='col-2 m-0'>
            
                <input className='divFormulario'
                class="justify-content-evenly"
                placeholder='Email'
                name='email'
                value={values.email}
                onChange={handleInputChange}
            />
            </Col>
            </Row>
            <div class="container mt-4">
            <Row class="justify-content-center">
                <Col className='col-4' >
                    <input class="descripcionForm"
                        placeholder='Contanos un poco más'
                        name='descripcion'
                        value={values.descripcion}
                        onChange={handleInputChange}
                    />

                </Col>
            </Row>
            </div>
            </div>
            <div class="mt-4">
            <button type='submit' className='botonHome'>Enviar</button>
            </div>
        </form>
    </>

            );
            };


export default Formulario