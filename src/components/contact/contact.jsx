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

    }

    const simulateCall = phoneNumber => window.open(`tel:${phoneNumber}`, '_self');

    const contactCards = [
        { id: 'email',icon: <i class="fas fa-envelope-open-text"></i>, title: "Escríbenos", actionButton: "Contactar", fn: sendMail, poped: false},
        { id: 'call', icon: <i class="fas fa-phone"></i>, title: "Llámanos", actionButton: "Llamar", fn: callHandler, poped: true},
        { id: 'wa', icon: <i class="fab fa-whatsapp"></i>, title: "Chatea", actionButton: "Contactar", fn: sendWhatsapp, poped: false},
        { id: 'maps',icon: <i class="fas fa-map-marked-alt"></i>, title: "Encuéntranos", actionButton: "Encuéntranos", fn: goToLocation, poped: false},
    ]

    return (
        <Fragment>
            <section id='contacto' className={'section'}>
                <div className={'contact-container'}>
                    <div className={'contact-info'}>
                        <h2 className={'mont green'}>¿Cómo podemos ayudarte?</h2>
                        <p className={'mont dark-grey'}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque dolor provident consequuntur accusamus, aliquid itaque ut, sed, dolorem eos porro nostrum.</p>
                    </div>

                    <div className={'contact-cards-container'}>
                        {contactCards.map( card => {
                            return(
                                <ContactCard id={card.id} icon={card.icon} title={card.title} actionButton={card.actionButton} fn={card.fn} poped={card.poped}/>
                            )
                        })
                        }
                    </div>
                </div>
            </section>
        </Fragment> 
    )
}