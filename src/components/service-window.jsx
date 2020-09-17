import React from 'react'
import {useState} from 'react';
import medoc from '../assets/img/services/medoc.png'
import espiro from '../assets/img/services/espiro.png'
import psico from '../assets/img/services/psico.png'
import fono from '../assets/img/services/fono.png'
import lab from '../assets/img/services/lab.png'
import opto from '../assets/img/services/opto.png'
import cap from '../assets/img/services/cap.png'
import est from '../assets/img/services/est.png'

function ServiceWindow(props) {

    const [servicesImg,
        setServicesImg] = useState([
        medoc,
        espiro,
        psico,
        fono,
        lab,
        opto,
        cap,
        est
    ])
    const [selected,
        setSelected] = useState(0)
    const [servicesList,
        setServicesList] = useState([])
    const [total,
        setTotal] = useState(0)
    const [totalServices,
        setTotalServices] = useState(0)
    const closeWindow = () => {
        props.close(false)
        const form = document.getElementById("servForm")
        const serviceWindow = document.getElementById("serviceWindow")
        const content = document.getElementById("serviceWindowContent")
        serviceWindow.style.height = '0%'
        content
            .classList
            .add("invisible")
        content
            .classList
            .remove("visible")
        const timer = setTimeout(() => {
            form.reset()
        }, 300)
    }

    const addService = (e) => {
        e.preventDefault()
        const qty = document.getElementsByName("qty")[0].value
        const id = props.id
        let totalServ = total
        let totalServicios = totalServices
        if (servicesList.length > 0) {
            const found = servicesList.find(element => element.servID === id);
            if (found) {
                const index = servicesList.findIndex(element => element.servID === id)
                let newArray = [...servicesList]
                newArray[index] = {
                    servID: props.id,
                    servQty: parseInt(newArray[index].servQty, 10) + parseInt(qty, 10)
                }
                totalServ += parseInt(qty, 10)
                setServicesList(newArray)
                setTotal(totalServ)
            } else {
                setServicesList([
                    ...servicesList, {
                        servID: id,
                        servQty: parseInt(qty)
                    }
                ])
                totalServ += parseInt(qty, 10)
                totalServicios++
                setTotal(totalServ)
                setTotalServices(totalServicios)
            }
        } else {
            setServicesList([
                ...servicesList, {
                    servID: id,
                    servQty: parseInt(qty)
                }
            ])
            totalServ += parseInt(qty, 10)
            totalServicios++
            setTotal(totalServ)
            setTotalServices(totalServicios)
        }
    }
    props.cart(servicesList,totalServices)
    return (
        <div id="serviceWindow" className="service-window visible fixed">
            <div id="serviceWindowContent" className="service-window-content invisible">
                <i id="closeWindow" onClick={closeWindow} class="fas fa-times-circle absolute"></i>
                <div className="row service-window-box">
                    <div
                        style={{
                        backgroundImage: "url(" + servicesImg[props.id] + ")"
                    }}className="services-window-image"></div>
                    <div className="services-window-info">
                        <div>
                            <h2 className="green">{props.selected.name}</h2><br/>
                            <p
                                style={{
                                textAlign: "justify"
                            }}>{props.selected.longDescription}</p>
                        </div>
                        <br/>
                        <h3 className="green">¡Cuénta con nosotros!</h3>
                        <br/>
                        <form id="servForm" onSubmit={addService} action="">
                            <input
                                type="number"
                                min="0"
                                className="input"
                                name="qty"
                                placeholder="Cantidad"
                                required/>
                            <input
                                type="submit"
                                className="btn input main-green-bg window-btn"
                                value="Solicitar"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceWindow