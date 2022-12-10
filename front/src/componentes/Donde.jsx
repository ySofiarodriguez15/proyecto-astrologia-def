import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Table} from 'react-bootstrap';




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
                    <td>{consulta.nombre}</td>
                    <td>{consulta.apellido}</td>
                    <td>{consulta.motivo}</td>
                    <td>{consulta.email}</td>
                </tr>
                )}
            </tbody> 
            </Table>
        </div>


            );
}

export default Donde
