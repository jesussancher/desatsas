import React, {useState, useEffect} from 'react'
import ServiceBox from './service-box'
import logo from './icons/Desat_logo.png'
import medoc from './icons/medoc.png'
import espi from './icons/espi.png'
import psic from './icons/psic.png'
import fono from './icons/fono.png'
import lab from './icons/lab.png'
import opto from './icons/opto.png'
import cap from './icons/cap.png'
import est from './icons/est.png'


function ServicesContainer() {
    const [services,
        setServices] = useState([
        {
            name: "Medicina Ocupacional",
            description: "Lorem Ipsum dolor sit amet, consectetuer",
            icon: medoc
        }, {
            name: "Espirometría",
            description: "Lorem Ipsum dolor sit amet, consectetuer",
            icon: espi
        }, {
            name: "Psicología",
            description: "Lorem Ipsum dolor sit amet, consectetuer",
            icon: psic
        }, {
            name: "Fonoaudiología",
            description: "Lorem Ipsum dolor sit amet, consectetuer",
            icon: fono
        }, {
            name: "Laboratoio Clínico",
            description: "Lorem Ipsum dolor sit amet, consectetuer",
            icon: lab
        }, {
            name: "Optometría y Visiometría",
            description: "Lorem Ipsum dolor sit amet, consectetuer",
            icon: opto
        }, {
            name: "Capacitación e Investigación",
            description: "Lorem Ipsum dolor sit amet, consectetuer",
            icon: cap
        }, {
            name: "Exámenes Médicos Escolares",
            description: "Lorem Ipsum dolor sit amet, consectetuer",
            icon: est
        }
    ])
    return (
        <div className="row services-contain">
            {services.map((service, index) => (<ServiceBox name={service.name} description={service.description} icon={service.icon}/>))}
            {console.log(services)}
        </div>

    )
}

export default ServicesContainer