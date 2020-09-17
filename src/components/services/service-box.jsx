import React from 'react'

function ServiceBox(props) {
    const showWindow = (id, status) => {
        props.selected(id, status)
        const serviceWindow = document.getElementById("serviceWindow")
        const content = document.getElementById("serviceWindowContent")
        const hei = window.innerHeight;
        const wid = window.innerWidth;
        serviceWindow.style.height = '100%'
        const timer2 = setTimeout(() => {
            content
                .classList
                .add("visible")
            content
                .classList
                .remove("invisible")
        }, 500);
    }
    return (
        <div id="service-box" className="service-box text-center grid grid-service">
            <div id="service-icon">
                <img className="service-icon" src={props.icon} alt={props.name}/>
                <button
                    id={props.id}
                    onClick={() => showWindow(props.id, true)}
                    className="service-btn btn">Solicitar</button>
            </div>
            <h2 className="dark-green service-name">{props.name}</h2>
            <p>{props.description}</p>
        </div>
    )
}

export default ServiceBox