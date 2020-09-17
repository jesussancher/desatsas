import React, {useState, useEffect} from 'react'

function NavServices(props) {

    const [services,
        setServices] = useState(props.services)
    const [servStatus,
        setServStatus] = useState(false)

    const hideServ = () => {
        if (props.status.status === true) {
            setServStatus(true)
        }
        const timer = setTimeout(() => {
            setServStatus(false)
        }, 500)
        serviceMouseOver(false)
    }

    const serviceMouseOver = (e) => {
        if (e) {
            setServStatus(true)
            props.activeOnScroll(true) 
        } else {
            props.activeOnScroll(false)
        }
    }

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
        }, 400);
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
            onMouseOver={() => serviceMouseOver(true)}
            onMouseLeave={hideServ}>
            <div className="serv-nav-content row">
                {props
                    .services
                    .map((service, index) => {
                        return (
                            <div id={index} onClick={() => showWindow(index,true)} className="serv-nav-item grid grid-serv-nav-item">
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