import React, { Fragment, useEffect, useState } from 'react';

export default function Information(props) {

    const { copied } = props;
    const [scheduleIndex, setScheduleIndex] = useState(0);

    const classNames = require('classnames');

    useEffect(() => {
        setTimeout(() => {
            switch (scheduleIndex) {
                case 0:
                    setScheduleIndex(1)
                    break;
                case 1:
                    setScheduleIndex(0)
                    break;
                default:
                    break;
            }
        }, 5000);
    },[scheduleIndex])

    return(
        <Fragment>
            <div className={classNames('information-container', {'copied': copied.status})}>
                {copied.status &&
                <div className={'information-content dark-green mont'}>
                        <b>{copied.id === "mail" ? `Correo` : `Teléfono`}</b> copiado satisfactoriamente
                </div>
                }
            </div>
        </Fragment>
    )
}