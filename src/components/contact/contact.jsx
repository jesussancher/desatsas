import React from 'react';
import { Fragment } from 'react';
import ContactCard from './contact-card';
import mailIcon from './../../assets/img/icons/email.svg';
import phoneIcon from './../../assets/img/icons/phone.svg';
import whatsappIcon from './../../assets/img/icons/whatsapp.svg';
import mapIcon from './../../assets/img/icons/maps.svg';


export default function Contact (props) {
    const {getCopied} =props;
    const sendMail = (emailAdress) => {
        if(emailAdress.includes("pqr")){
            window.open(`mailto:${emailAdress}?subject=¡Hola!&body=Hola, me interesa presentar una inquietud.`);
        } else {
            window.open(`mailto:${emailAdress}?subject=¡Hola!&body=Hola, me interesa conocer más respecto a sus servicios.`);
        }
    }
    // FDD70CCE0A4234E914E94AA811D1B3EDAD5E
    const sendWhatsapp = () => {
        window.open("https://wa.link/9iu7gu");
    }

    const emailHandler = emailAdress => {
        sendMail(emailAdress)
    }

    const callHandler = phoneNumber => {
        simulateCall(phoneNumber);
    };

    const goToLocation = () => {
        window.open("https://www.google.com/maps/dir//desat/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x8e3b745c3c45d787:0xaf26b8c24cfb5ac9?sa=X&ved=2ahUKEwjFsOaZso7wAhWoct8KHZHZCfwQ9RcwE3oECCAQBQ")
    }

    const simulateCall = phoneNumber => window.open(`tel:${phoneNumber}`, '_self');

    const contactCards = [
        { id: 'email',icon: {src: mailIcon, alt: 'Correo electrónico de DESAT'}, title: "Escríbenos", actionButton: "Escríbenos", fn: emailHandler, poped: true, height: 350},
        { id: 'call', icon: {src: phoneIcon, alt: 'Números telefónicos de DESAT'}, title: "Hablemos", actionButton: "Hablemos", fn: callHandler, poped: true, height: 355},
        { id: 'wa', icon: {src: whatsappIcon, alt: 'Número de Whatsapp de DESAT'}, title: "Chateemos", actionButton: "Chateemos", fn: sendWhatsapp, poped: false, height: 220},
        { id: 'maps',icon: {src: mapIcon, alt: 'Mapa de DESAT'}, title: "Visítanos", actionButton: "Visítanos", fn: goToLocation, poped: false, height: 220},
    ]

    return (
            <section id='Contacto'>
                <div className={'contact-container'}>
                    <div className={'contact-info'}>
                        <h2 className={'mont green'}>¿Cómo podemos ayudarte?</h2>
                        <p className={'mont dark-grey'}>Estamos listos para solucionar tus necesidades en salud y seguridad laboral.</p>
                    </div>

                    <div className={'contact-cards-container'}>
                        {contactCards.map( (card, key) => {
                            return(
                                <Fragment key={key}>
                                    <ContactCard id={card.id} icon={card.icon} title={card.title} actionButton={card.actionButton} fn={card.fn} poped={card.poped} height={card.height} getCopied={getCopied}/>
                                </Fragment>
                            )
                        })
                        }
                    </div>
                </div>
            </section>
    )
}