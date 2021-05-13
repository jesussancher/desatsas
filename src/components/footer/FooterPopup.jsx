import React, {Fragment, useEffect, useState} from 'react';
import WhatsappImage from './../../assets/img/imaging/wa.png';
import LocationImage from './../../assets/img/imaging/location.png';
import EmailImage from './../../assets/img/imaging/mail.png';
import FacebookImage from './../../assets/img/imaging/facebook.png';



export default function ContactPopup(props) {

    const {open, id, toggleClose, fn, height} = props;
    const contactPopupRef = React.createRef();
    var parentRef;
    const [opened,
        setOpened] = useState(false);
    const [left, setLeft] = useState('0vw');
    const [right, setRight] = useState('0vw');
    const [contentOpened,
        setContentOpened] = useState(false);
    const classNames = require('classnames');

    useEffect(() => {
        setTimeout(() => {
            setOpened(open)
        }, [100])
        if (open) {
            setTimeout(() => {
                setContentOpened(true)
            }, [500])
        } else {
            setContentOpened(false)
        }
    }, [open])

    const handleDocumentClick = (e) => {
        const element = parentRef;
        const target = e.target;
        if (element) {
            if (!element.contains(target)) {
                setOpened(false)
                setContentOpened(false)
                setTimeout(() => {
                    toggleClose(id)
                }, [300])
            }
        }
    }

    useEffect(() => {
        getDistances();
        parentRef = contactPopupRef.current;
        props.getRef(contactPopupRef.current);
        document.addEventListener('click', handleDocumentClick);
        return function cleanUp() {
            document.removeEventListener('click', handleDocumentClick);
        }
    })

    
    const callComercial = () => {
        fn("3184246238")
    }

    const callService = () => {
        fn("3222610811")
    }

    const emailService = () => {
        fn("atencionalcliente@desat.co")
    }

    const emailPQR = () => {
        fn("pqrs@desat.co")
    }

    const callContent = () => {
        return (
            <Fragment>
                <div
                    className={classNames('footer-popup-contentainer', {'shown': contentOpened})}>
                    <div className={classNames('footer-popup-content')}>
                        <div className={classNames('footer-popup-title mont')}>¿Tienes dudas?</div>
                        <div className={classNames('footer-popup-info mont')}>¡Nuestro servicio al cliente puede ayudarte!</div>
                        <div className={classNames('footer-popup-button mont')} onClick={callService}>Hablemos</div>
                    </div>
                    <div className={classNames('footer-popup-content')}>
                        <div className={classNames('footer-popup-title mont')}>¿Ya sabes qué quieres?</div>
                        <div className={classNames('footer-popup-info mont')}>¡Habla con nuestro equipo comercial!</div>
                        <div className={classNames('footer-popup-button mont')} onClick={callComercial}>Cotiza</div>
                    </div>
                </div>
            </Fragment>
        )
    }

    const whatsappChat = () => {
        return(
            <Fragment>
                <div
                    className={classNames('footer-popup-contentainer', {'shown': contentOpened})}>
                    <div className={classNames('footer-popup-content')}>
                        <div className={classNames('footer-popup-title mont')}>¿Necesitas información?</div>
                        <div className={classNames('footer-popup-info mont')}>¡Podemos ayudarte!</div>
                        <img className={classNames('footer-popup-imagen')} src={WhatsappImage} alt={'Cómunicate con DESAT por WhatsApp'}/>
                        
                        <div className={classNames('footer-popup-button mont')} onClick={callService}>Chateemos</div>
                    </div>
                </div>
            </Fragment>
        )
    }

    const locationContent = () => {
        return(
            <Fragment>
                <div
                    className={classNames('footer-popup-contentainer', {'shown': contentOpened})}>
                    <div className={classNames('footer-popup-content')}>
                        <div className={classNames('footer-popup-title mont')}>¡Encuéntranos!</div>
                        <div className={classNames('footer-popup-info mont')}>Acércate a nuestras instalaciones</div>
                        <img className={classNames('footer-popup-imagen')} src={LocationImage} alt={'Cómunicate con DESAT por WhatsApp'}/>
                        
                        <div className={classNames('footer-popup-button mont')} onClick={callService}>¿Cómo llegar?</div>
                    </div>
                </div>
            </Fragment>
        )
    }

    const emailContent = () => {
        return(
            <Fragment>
                <div
                    className={classNames('contact-popup-contentainer', {'shown': contentOpened})}>
                    <div className={classNames('contact-popup-content')}>
                        <div className={classNames('contact-popup-title mont')}>¿Tienes dudas?</div>
                        <div className={classNames('contact-popup-info mont')}>Escríbenos y nuestro servicio al cliente te apoyará.</div>
                        <div className={classNames('contact-popup-button mont')} onClick={emailService}>Pregúntanos</div>
                    </div>
                    <div className={classNames('contact-popup-content')}>
                        <div className={classNames('contact-popup-title mont')}>Peticiones, quejas y reclamos</div>
                        <div className={classNames('contact-popup-info mont')}>Puedes escribirnos a nuestro canal de PQR.</div>
                        <div className={classNames('contact-popup-button mont')} onClick={emailPQR}>Cuéntanos</div>
                    </div>
                </div>
            </Fragment>
        )
    }

    const facebookContent = () => {
        return(
            <Fragment>
                <div
                    className={classNames('footer-popup-contentainer', {'shown': contentOpened})}>
                    <div className={classNames('footer-popup-content')}>
                        <div className={classNames('footer-popup-title mont')}>¡Entérate de todo!</div>
                        <div className={classNames('footer-popup-info mont')}>Descubre lo último en nuestro perfil de Facebook</div>
                        <img className={classNames('footer-popup-imagen')} src={FacebookImage} alt={'Cómunicate con DESAT por WhatsApp'}/>
                        
                        <div className={classNames('footer-popup-button mont')} onClick={callService}>Síguenos</div>
                    </div>
                </div>
            </Fragment>
        )
    }

    const getDistances = () => {
        const item = document.getElementById(id);
        if(window.innerWidth < 768 || document.documentElement.clientWidth < 768 || document.body.clientWidth < 768){
            switch(id) {
                case "email": 
                    setLeft(-15 +"vw");
                break;
                case "facebook": 
                    setRight(-15 +"vw");
                    setLeft(null);
                break;
                default: 
                    setLeft((item.offsetLeft - 40) +"px");
                break
            } 
        } else {
            setLeft((item.offsetLeft - 40) +"px");

        }
    }

    return (
        <Fragment>
            <div
                style={{height: opened ? height : 0, left: left, right: right}}
                ref={contactPopupRef}
                className={classNames('footer-popup footer-open-top', {
                'opened-popup': opened
                })}
            >
                {id === "call" && callContent()}
                {id === "wa" && whatsappChat()}
                {id === "maps" && locationContent()}
                {id === "email" && emailContent()}
                {id === "facebook" && facebookContent()}
            </div>
        </Fragment>
    )
}