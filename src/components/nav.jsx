import React, {useState} from 'react'
import logo from '../assets/img/Desat_logo.png'
function Nav(props) {

    const { getSelect } = props;
    var classNames = require('classnames');
    const [dropShadow, setDropShadow] = useState(false);


    const scrollTo = (section) => {
        const sect = document.getElementById(section);
        const serviciosOffset = sect.getBoundingClientRect().top
        window.scrollTo(0, serviciosOffset);
    }

    const scrolled = () => {
        if(window.scrollY > 10) {
            setDropShadow(true)
        } else return setDropShadow(false)
    }

    const showServices = () => {
        scrollTo("inicio");
        getSelect("servicios",true)
        setTimeout(() => {
            getSelect("servicios",false)
        }, 1000);
        setTimeout(() => {
            getSelect("servicios",true)
        }, 2000);
        setTimeout(() => {
            getSelect("servicios",false)
        }, 3000);
        setTimeout(() => {
            getSelect("servicios",true)
        }, 4000);
        setTimeout(() => {
            getSelect("servicios",false)
        }, 5000);
    }

    window.addEventListener('scroll', scrolled)

    return (
        <div
            
            id={'navBar'}
            className={classNames('row nav-bar fixed w-100', {'drop-shadow' : dropShadow})}>
            <div className="">
                <img className={classNames("logo logo-lg fixed", {'logo-out' : !dropShadow})} src={logo} alt="Desat Logo"/>
            </div>
            <div className="navbar-menu">
                <ul className="mont">
                    <li id="inicioli" className={'active'}>
                        <span id="inicioLink" className={'green'} onClick={() => scrollTo("inicio")}>
                            Inicio
                        </span>
                    </li>
                    <li id="servicesli" className={'active'}>
                        <span id="servicesLink" className={'green'}
                            onClick={showServices}
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