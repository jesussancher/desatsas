import React, {Fragment, useEffect, useState} from 'react';

export default function ContactPopup(props) {

    const {open, parent, id, toggle, fn} = props;
    const contactPopupRef = React.createRef();
    var parentRef;
    const [opened,
        setOpened] = useState(false);
    const [contentOpened,
        setContentOpened] = useState(false);

    const [openSide,
        setOpenSide] = useState('bottom');
    const [translatedt2b,
        setTranslateT2B] = useState(false);
    const [translatedb2t,
        setTranslateB2T] = useState(false);

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
        topOrBottom();
    }, [open])

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

    const toggleSide = () => {
        const parentOffset = parent
            ?.current
                ?.offsetTop;
        if (parentOffset) {
            console.log(window.scrollY + window.innerHeight, parentOffset)
            if (window.scrollY > parentOffset - 318 && window.scrollY < parentOffset - 320) {
                setContentOpened(false);
                setTimeout(() => {
                    setOpened(false);
                }, 100);
                setTimeout(() => {
                    setOpenSide('bottom');
                    setOpened(true);
                }, 500);
                setTimeout(() => {
                    setContentOpened(true);
                }, 800);
            } else if ((window.scrollY + window.innerHeight) < parentOffset + 318 && (window.scrollY + window.innerHeight) > parentOffset + 320) {
                setContentOpened(false);
                setTimeout(() => {
                    setOpened(false);
                }, 100);
                setTimeout(() => {
                    setOpenSide('top');
                    setOpened(true);
                }, 500);
                setTimeout(() => {
                    setContentOpened(true);
                }, 800);
            }
        }
    }
    useEffect(() => {
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
        fn("3183147984")
    }

    const callService = () => {
        fn("3183147984")
    }

    const callContent = () => {
        return (
            <Fragment>
                <div
                    className={classNames('contact-popup-contentainer', {'shown': contentOpened})}>
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
                ref={contactPopupRef}
                className={classNames('contact-popup', {
                'opened-popup': opened
            }, {
                'contact-open-top': openSide === 'top'
            }, {
                'contact-open-bottom': openSide === 'bottom'
            })
            }>
                {id === "call" && callContent()}
            </div>
        </Fragment>
    )
}