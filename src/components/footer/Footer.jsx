import React, { Fragment, useState } from 'react';
import FooterPopup from './FooterPopup.jsx';

export default function Footer (props) {

    const contactBtnRef = React.createRef();
    const [openedPopup, setOpenedPopup] = useState(false)
    const [popupID, setpopupID] = useState('')
    const sendMail = () => {
        window.open('mailto:jhsanro@gmail.com?subject=¡Hola!%A20Me%A20interesa&body=<div> Hola </div>');
    }
    // FDD70CCE0A4234E914E94AA811D1B3EDAD5E
    const sendWhatsapp = () => {
        console.log("WA Sent")
    }

    const callHandler = phoneNumber => {
        simulateCall(phoneNumber);
    };

    const goToLocation = () => {
        window.open("https://www.google.com/maps/dir//desat/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x8e3b745c3c45d787:0xaf26b8c24cfb5ac9?sa=X&ved=2ahUKEwjFsOaZso7wAhWoct8KHZHZCfwQ9RcwE3oECCAQBQ")
    }

    const simulateCall = phoneNumber => window.open(`tel:${phoneNumber}`, '_self');

    const contactCards = [
        { id: 'email',icon: <i className="fas fa-envelope-open-text"></i>, title: "Escríbenos", actionButton: "Contactar", fn: sendMail, poped: true, height: 255},
        { id: 'call', icon: <i className="fas fa-phone"></i>, title: "Llámanos", actionButton: "Llamar", fn: callHandler, poped: true, height: 275},
        { id: 'wa', icon: <i className="fab fa-whatsapp"></i>, title: "Chatea", actionButton: "Contactar", fn: sendWhatsapp, poped: true, height: 300},
        { id: 'maps',icon: <i className="fas fa-map-marked-alt"></i>, title: "Encuéntranos", actionButton: "Encuéntranos", fn: goToLocation, poped: true, height: 300},
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
                <div className={'publicity-container'}>

                </div>
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
                                            {card.icon}
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
                        <div className={'footer-info'}>Designed by <a target={'_blank'} href={'https://twitter.com/Jesussancher'}>Jesussancher</a></div>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}