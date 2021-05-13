import React, { useCallback, useDebugValue, useEffect } from 'react'
import {useState} from 'react';
import medoc from '../assets/img/services/medoc.jpg'
import espiro from '../assets/img/services/espiro.png'
import inv from '../assets/img/services/inv.png'
import psico from '../assets/img/services/psico.jpg'
import fono from '../assets/img/services/fono.jpg'
import lab from '../assets/img/services/lab.jpg'
import opto from '../assets/img/services/opto.png'
import cap from '../assets/img/services/cap.jpg'
import est from '../assets/img/services/est.png'
import logo from '../assets/img/logo.svg'
import { services } from './services/servicesData.js'
import {
    useParams,
    useHistory
  } from "react-router-dom";  

function ServiceWindow(props) {

    const servicesImg = [
        medoc,
        espiro,
        psico,
        fono,
        lab,
        opto,
        cap,
        inv,
        est,
    ]
    
    const history = useHistory();
    let { serviceId } = useParams();
    const classNames = require('classnames');
    const [counter, setCounter] = useState(1);
    const [servicesList,
        setServicesList] = useState([])
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
        setTimeout(() => {
            form.reset()
        }, 300)
        history.push('/');
        props.getSelected(0, false);
    }

    const addService = (e) => {
        e.preventDefault()
        const qty = counter
        const id = props.id
        let totalServicios = totalServices
        if (servicesList.length > 0) {
            const found = servicesList.find(element => element.servID === id);
            if (found) {
                const index = servicesList.findIndex(element => element.servID === id)
                let newArray = [...servicesList]
                if(qty > 0) {
                    newArray[index] = {
                        servID: props.id,
                        servQty: parseInt(qty)
                    }
                    props.lastService(id,true)
                } else {
                    newArray.splice(index, 1);
                    setTotalServices(totalServicios => totalServicios = totalServicios - 1);
                }
                setServicesList(newArray)
            } else {
                setServicesList([
                    ...servicesList, {
                        servID: id,
                        servQty: parseInt(qty)
                    }
                ])
                setTotalServices(totalServicios => totalServicios = totalServicios + 1);
                props.lastService(id,true)
            }
        } else {
            setServicesList([
                ...servicesList, {
                    servID: id,
                    servQty: parseInt(qty)
                }
            ])
            totalServicios++
            setTotalServices(totalServicios)
            props.lastService(id,true)
        }
        // localStorage.setItem('services', )
        closeWindow()
    }

    const showWindow = (id) => {
        console.log("Pues me bajo");
        props.getSelected(id, true);
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

    }

    const handleDocumentClick = (e) => {
        const which = e.which;
        if(which === 27) {
            closeWindow();
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleDocumentClick);

        return function cleanUp() {
            document.removeEventListener('keydown', handleDocumentClick);
        }
    })

    const plusService = () => {
        setCounter(prev => prev = prev + 1);
    }

    const minusService = () => {
        if(counter > 0) {
            setCounter(prev => prev = prev - 1);
        }
    }

    const handleOnChange = (e) => {
        setCounter(parseInt(e.target.value,10));
    }

    useEffect(() => {
        if(servicesList.length > 0){
            const quantity = servicesList.findIndex( service => service.servID === props.id)
            console.log(servicesList, props.id, quantity)
            if(servicesList[quantity]?.servQty){
                setCounter(servicesList[quantity]?.servQty)
            } else {
                setCounter(1)
            }
        }
        const index = services.map( serv => {return(serv.name)}).findIndex((name) => name.split(" ").join("").replace(".","").normalize('NFD').replace(/[\u0300-\u036f]/g,"") === history.location.pathname.split("/")[2])
        if(props.status) {
            showWindow(index)
        }
    },[props.id]) 

    const closeOnClickOutside = (e) => {
        const target = e.target;
        const main = document.getElementById('serviceWindowContent');

        if(!main.contains(target)){
            closeWindow()
        }
    }

    props.cart(servicesList,totalServices)
    return (
        <div id="serviceWindow" onClick={closeOnClickOutside} className="service-window visible fixed">
            <div className="service-window-content-container">
                <div id="serviceWindowContent" className="service-window-content invisible">
                    <span id="closeWindow" onClick={closeWindow} className="absolute"> X </span>
                    <div className="row service-window-box">
                        <div
                            style={{
                            backgroundImage: "url(" + (servicesImg[props.id] ? servicesImg[props.id] : logo) + ")"
                        }}className="services-window-image">
                            <div className={'service-window-image-filter'}></div>
                        </div>
                        <div className="services-window-info">
                            <div>
                                <h2 className="green mont">{props.selected?.name}</h2><br/>
                                <p  className="description dark-grey"
                                    style={{
                                    textAlign: "justify"
                                }}>{props.selected?.longDescription}</p>
                            </div>
                            <br/>
                            <div style={{marginTop: '10px'}}>
                            <div className="green mont text-center">¿Cuántos exámenes de <b>{props.selected?.name}</b> deseas solicitar?</div>
                            <br/>
                            <form id="servForm" onSubmit={addService} action="">
                                <div className={'input-container'}>
                                    <div className={'counter-btn'} onClick={minusService}>
                                        -
                                    </div>
                                    <input
                                        type="number"
                                        min={servicesList.some(service => service.servID === props.id) ? "0" : "1"}
                                        className="input no-spinner"
                                        name="qty"
                                        placeholder="Cantidad"
                                        value={counter}
                                        onChange={handleOnChange}
                                        required/>
                                    <div className={'counter-btn'} onClick={plusService}>
                                        +
                                    </div>
                                </div>
                                <input
                                    type="submit"
                                    className={classNames("btn input window-btn", (counter === 0 && servicesList.some(service => service.servID === props.id)) ? "main-danger-bg" : "main-green-bg")}
                                    value={(counter === 0 && servicesList.some(service => service.servID === props.id)) ? "Eliminar" : "Solicitar"}/>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceWindow