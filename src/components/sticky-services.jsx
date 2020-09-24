import React from 'react'
import {useEffect} from 'react';

function StickyServices(props) {

    const openWindow = () => {
        const long = 65;
        let longCounter = 0;
        const short = 45;
        let shortCounter = 0;
        for (let i = 0; i < props.cart.length; i++) {
            if (props.cart[i].servID >= 0 && props.cart[i].servID <= 4) {
                shortCounter++
            } else {
                longCounter++
            }
        }
        let cartHeightShort = short * shortCounter;
        let cartHeightLong = long * longCounter;
        let cartHeightTotal = cartHeightLong + cartHeightShort;
        const cart = document.getElementById("stickyCart");
        const servicesList = document.getElementsByClassName("sticky-services-content")
        console.log(servicesList)
        if (props.status) {
            cart
                .classList
                .remove("invisible")
            cart
                .classList
                .add("visible")
            const timer = setTimeout(() => {
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
            const timer = setTimeout(() => {
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
        openWindow()
    })

    return (
        <div id="stickyCart" className="fixed sticky-services shadow">
            {props
                .cart
                .map(servicio => {
                    return (
                        <div className="sticky-services-content">
                            <p>{props.services[servicio.servID].name}</p>
                            <p className="sticky-qty">{servicio.servQty}</p>
                        </div>
                    )
                })}
        </div>
    )
}

export default StickyServices