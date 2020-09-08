import React from 'react'
import logo from '../assets/img/Desat_logo.png'
function Nav(){
    return(
        <div className="row nav-bar fixed w-100">
            <div className="col-lg-6 col-md-5">
            <img className="logo absolute" src={logo} alt="Desat Logo"/>
            </div>
            <div className="col-lg-6 col-md-7">
                <ul className="nav-bar mont">
                    <li><a>Inicio</a></li>
                    <li><a>Nosotros</a></li>
                    <li><a>Servicios</a></li>
                    <li><a>Contacto</a></li>
                    <a className="cert-btn">Certificado</a>
                </ul>
            </div>
        </div>  
        
    )
}

export default Nav