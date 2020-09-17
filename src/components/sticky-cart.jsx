import React, {useEffect, useState} from 'react'

function StickyCart(props) {
    const [total,
        setTotal] = useState(0)

    const totalServices = () => {
        const services = props.cart
        for (let i = 0; i < services.lenght; i++) {
            total += services.servQty
        }
        setTotal(total)
    }
    return (
        <div className="fixed sticky-cart main-green-bg shadow">
            <h3 className="sticky-title">Servicios</h3> 
            <span className="sticky-circle text-center absolute"><h3 className="green">{props.totalServices}</h3></span></div>
    )
}

export default StickyCart