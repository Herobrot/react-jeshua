import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { MDBContainer, MDBRow, MDBCol, MDBTypography, MDBNavbar,
    MDBNavbarBrand, MDBBtn } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';

const Navegacion = () =>{
    return(
        <>
            <MDBContainer>
                <MDBNavbar light bgColor='info' style={{borderRadius:'0 0 20px 20px'}}>
                    <MDBContainer className='px-5'>
                        <MDBNavbarBrand className='d-flex align-items-center'>
                        <FontAwesomeIcon icon={faLayerGroup} style={{
                            color: "#0021c5", mixBlendMode: 'darken', height:'3vw'}} />
                            <span className='ps-4' style={{fontSize:'150%'}}>Carvaz</span>
                        </MDBNavbarBrand>
                        <Link to='..' relative='path'>
                            <button type='button' className='btn btn-primary'
                            style={{width:'7vw'}}>Salir</button>
                        </Link>
                    </MDBContainer>
                </MDBNavbar>
            </MDBContainer>
        </>
    );
}

export default Navegacion;