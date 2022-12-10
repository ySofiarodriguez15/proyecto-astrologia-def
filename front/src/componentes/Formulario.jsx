
import React, {useState} from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Swal from 'sweetalert2';


const Formulario=()=> {
    const URL = 'http://localhost:9000/crear';

    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        motivo:'',
        email:''
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
        <h1>Formulario</h1>
        <form onSubmit={handleClick}>
            <input 
                placeholder='Nombre'
                name='nombre'
                value={values.nombre}
                onChange={handleInputChange}
            />
            <input 
                placeholder='Apellido'
                name='apellido'
                value={values.apellido}
                onChange={handleInputChange}
            />
                        <input 
                placeholder='Motivo'
                name='motivo'
                value={values.motivo}
                onChange={handleInputChange}
            />
                        <input 
                placeholder='Email'
                name='email'
                value={values.email}
                onChange={handleInputChange}
            />
            <button type='submit'>Enviar</button>
        </form>
    </>

            );
            };


export default Formulario