import React, {useState} from 'react'

function ServiceBox(props) {
    const [show,
        setShow] = useState(true)
    // const [id,
    //     setId] = useState("")

    const showWindow = (id, status) => {
        props.selected(id, status)
        const serviceWindow = document.getElementById("serviceWindow")
        const content = document.getElementById("serviceWindowContent")
        // const hei = window.innerHeight;
        // const wid = window.innerWidth;
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
    }

    // const showBtn = (id) => {
    //     const button = document.getElementById(id + "btn");
    //     const icon = document.getElementById(id + "icon");
    //     const width = window.innerWidth;
    //     setId(id)
    //     if (width <= 1024) {
    //         if (show) {
    //             icon
    //                 .classList
    //                 .add("invisible")
    //             button
    //                 .classList
    //                 .add("visible")
    //             icon
    //                 .classList
    //                 .remove("visible")
    //             button
    //                 .classList
    //                 .remove("invisible")
    //             setShow(false)
    //         } else {
    //             icon
    //                 .classList
    //                 .add("visible")
    //             button
    //                 .classList
    //                 .add("invisible")
    //             icon
    //                 .classList
    //                 .remove("invisible")
    //             button
    //                 .classList
    //                 .remove("visible")
    //             setShow(true)
    //         }
    //     }

    // }

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
            {/* <p className="service-description">{props.description}</p> */}
        </div>
    )
}

export default ServiceBox