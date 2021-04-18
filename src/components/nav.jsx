import React, {useState} from 'react'
import logo from '../assets/img/Desat_logo.png'
function Nav(props) {

    var classNames = require('classnames');
    const [dropShadow, setDropShadow] = useState(false);
    const [navbarLink,
        setNavbarLink] = useState({
            inicio: true,
            servicios: false,
            nosotros: false,
            cotacto: false,
        })

    const navAction = () => {
        const globalOffset = window.scrollY
        const inicio = document.getElementById("inicio")
        const inicioOffset = inicio.offsetTop
        const servicios = document.getElementById("servicios")
        const serviciosOffset = servicios.offsetTop
        if (globalOffset >= inicioOffset && globalOffset < serviciosOffset) {
            setNavbarLink({
                inicio: true,
                servicios: false,
                nosotros: false,
                cotacto: false,
            })
        } else if (globalOffset >= serviciosOffset) {
            setNavbarLink({
                inicio: false,
                servicios: true,
                nosotros: false,
                cotacto: false,
            })
        }

    }

    const scrollTo = (section) => {
        const sect = document.getElementById(section);
        const serviciosOffset = sect.getBoundingClientRect().top
        window.scrollTo(0, serviciosOffset)
    }

    const inicioAction = () => {
        const sect = document.getElementById("servicios");
        const sectOffset = sect.getBoundingClientRect().top
        const sectOffsetTop = sect.offsetTop

        console.log(sectOffset, sectOffsetTop)
        return sectOffset
    }

    const scrolled = () => {
        if(window.scrollY > 0) {
            setDropShadow(true)
        } else return setDropShadow(false)
    }


    window.addEventListener('scroll', scrolled)

    return (
        <div
            id={'navBar'}
            className={classNames('row nav-bar fixed w-100', {'drop-shadow' : dropShadow})}>
            <div className="col-lg-6 col-md-5">
                <img className="logo logo-lg absolute" src={logo} alt="Desat Logo"/>
            </div>
            <div className="col-lg-6 col-md-7">
                <ul className="mont">
                    <li id="inicioli" className={navbarLink.inicio ? 'active' : ''}>
                        <span id="inicioLink" className={navbarLink.inicio ? 'green' : 'dark-grey'} onClick={() => scrollTo("inicio")}>
                            Inicio
                        </span>
                    </li>
                    <li id="servicesli" className={navbarLink.servicios ? 'active' : ''}>
                        <span id="servicesLink" className={navbarLink.servicios ? 'green' : 'dark-grey'}
                            onClick={() => scrollTo("servicios")}
                        >
                                Servicios
                        </span>

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
        </div>

    )
}

export default Nav