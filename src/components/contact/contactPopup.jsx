import React, {Fragment, useEffect, useState} from 'react';

export default function ContactPopup(props) {

    const {open, parent, id, toggle, fn, height, getCopied} = props;
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
                        <div className={classNames('contact-popup-info-comp mt-15 dark-green mont')} onClick={() => copyToClipboard("atencionalcliente@desat.co", "mail")}>atencionalcliente@desat.co</div>
                        <div className={classNames('contact-popup-info-comp mb-15 mt-15 mont')}>ó</div>
                        <div className={classNames('contact-popup-button mont')} onClick={emailService}>Pregúntanos</div>
                    </div>
                    <div className={classNames('contact-popup-content')}>
                        <div className={classNames('contact-popup-title mont')}>PQRs</div>
                        <div className={classNames('contact-popup-info mont')}>Puedes escribirnos a nuestro canal de PQR.</div>
                        <div className={classNames('contact-popup-info-comp mt-15 dark-green mont')} onClick={() => copyToClipboard("pqrs@desat.co", "mail")}>pqrs@desat.co</div>
                        <div className={classNames('contact-popup-info-comp mb-15 mt-15 mont')}>ó</div>
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
                        <div className={classNames('contact-popup-info-comp mt-15 dark-green mont')} onClick={() => copyToClipboard("3222610811", "phone")}>+57 3222610811</div>
                        <div className={classNames('contact-popup-info-comp mb-15 mt-15 mont')}>ó</div>
                        <div className={classNames('contact-popup-button mont')} onClick={callService}>Hablemos</div>
                    </div>
                    <div className={classNames('contact-popup-content')}>
                        <div className={classNames('contact-popup-title mont')}>¿Ya sabes qué quieres?</div>
                        <div className={classNames('contact-popup-info mont')}>¡Habla con nuestro equipo comercial!</div>
                        <div className={classNames('contact-popup-info-comp mt-15 dark-green mont')} onClick={() => copyToClipboard("3184246238", "phone")}>+57 3184246238</div>
                        <div className={classNames('contact-popup-info-comp mb-15 mt-15 mont')}>ó</div>
                        <div className={classNames('contact-popup-button mont')} onClick={callComercial}>Cotiza</div>
                    </div>
                </div>
            </Fragment>
        )
    }

    function copyToClipboard(text, type) {
        if (window.clipboardData && window.clipboardData.setData) {
            // Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
            return window.clipboardData.setData("Text", text);
    
        }
        else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
            var textarea = document.createElement("textarea");
            textarea.textContent = text;
            textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in Microsoft Edge.
            document.body.appendChild(textarea);
            textarea.select();
            //console.log(text)
            if(text !== "NaN") {
                getCopied({id: type, status: true})
            }
            try {
                setTimeout(() => {
                    getCopied({id: "", status: false})
                },[3000])
                return document.execCommand("copy");  // Security exception may be thrown by some browsers.
            }
            catch (ex) {
                console.warn("Copy to clipboard failed.", ex);
                return false;
            }
            finally {
                document.body.removeChild(textarea);
            }
        }
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