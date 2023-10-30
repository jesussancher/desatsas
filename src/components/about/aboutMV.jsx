import React, {Fragment, useEffect, useState} from 'react';

export default function AboutMV (props) {

        const date =  new Date().getFullYear
        return (
            <Fragment>
            <section id={'aboutMV'}>
                    <div className={'mv-container'}>
                        <div className={'mv-info'}>
                            <div>
                                <div className={'value-title'}>
                                    <h1 className={'mont green'}><b>Misión</b></h1>
                                </div>
                                <div className={'value-subtitle'}>
                                    <h3 className={'mont dark-green'}>¿Qué hacemos?</h3>
                                </div>
                            </div>
                            <div className={'value-description'}>
                                    <p className={'mont'}>Promover, desde la prevención, la salud de tus trabajadores y ambientes laborales seguros, desde la cultura del autocuidado.</p>
                            </div>
                        </div>
                        <div className={'mv-info'}>
                            <div>
                                <div className={'value-title'}>
                                    <h1 className={'mont green'}><b>Visión</b></h1>
                                </div>
                                <div className={'value-subtitle'}>
                                    <h3 className={'mont dark-green'}>¿Hacia dónde vamos?</h3>
                                </div>
                            </div>
                            <div className={'value-description'}>
                                    <p className={'mont'}>A diciembre de <b className={'green'}>{new Date().getFullYear()+1}</b> ser elegidos como prestadores de servicios de seguridad y salud en el trabajo por al menos el doble de nuestros aliados actuales.</p>
                            </div>
                        </div>
                    </div>
            </section>
        </Fragment>
    );

}