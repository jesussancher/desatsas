import React, {useEffect, useState} from 'react'
import StickyServices from './sticky-services'
function StickyCart(props) {

    const [status,
        setStatus] = useState(true)

    const [reference, setReference] = useState(null);
    const openCart = () => {
        setStatus(!status)
    }

    const closeOnMouseOut = () => {
        setTimeout(() => {
            setStatus(false);
        }, 100);
    }

    const getRef = (e) => {
        setReference(e)
    }

    const handleDocumentClick = (e) => {
        const target = e.target;
        const container = document.getElementById("stickyCart");
        const button = document.getElementById("cartButton");
        if(!container?.contains(target) && !button?.contains(target)) {
            closeOnMouseOut()
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleDocumentClick)

        return function cleanUp() {
            document.removeEventListener('click', handleDocumentClick)
        }
    },[])

    
    return (
        <div
            id={'cartButton'}
            onClick={openCart}
            className="fixed sticky-cart main-green-bg shadow">
            <h3 className="sticky-title">Servicios</h3>
            <span className="sticky-circle text-center absolute">
                <h3 className="green">{props.totalServices}</h3>
            </span>
            <StickyServices cart={props.cart} services={props.services} status={status} getRef={getRef} selected={props.selected}/>
        </div>
    )
}

export default StickyCart