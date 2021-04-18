import React, { Fragment, useState } from 'react';
import ContactPopup from './contactPopup';

export default function ContactCard(props) {

    const contactBtnRef = React.createRef();
    const {icon, title, actionButton, fn , id, poped} = props;

    const [openedPopup, setOpenedPopup] = useState(false)

    const clicked = () => {
        switch(id) {
            case "call": 
            break;
            default:
                fn();
            break
        }
        togglePopup()
    }

    const togglePopup = () => {
        setOpenedPopup(prev => prev = !prev)
    }

    return ( 
        <Fragment>
            <div className={'contact-card'}>
                <div className={'contact-card-icon'}>
                    {icon}
                </div>
                {/* <div className={'mont contact-card-title'}>
                        {title}
                </div> */}
                <div ref={contactBtnRef} className={'contact-card-button-container'}>
                    <div onClick={clicked} className={'mont contact-card-button'}>
                            {actionButton}
                    </div>
                    {
                        (openedPopup && poped) && 
                        <ContactPopup open={openedPopup} toggle={togglePopup} parent={contactBtnRef} id={id} fn={fn}/>
                    }
                </div>
            </div>
        </Fragment>
    )
}