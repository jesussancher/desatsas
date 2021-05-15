import React, {Fragment, useEffect, useState} from 'react';
import './locations.css';
import { locationsList } from './locationsList.js';
export default function Locations (props) {


        return (
            <Fragment>
            <section id={'aboutValues'}>
                    <div className={'location-container'}>
                        <div className={'value-info'}>
                            <div>
                                <div className={'value-title'}>
                                    <h2 className={'mont green'}><b>Red nacional de servicios</b></h2>
                                </div>
                                <div className={'value-subtitle'}>
                                    <p className={'mont dark-grey'}>Tenemos presencia en todo el país</p>
                                </div>
                            </div>
                            <div className={'value-description'}>
                            <div className={'mont dark-grey location-item'}>
                                {locationsList.map((location, index) => {
                                    if(["Neiva"].includes(location)){
                                        return(
                                            <Fragment>
                                            <b className={'green'}>
                                                {location} 
                                            </b>{`, `}
                                            </Fragment>
                                        )
                                    } else{
                                        return(
                                                `${location},  `
                                        )
                                    }
                                })}
                            </div>
                            </div>
                        </div>
                        <div className={'location-image-back'}>
                            <div className={'location-image'}></div>
                        </div>
                    </div>
            </section>
        </Fragment>
    );

}