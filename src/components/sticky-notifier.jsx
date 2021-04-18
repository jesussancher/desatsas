import React from 'react'

function StickyNotifier(props) {
    const notifierText = document.getElementsByClassName("notifier-text")
    if (props.status) {
        setTimeout(() => {
            props.setStatus(false)
            notifierText[0].classList.add("notifier-text-off")
        },4000)
        notifierText[0].classList.remove("notifier-text-off")
        return (
            <div className="fixed sticky-notifier sticky-notifier-open"><p className="notifier-text notifier-text-off">¡Agregaste {props.services[props.lastService].name}!</p></div>
        )
    } else {
        return (<div className="fixed sticky-notifier"><p className="notifier-text notifier-text-off"></p></div>)
    }
}

export default StickyNotifier