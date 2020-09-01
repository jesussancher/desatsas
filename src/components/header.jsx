import React from 'react'
import logo from '../assets/img/Desat_logo.png'

function header(){
    return(
        <div className="header relative">
            <div className="header-bg relative">
                <div className="header-filter absolute">
                </div>
            </div>
            <img className="logo absolute" src={logo} alt="Desat Logo"/>
            <div className="header-content-container absolute">
                <h1 className="mont green">Tu aliado en</h1>
                <h1 className="mont dark-green"><b>Seguridad</b></h1>
                <h5 className="mont dark-grey">¡Tus trabajadores en las mejores manos!</h5>
                <button className="btn main-btn dark-green-bg green mont">Servicios</button>
            </div>
            <button className="btn main-btn dark-green-bg green mont absolute">Servicios</button>
        </div>
    )
}

export default header