import React from 'react'
import logo from '../assets/img/Desat_logo.png'
import ServicesContainer from './services/servicesContainer.jsx';
import { services } from './services/servicesData.js';

function header(props){
    const { selected, select } = props;

    return(
        <section id={"Inicio"}>
            <div className="header">
                <div className={'logo-container'}>
                    <img className="logo-sm absolute" src={logo} alt="Desat Logo"/>
                </div>
                <div className="header-content-container">
                    <div className={"header-content"}>
                        <h1 className="h1-md mont green">Tu aliado</h1>
                        <h1 className="h1-md mont dark-green"><b>En Seguridad</b></h1>
                        {/* <h5 className="h5-md mont dark-grey">¡Tus trabajadores en las mejores manos!</h5> */}
                        <p className="p-md mont dark-grey">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore ipsa harum quaerat aliquam?</p>
                    </div>
                    <div className={"header-services"}>
                        <ServicesContainer services={services} selected={selected} select={select}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default header