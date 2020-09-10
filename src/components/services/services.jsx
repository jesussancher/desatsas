import React from 'react'
import ServicesContainer from './servicesContainer.jsx'

function Services() {
    return (
        <div className="services-bg w-100 relative">
            <div className="services-container">
                <h4 className="dark-grey text-center">¿Sabes todo lo que tus trabajadores necesitan? ¡Conócelo!</h4>
                <br></br>
                <p className="dark-grey text-center">Nuestros servicios están enmarcados en un ámbito de alta
                    <b> calidad</b>,
                    <b> innovación </b>
                    e
                    <b> integridad</b>, pensados en satisfacer tus necesidades.</p>
                <div className="section-title text-center">
                    <h1 className="h1-md mont green">Nuestros </h1>
                    <h1 className="h1-md mont dark-green"><b>Servicios</b></h1>
                </div>
                <ServicesContainer/>
            </div>
        </div>
    )
}

export default Services