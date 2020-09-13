import React, {useState, useEffect} from 'react'
import medoc from '../components/services/icons/medoc.png'
import espi from '../components/services/icons/espi.png'
import psic from '../components/services/icons/psic.png'
import fono from '../components/services/icons/fono.png'
import lab from '../components/services/icons/lab.png'
import opto from '../components/services/icons/opto.png'
import cap from '../components/services/icons/cap.png'
import est from '../components/services/icons/est.png'
function NavServices(props) {

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

    const [servStatus,
        setServStatus] = useState(false)

    const hideServ = () => {
        if (props.status.status === true) {
            setServStatus(true)
        }
        const timer = setTimeout(() => {
            setServStatus(false)
        }, 500)
    }
    return (
        <div
            style={{
            left: (props.status.position).toString() + "px"
        }}
            className={props.enable
            ? props.status.status
                ? servStatus
                    ? 'serv-nav fixed'
                    : 'serv-nav fixed'
                : servStatus
                    ? 'serv-nav fixed'
                    : 'serv-nav serv-nav-hidden fixed'
            : 'serv-nav serv-nav-hidden fixed'}
            onMouseOver={() => setServStatus(true)}
            onMouseLeave={hideServ}>
            <div className="serv-nav-content row">
                {services.map((service, index) => {
                    return (
                        <div className="serv-nav-item grid grid-serv-nav-item">
                            <img className="serv-nav-icon" src={service.icon} alt={service.name}/>
                            <a className="serv-nav-title">{service.name}</a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default NavServices