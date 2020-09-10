import React from 'react'

function ServiceBox(props) {
    return (
        <div id="service-box" className="service-box text-center grid grid-service">
            <div id="service-icon" >
                <img className="service-icon" src={props.icon} alt={props.name}/>
                <button id="service-btn" className="service-btn btn">Solicitar</button>
            </div>
            <h2 className="dark-green service-name">{props.name}</h2>
            <p>{props.description}</p>
        </div>
    )
}

export default ServiceBox