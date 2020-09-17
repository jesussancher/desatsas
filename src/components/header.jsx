import React from 'react'
import logo from '../assets/img/Desat_logo.png'

function header(){

    const scrollToServices = () =>{
        const servicios = document.getElementById("servicios");
        const serviciosOffset = servicios.getBoundingClientRect().top
        window.scrollTo(0,serviciosOffset)
    }
    return(
        <div className="header relative">
            <div className="header-bg relative">
                <div className="header-filter absolute">
                </div>
            </div>
            <img className="logo absolute logo-md-sm" src={logo} alt="Desat Logo"/>
            <div className="header-content-container absolute">
                <h1 className="h1-md mont green">Tu aliado en</h1>
                <h1 className="h1-md mont dark-green"><b>Seguridad</b></h1>
                <h5 className="h5-md mont dark-grey">¡Tus trabajadores en las mejores manos!</h5>
                <button onClick={() => scrollToServices()} className="btn main-btn dark-green-bg green mont">Servicios</button>
            </div>
            <button onClick={() => scrollToServices()} className="btn main-btn main-btn-md dark-green-bg green mont absolute">Servicios</button>
        </div>
    )
}

export default header