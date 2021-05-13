import React, { Fragment, useState } from 'react';
import FooterPopup from './FooterPopup.jsx';
import mailIcon from './../../assets/img/icons/email.svg';
import phoneIcon from './../../assets/img/icons/phone.svg';
import whatsappIcon from './../../assets/img/icons/whatsapp.svg';
import mapIcon from './../../assets/img/icons/maps.svg';
import fbIcon from './../../assets/img/icons/facebook.svg';
import SuperSalud from './../../assets/img/logo-vigilado-super.png';

export default function Footer (props) {

    const contactBtnRef = React.createRef();
    const [openedPopup, setOpenedPopup] = useState(false)
    const [popupID, setpopupID] = useState('')
    const sendMail = () => {
        window.open('mailto:atencionalcliente@desat.co?subject=¡Hola!%A20Me%A20interesa&body=Hola, me interesa conocer más respecto a sus servicios');
    }
    // FDD70CCE0A4234E914E94AA811D1B3EDAD5E
    const sendWhatsapp = () => {
        window.open("https://wa.link/zx6fg0");
    }

    const callHandler = phoneNumber => {
        simulateCall(phoneNumber);
    };

    const emailHandler = emailAdress => {
        sendMail(emailAdress)
    }

    const goToLocation = () => {
        window.open("https://www.google.com/maps/dir//desat/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x8e3b745c3c45d787:0xaf26b8c24cfb5ac9?sa=X&ved=2ahUKEwjFsOaZso7wAhWoct8KHZHZCfwQ9RcwE3oECCAQBQ")
    }

    const goToFacebook = () => {
        window.open("https://www.facebook.com/desat.sas")
    }

    const simulateCall = phoneNumber => window.open(`tel:${phoneNumber}`, '_self');

    const contactCards = [
        { id: 'email',icon: {src: mailIcon, alt: 'Correo electrónico de DESAT'}, title: "Escríbenos", actionButton: "Contactar", fn: emailHandler, poped: true, height: 295},
        { id: 'call', icon: {src: phoneIcon, alt: 'Números telefónicos de DESAT'}, title: "Llámanos", actionButton: "Llamar", fn: callHandler, poped: true, height: 275},
        { id: 'wa', icon: {src: whatsappIcon, alt: 'Número de Whatsapp de DESAT'}, title: "Chatea", actionButton: "Contactar", fn: sendWhatsapp, poped: true, height: 300},
        { id: 'maps',icon: {src: mapIcon, alt: 'Mapa de DESAT'}, title: "Encuéntranos", actionButton: "Encuéntranos", fn: goToLocation, poped: true, height: 300},
        { id: 'facebook',icon: {src: fbIcon, alt: 'Facebook de DESAT'}, title: "Síguenos", actionButton: "Síguenos", fn: goToFacebook, poped: true, height: 290},
    ]

    const togglePopup = (id) => {
        if(openedPopup === false) {
                setpopupID(id);
                setOpenedPopup(prev => prev = !prev)
        } else {
            if(id === popupID){
                setOpenedPopup(prev => prev = !prev)
                setpopupID(id);
            } else {
                setpopupID(id);
                setOpenedPopup(prev => prev = true)
            }
        }
    }

    const toggleOpen = (id) => {
        setpopupID(id);
        setOpenedPopup(true)
    }

    const toggleClose = (id) => {
        setpopupID(id);
        setTimeout(() => {
            setOpenedPopup(false)
        }, 300);
    }
    
    const getRef = (e) => {
        
    }

    return (
        <Fragment> 
            <footer>
                {/* <div className={'publicity-container'}>

                </div> */}
                <div  className={'footer-container'}>
                    <div className={'footer-content'}>
                        <div ref={contactBtnRef}  className={'footer-icons-container'}>
                            {contactCards.map( (card, key) => {
                                return (
                                    <Fragment key={key}>
                                        <div id={card.id} 
                                            className={'footer-icon'} 
                                            onClick={() => togglePopup(card.id)}
                                            >
                                            <img src={card.icon.src} alt={card.icon.alt} />
                                        </div>
                                        
                                    {(card.poped && openedPopup && popupID === card.id)&& 
                                        <FooterPopup open={openedPopup} toggleClose={toggleClose} toggleOpen={toggleOpen} parent={contactBtnRef} id={card.id} fn={card.fn} height={card.height} getRef={getRef}/>
                                    }
                                    </Fragment>
                                )
                            })}
                        </div>
                        <div className={'footer-copy'}>© Copyright {new Date().getFullYear()}, <b>DESAT S.A.S</b> {`   `} 
                            All rights reserved</div>
                        <img className={'vigilado-logo'} src={SuperSalud} alt={SuperSalud} />
                        {/* <div className={'footer-info'}>Designed by <a target={'_blank'} href={'https://twitter.com/Jesussancher'}>Jesussancher</a></div> */}
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}