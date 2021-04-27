import React from 'react';
import { Fragment } from 'react';
import ContactCard from './contact-card';

export default function Contact () {
    
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
        { id: 'email',icon: <i className="fas fa-envelope-open-text"></i>, title: "Escríbenos", actionButton: "Contactar", fn: sendMail, poped: false, height: 220},
        { id: 'call', icon: <i className="fas fa-phone"></i>, title: "Llámanos", actionButton: "Llamar", fn: callHandler, poped: true, height: 280},
        { id: 'wa', icon: <i className="fab fa-whatsapp"></i>, title: "Chatea", actionButton: "Contactar", fn: sendWhatsapp, poped: false, height: 220},
        { id: 'maps',icon: <i className="fas fa-map-marked-alt"></i>, title: "¿Cómo llegar?", actionButton: "¿Cómo llegar?", fn: goToLocation, poped: false, height: 220},
    ]

    return (
        <Fragment>
            <section id='Contacto' className={'section'}>
                <div className={'contact-container'}>
                    <div className={'contact-info'}>
                        <h2 className={'mont green'}>¿Cómo podemos ayudarte?</h2>
                        <p className={'mont dark-grey'}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque dolor provident consequuntur accusamus, aliquid itaque ut, sed, dolorem eos porro nostrum.</p>
                    </div>

                    <div className={'contact-cards-container'}>
                        {contactCards.map( (card, key) => {
                            return(
                                <Fragment key={key}>
                                    <ContactCard id={card.id} icon={card.icon} title={card.title} actionButton={card.actionButton} fn={card.fn} poped={card.poped} height={card.height}/>
                                </Fragment>
                            )
                        })
                        }
                    </div>
                </div>
            </section>
        </Fragment> 
    )
}