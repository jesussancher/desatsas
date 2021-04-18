import React from 'react'
import logo from '../assets/img/Desat_logo.png'
import ServicesContainer from './services/servicesContainer.jsx';
import { services } from './services/servicesData.js';

function header(props){
    const { selected } = props;
    const scrollToServices = () =>{
        const servicios = document.getElementById("servicios");
        const serviciosOffset = servicios.getBoundingClientRect().top
        window.scrollTo(0,serviciosOffset)
    }
    return(
        <div className="header">
            <div className={'logo-container'}>
                <img className="logo absolute logo-md-sm" src={logo} alt="Desat Logo"/>
            </div>
            <div className="header-content-container">
                <div className={"header-content"}>
                    <h1 className="h1-md mont green">Tu aliado</h1>
                    <h1 className="h1-md mont dark-green"><b>En Seguridad</b></h1>
                    {/* <h5 className="h5-md mont dark-grey">¡Tus trabajadores en las mejores manos!</h5> */}
                    <p className="p-md mont dark-grey">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore ipsa harum quaerat aliquam minima alias ea nam quo possimus nulla?</p>
                </div>
                <div className={"header-services"}>
                    <ServicesContainer services={services} selected={selected}/>
                </div>
            </div>
            <button onClick={() => scrollToServices()} className="btn main-btn main-btn-md dark-green-bg green mont absolute">Servicios</button>
        </div>
    )
}

export default header