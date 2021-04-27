import React, {useState} from 'react'
import StickyServices from './sticky-services'
function StickyCart(props) {

    const [status,
        setStatus] = useState(true)

    const openCart = () => {
        setStatus(!status)
    }
    return (
        <div
            onClick={() => openCart()}
            className="fixed sticky-cart main-green-bg shadow">
            <h3 className="sticky-title">Servicios</h3>
            <span className="sticky-circle text-center absolute">
                <h3 className="green">{props.totalServices}</h3>
            </span>
            <StickyServices cart={props.cart} services={props.services} status={status}/>
        </div>
    )
}

export default StickyCart