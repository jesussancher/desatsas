import React, { useState } from 'react'
import {useEffect} from 'react';
import { services } from './services/servicesData.js';
import { useHistory } from 'react-router-dom';
function StickyServices(props) {

    const history = useHistory();
    const [reference, setReference] = useState(React.createRef());
    const openWindow = (open) => {
        const long = 70;
        let longCounter = 0;
        const short = 48;
        let shortCounter = 0;
        for (let i = 0; i < props.cart.length; i++) {
            if ([0,7,10].includes(props.cart[i].servID)) {
                longCounter++
            } else {
                shortCounter++
            }
        }
        let cartHeightShort = short * shortCounter;
        let cartHeightLong = long * longCounter;
        let cartHeightTotal = cartHeightLong + cartHeightShort + short;
        const cart = document.getElementById("stickyCart");
        const servicesList = document.getElementsByClassName("sticky-services-content");
        if (open) {
            cart
                .classList
                .remove("invisible")
            cart
                .classList
                .add("visible")
            setTimeout(() => {
                cart.style.height = cartHeightTotal + "px";
                cart.style.borderRadius = "15px";
                for (let o = 0; o < servicesList.length; o++) {
                    servicesList[o].style.opacity = "1";
                }
            }, 100)
        } else {

            for (let o = 0; o < servicesList.length; o++) {
                servicesList[o].style.opacity = "0"
            }
            setTimeout(() => {
                cart.style.height = "0px";
                cart.style.borderRadius = "0px";
                setTimeout(() => {
                    cart
                        .classList
                        .add("invisible")
                    cart
                        .classList
                        .remove("visible")
                }, 600)
            }, 600)
        }
    }

    useEffect(() => {
        openWindow(props.status)
    },[props.status])

    useEffect(() => {
        props.getRef(reference)
    },[])

    const handleOnClick = (id) => {
        props.selected(id, true)
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
        history.push(`/Servicios/${props.services[id].name.split(" ").join("").replace(".","").normalize('NFD').replace(/[\u0300-\u036f]/g,"")}`)
    }

    const pedido = () => {
        const productos = props.cart
        let pedido = []
        for (let i = 0; i<productos.length; i++){
                pedido.push(`${productos[i].servQty}%20${services[productos[i].servID].name}`)
        }
        let linkWa = pedido.join('%0A')
        const url = "https://api.whatsapp.com/send?phone=573184246238&text=%C2%A1Hola!%20Me%20interesa%20tener%20información%20acerca%20de%3A%0A"+linkWa+"%0AGracias"
        window.open(url);
    }
    
    return (
        <div id="stickyCart" ref={reference} className="fixed sticky-services shadow" style={{maxHeight: '400px'}}>
            <div  className="relative sticky-services-content-container">
                {props
                    .cart
                    .map((servicio,key) => {
                        return (
                            <div key={key} className="sticky-services-content" onClick={() => handleOnClick(servicio.servID)}>
                                <p>{props.services[servicio.servID].name}</p>
                                <p className="sticky-qty">{servicio.servQty}</p>
                            </div>
                        )
                    })}
                {props.cart.length > 0 &&
                    <div className="sticky-services-content confirm absolute" onClick={pedido}>
                        <p>Confirmar Cotización</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default StickyServices