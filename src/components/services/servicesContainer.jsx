import React, {useState, useEffect} from 'react'
import ServiceBox from './service-box'

function ServicesContainer(props) {

    return (
        <div className="row services-contain">
            {props.services.map((service, index) => (<ServiceBox id={index} name={service.name} description={service.description} icon={service.icon} selected={props.selected}/>))}
        </div>

    )
}

export default ServicesContainer