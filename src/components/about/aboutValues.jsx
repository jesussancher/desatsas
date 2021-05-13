import React, {Fragment, useEffect, useState} from 'react';

export default function AboutValues (props) {

        return (
            <Fragment>
            <section id={'aboutValues'}>
                    <div className={'values-container'}>
                        <div className={'value-image'}></div>
                        <div className={'value-info'}>
                            <div>
                                <div className={'value-title'}>
                                    <h1 className={'mont green'}><b>Valores corporativos</b></h1>
                                </div>
                                <div className={'value-subtitle'}>
                                    <h3 className={'mont dark-green'}>¿Cómo somos?</h3>
                                </div>
                            </div>
                            <div className={'value-description'}>
                                    <p className={'mont dark-green'}>En DESAT S.A.S:</p>
                                    <ul>
                                        <li><p>Las personas son lo primero, las tratamos con <b className={'green'}>respeto.</b></p></li>
                                        
                                        <li><p>La <b className={'green'}>justicia</b> guía nuestra labor.</p></li>
                                        
                                        <li><p>Le inyectamos <b className={'green'}>pasión</b> a lo que hacemos.</p></li>
                                        
                                        <li><p>Trabajamos en armonía con el ambiente: <b className={'green'}>dejamos huella verde.</b></p></li>
                                    </ul>
                            </div>
                        </div>
                    </div>
            </section>
        </Fragment>
    );

}