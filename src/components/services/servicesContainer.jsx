import React, {Fragment} from 'react'
import ServiceBox from './service-box'

function ServicesContainer(props) {
    const { select } = props;
    const classNames =  require('classnames');
    return (
        <div className={classNames("row services-contain", {'show-card' : select.shown})}>
            {props.services.map((service, index) => { 
                return <Fragment key={index}><ServiceBox id={index} name={service.name} description={service.description} icon={service.icon} selected={props.selected}/></Fragment>
            
            })}
        </div>

    )
}

export default ServicesContainer