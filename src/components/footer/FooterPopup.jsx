import React, {Fragment, useEffect, useState} from 'react';
import WhatsappImage from './../../assets/img/imaging/wa.png';
import LocationImage from './../../assets/img/imaging/location.png';
import EmailImage from './../../assets/img/imaging/mail.png';



export default function ContactPopup(props) {

    const {open, parent, id, toggleOpen, toggleClose, fn, height, position} = props;
    const contactPopupRef = React.createRef();
    var parentRef;
    const [opened,
        setOpened] = useState(false);
    const [left, setLeft] = useState('10vw')
    const [contentOpened,
        setContentOpened] = useState(false);
    const classNames = require('classnames');

    const calculateLeft = () => {
        switch(id) {
            case "email": 
                setLeft('calc(10vw + 0px)');
                break;
            case "call": 
                setLeft('calc(10vw + 85px)');
                break;
            case "wa": 
                setLeft('calc(10vw + 165px)');
                break;
            case "maps": 
                setLeft('calc(10vw + 240px)');
                break;
        default:
            return '10vw'
        }
    }

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
        calculateLeft();
        parentRef = contactPopupRef.current;
        props.getRef(contactPopupRef.current);
        document.addEventListener('click', handleDocumentClick);
        return function cleanUp() {
            document.removeEventListener('click', handleDocumentClick);
        }
    }, [])

    const callComercial = () => {
        fn("311111111")
    }

    const callService = () => {
        fn("3183147984")
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
                        
                        <div className={classNames('footer-popup-button mont')} onClick={callService}>Whatsappeanos</div>
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
                    className={classNames('footer-popup-contentainer', {'shown': contentOpened})}>
                    <div className={classNames('footer-popup-content')}>
                        <div className={classNames('footer-popup-title mont')}>¿Ya sabes qué quieres?</div>
                        <div className={classNames('footer-popup-info mont')}>Envíanos un correo con tus necesidades</div>
                        <img className={classNames('footer-popup-imagen')} src={EmailImage} alt={'Cómunicate con DESAT por WhatsApp'}/>
                        
                        <div className={classNames('footer-popup-button mont')} onClick={callService}>Escríbenos</div>
                    </div>
                </div>
            </Fragment>
        )
    }

    return (
        <Fragment>
            <div
                style={{height: opened ? height : 0, left: left}}
                ref={contactPopupRef}
                className={classNames('footer-popup footer-open-top', {
                'opened-popup': opened
                })}
                // onMouseEnter={() => toggleOpen(id)}
                // onMouseLeave={() => toggleClose(id)}
            >
                {id === "call" && callContent()}
                {id === "wa" && whatsappChat()}
                {id === "maps" && locationContent()}
                {id === "email" && emailContent()}
            </div>
        </Fragment>
    )
}