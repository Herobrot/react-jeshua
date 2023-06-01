import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Login = () =>{
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState("");
    const [password, setPass] = useState("");

    return(
        <>
            <div className='Login'>
                <Form style={{height:'100%', textAlign:'center'}} onSubmit={ev =>{
                    ev.preventDefault();

                    Registro(usuario, password, navigate);
                }}>
                    <Form.Group controlId='formBasicUser'><br />
                        <Form.Label className='fs-3'>Nombre de usuario</Form.Label>
                        <Form.Control 
                            className='square border border-success border-3'
                            type="email" 
                            placeholder='Ingresa tu usuario...' 
                            name='user'
                            value = {usuario}
                            onChange={ev => setUsuario(ev.target.value)}
                            style={{width:'60%', fontSize:'125%', margin:'0 auto',
                            boxShadow:'0px 6px 11px 0px rgba(0,0,0,0.75)'}}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='formBasicPass'><br />
                        <Form.Label className='fs-3'>Contraseña</Form.Label>
                        <Form.Control 
                            className='square border border-success border-3'
                            type="password" 
                            placeholder='********' 
                            name='pass'
                            value = {password}
                            onChange={ev => setPass(ev.target.value)}
                            style={{width:'60%', fontSize:'125%', margin:'0 auto', 
                            boxShadow:'0px 6px 11px 0px rgba(0,0,0,0.75)'}}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='formBasicInput' 
                    style={{textAlign:"center"}}><br /><br />
                        <Button variant="danger" type="submit"
                        style={{height:'3vw', width:'25%',
                        boxShadow:'0px 3px 6px 0px rgba(0,0,0,1)'}}>
                            Iniciar sesión
                        </Button>
                    </Form.Group>
                </Form>
            </div>
        </>
    );
}

const Registro = (usuario, password, navigate) => {
    if(usuario === "jeshua@gmail.com" && password === "1234"){
        navigate('/menu');
    }

    else{
        Swal.fire({
            icon: 'error',
            title: 'Inicio de sesión fallido',
            text: 'correo correcto: jeshua@gmail.com / contraseña: 1234',
        })
    }
}


export default Login;