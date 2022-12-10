import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Table, Button} from 'react-bootstrap';
import Swal from 'sweetalert2';



const Donde = ()=> {

    const [consultas, setConsultas] = useState([]);

    const URL = 'http://localhost:3001/';

    const getConsultas = async () => {
        try {
            const {data} = await axios.get(URL);
            setConsultas(data.consulta)
            console.log(data.consulta);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getConsultas()
    },[])

    const handleDelete = (id) =>{
        console.log(id);

            Swal.fire({
                title: 'Está seguro de ELIMINAR?',
                showDenyButton: true,
                confirmButtonText: 'Eliminar',
                denyButtonText: `No Eliminar`,
            }).then((result) => {
                if (result.isConfirmed) {
                axios.delete(`${URL}${id}`)
                Swal.fire('Eliminado', '', 'success')
                getConsultas()
                } else if (result.isDenied) {
                Swal.fire('Sus datos no se eliminaron')
                }
            })
    //axios.delete(URL + id)
    //axios.delete(`http://localhost:3001/${id}`);

    }

    return ( 

            <div className="container text-center m-5">
            <h2 className="m-4">Consultas Recibidas</h2>
            <Table className="table m-4">
            <thead className="m-4">
            {/*  <th>ID</th> */}
                <th>Nombre</th>
                <th>Apellido</th>
                <th>motivo</th>
                <th>email</th>
            </thead>
            <tbody className="m-4">
                {consultas.map(consulta => 
                <tr>
                    {/* <td>{persona._id}</td> */}
                    <td>{consulta.nombre}</td>
                    <td>{consulta.apellido}</td>
                    <td>{consulta.motivo}</td>
                    <td>{consulta.email}</td>
                    <td><Button variant="success" className="mt-3">Update</Button></td>
                    <td><Button variant="danger" onClick={() => handleDelete(consulta._id)}className="mt-3">Delete</Button></td>
                </tr>
                )}
            </tbody> 
            </Table>
        </div>


            );
}

export default Donde
