import React, {useState, useEffect} from 'react'
import logo from '../assets/img/Desat_logo.png'
import NavServices from './nav-services'
function Nav(props) {
    const [navbar,
        setNavbar] = useState(false)
    const [inicioOffset,
        setInicioOffset] = useState(true)
    const [serviciosOffset,
        setServiciosOffset] = useState(false)
    const [nostrosOffset,
        setNosotrosOffset] = useState(false)
    const [contactoOffset,
        setContactoOffset] = useState(false)
    const [servicesNav,
        setServicesNav] = useState({position: 0, status: false})
    const [servicesMouseOver,
        setServicesMouseOver] = useState(false)
    const navAction = () => {
        const globalOffset = window.scrollY
        const inicio = document.getElementById("inicio")
        const inicioOffset = inicio.offsetTop
        const servicios = document.getElementById("servicios")
        const serviciosOffset = servicios.offsetTop
        if (globalOffset >= inicioOffset && globalOffset < serviciosOffset) {
            setInicioOffset(true)
            setServiciosOffset(false)
            setNosotrosOffset(false)
            setContactoOffset(false)
        } else if (globalOffset >= serviciosOffset) {
            setInicioOffset(false)
            setServiciosOffset(true)
            setNosotrosOffset(false)
            setContactoOffset(false)
        }

    }
    const changeBackground = () => {
        if (window.scrollY >= 40) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    const scrollTo = (section) => {
        const sect = document.getElementById(section);
        const serviciosOffset = sect
            .getBoundingClientRect()
            .top
        window.scrollTo(0, serviciosOffset)
    }
    const serviceMouseOver = (e) => {
        if (e) {
            setServicesMouseOver(true)

        } else {
            setServicesMouseOver(false)
        }
    }
    window.addEventListener('scroll', navAction)
    window.addEventListener('scroll', changeBackground)

    const hideServ = () => {
        const timer = setTimeout(() => {
            setServicesMouseOver(false)
            setServicesNav({
                ...servicesNav,
                status: false
            })
        }, 500)
    }
    const showServ = () => {
        setServicesMouseOver(true)
        setServicesNav({
            position: document
                .getElementById("servicesli")
                .offsetLeft,
            status: true
        })
    }

    return (
        <div
            className={navbar
            ? 'row nav-bar active-nav fixed w-100'
            : 'row nav-bar fixed w-100'}>
            <div className="col-lg-6 col-md-5">
                <img className="logo logo-lg absolute" src={logo} alt="Desat Logo"/>
            </div>
            <div className="col-lg-6 col-md-7">
                <ul className="nav-bar mont">
                    <li
                        id="inicioli"
                        className={inicioOffset
                        ? 'active'
                        : ''}>
                        <a
                            id="inicioLink"
                            className={inicioOffset
                            ? 'green'
                            : 'dark-grey'}
                            onClick={() => scrollTo("inicio")}>Inicio</a>
                    </li>
                    <li
                        id="servicesli"
                        className={serviciosOffset
                        ? 'active'
                        : servicesMouseOver
                            ? 'active'
                            : ''}>
                        <a
                            id="servicesLink"
                            className={serviciosOffset
                            ? 'green'
                            : servicesMouseOver
                                ? 'green'
                                : 'dark-grey'}
                            onClick={() => scrollTo("servicios")}
                            onMouseOut={hideServ}
                            onMouseOver={showServ}>Servicios</a>

                    </li>

                    <li>
                        <a >Nosotros</a>
                    </li>

                    <li>
                        <a>Contacto</a>
                    </li>
                    <a className="cert-btn">Certificado</a>
                </ul>
            </div>
            <NavServices
                services={props.services}
                status={servicesNav}
                enable={!serviciosOffset}
                activeOnScroll={serviceMouseOver}
                selected={props.selected}/>
        </div>

    )
}

export default Nav