import React, { Fragment, useState } from 'react';
import ContactPopup from './contactPopup';

export default function ContactCard(props) {

    const contactBtnRef = React.createRef();
    const {icon, actionButton, fn , id, poped, height, getCopied} = props;

    const [openedPopup, setOpenedPopup] = useState(false)

    const clicked = () => {
        switch(id) {
            case "call": 
            break;
            case "email": 
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
                    <img src={icon.src} alt={icon.alt} />
                </div>
                <div ref={contactBtnRef} className={'contact-card-button-container'}>
                    <div onClick={clicked} className={'mont contact-card-button'}>
                            {actionButton}
                    </div>
                    {
                        (openedPopup && poped) && 
                        <ContactPopup open={openedPopup} getCopied={getCopied} toggle={togglePopup} parent={contactBtnRef} id={id} fn={fn} height={height}/>
                    }
                </div>
            </div>
        </Fragment>
    )
}