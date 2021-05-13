import React, {Fragment, useEffect, useState} from 'react';

export default function ContactPopup(props) {

    const {open, parent, id, toggle, fn, height} = props;
    const contactPopupRef = React.createRef();
    var parentRef;
    const [opened,
        setOpened] = useState(false);
    const [contentOpened,
        setContentOpened] = useState(false);

    const [openSide,
        setOpenSide] = useState('bottom');

    const classNames = require('classnames');

    const topOrBottom = () => {
        const windowHeight = window.innerHeight;
        const elementTopOffset = parent
            ?.current
                ?.getBoundingClientRect()
                    ?.top
        if (elementTopOffset > windowHeight / 2) {
            setOpenSide('top')
        } else {
            setOpenSide('bottom')
        }
    }

    useEffect(() => {
        
        if (open) {
            setTimeout(() => {
                setContentOpened(true)
            }, [500])
        } else {
            setContentOpened(false)
        }
        topOrBottom();
    })

    const handleDocumentClick = (e) => {
        const element = parentRef;
        const target = e.target;
        if (element) {
            if (!element.contains(target)) {
                setOpened(false)
                setContentOpened(false)
                setTimeout(() => {
                    toggle()
                }, [300])
            }
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setOpened(open)
        }, [100])
        parentRef = contactPopupRef.current;
    }, [])

    useEffect(() => {
        document.addEventListener('click', handleDocumentClick)
        // document.addEventListener('scroll', toggleSide)
        return function cleanUp() {
            document.removeEventListener('click', handleDocumentClick)
            // document.addEventListener('scroll', toggleSide)
        }
    }, [])

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

    const emailContent = () => {
        return (
            <Fragment>
                <div
                    className={classNames('contact-popup-contentainer shown')}>
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
    const callContent = () => {
        return (
            <Fragment>
                <div
                    className={classNames('contact-popup-contentainer shown')}>
                    <div className={classNames('contact-popup-content')}>
                        <div className={classNames('contact-popup-title mont')}>¿Tienes dudas?</div>
                        <div className={classNames('contact-popup-info mont')}>¡Nuestro servicio al cliente puede ayudarte!</div>
                        <div className={classNames('contact-popup-button mont')} onClick={callService}>Hablemos</div>
                    </div>
                    <div className={classNames('contact-popup-content')}>
                        <div className={classNames('contact-popup-title mont')}>¿Ya sabes qué quieres?</div>
                        <div className={classNames('contact-popup-info mont')}>¡Habla con nuestro equipo comercial!</div>
                        <div className={classNames('contact-popup-button mont')} onClick={callComercial}>Cotiza</div>
                    </div>
                </div>
            </Fragment>
        )
    }

    return (
        <Fragment>
            <div
                style={{height: opened ? height : 0}}
                ref={contactPopupRef}
                className={classNames('contact-popup', {
                'opened-popup': opened
            }, {
                'contact-open-top': openSide === 'top'
            }, {
                'contact-open-bottom': openSide === 'bottom'
            })
            }>
                {id === "call"  && callContent()}
                {id === "email" && emailContent()}
            </div>
        </Fragment>
    )
}