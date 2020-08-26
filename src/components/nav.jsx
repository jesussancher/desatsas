import React from 'react'
import logo from '../assets/img/Desat_logo.png'
function Nav(){
    return(
        <div className="row nav-bar fixed">
            <div className="col-sm-6 flex-center-self"><img className="logo" src={logo} alt="Desat Logo"/></div>
            <div className="col-sm-6"> Hola 2</div>
        </div>  
        
    )
}

export default Nav