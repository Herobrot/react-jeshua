import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { MDBContainer, MDBRow, MDBCol, MDBTypography } from 'mdb-react-ui-kit';
import Navegacion from './Navegacion';
import Acordeon from '../components/Acordeon';

const Menu = () =>{
    return(
        <>
            <Navegacion />
            <MDBContainer>
                <MDBCol style={{textAlign:'center', paddingTop:'5%'}}>
                    <MDBTypography className='display-5'>Bienvenido a Carvaz</MDBTypography>
                    <MDBTypography className='display-6'>La página esta en mantenimiento. 
                        ¡Gracias por su comprensión!
                    </MDBTypography>
                    </MDBCol>
                <MDBCol style={{paddingTop:'10%'}}>
                    <Acordeon title='¿Qué es Carvaz?' name='Es un portal donde distintas empresas o clientes, solicitan la creación de un programa en específico. Dependiendo de la problematica que tengan, o algo que quieran que les ayude; Carvaz les facilitará el trabajo y hará un programa acorde a lo querido.' />
                </MDBCol>
                
            </MDBContainer>
        </>
    );
}

export default Menu;