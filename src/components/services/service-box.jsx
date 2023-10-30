import React from 'react'
import { useHistory } from "react-router-dom";
function ServiceBox(props) {

    const history = useHistory();

    const showWindow = (id, status) => {
        props.selected(id, status)
        const serviceWindow = document.getElementById("serviceWindow")
        const content = document.getElementById("serviceWindowContent")
        if(serviceWindow !== null) {
            serviceWindow.style.height = '100%'
        }
        if(content !== null){
            setTimeout(() => {
                content
                    .classList
                    .add("visible")
                content
                    .classList
                    .remove("invisible")
            }, 500);
        }

        history.push(`/Servicios/${props.name.split(" ").join("").replace(".","").normalize('NFD').replace(/[\u0300-\u036f]/g,"")}`)
    }

    return (
        <div
            id="service-box"
            onClick={() => showWindow(props.id, true)}
            className="service-box grid grid-service">
            <div id="service-icon">
                <img
                    id={props.id + "icon"}
                    className="service-icon"
                    src={props.icon}
                    alt={props.name}/>
                <button
                    id={props.id + "btn"}
                    onClick={() => showWindow(props.id, true)}
                    className="service-btn btn">Solicitar</button>
            </div>
            <h4 className="dark-green service-name">{props.name}</h4>
        </div>
    )
}

export default ServiceBox