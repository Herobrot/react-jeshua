import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { MDBContainer, MDBRow, MDBCol, MDBTypography  } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import Login from '../components/Login.jsx';

const Inicio = () =>{
    return (
        <>
            <MDBContainer className='d-flex flex-column justify-content-center' 
                style={{width:"90%", height:'100vh'}}>
                <MDBRow className='
                                justify-content-evenly 
                                border 
                                rounded-4 
                                border-4 
                                border-dark' style={{backgroundColor:'salmon', height:'70%'}}>
                    <MDBCol size="4" className='d-flex align-items-center'>
                        <MDBRow className='border rounded-5 border-4 border-dark py-5' style={{backgroundColor:'#75FA83'}}>
                            <FontAwesomeIcon className='mx-auto' icon={faLayerGroup} style={{color: "#0561ff", height:'auto', width:'20%'}} />
                            <MDBTypography className='fs-3 fw-bold' style={{textAlign:'center'}}>
                                Bienvenido <br /><br />por favor inicie sesión
                                para disfrutar de <MDBTypography tag="strong">Carvaz</MDBTypography>
                            </MDBTypography>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol size="6" className='d-flex flex-column justify-content-center'> 
                        <Login className='d-flex align-items-center'/>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </>
    );
    
}



export default Inicio;