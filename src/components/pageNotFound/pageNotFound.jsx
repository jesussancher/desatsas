import React, { Fragment, useEffect } from 'react';
import './404.css';
import { useHistory} from 'react-router-dom';

export default function PageNotFound(props) {

    const {getPath, getSelect} = props;
    const history = useHistory();

    useEffect(() => {
        getPath(true)
        return function cleanUp(){
            getPath(false)
        }
    },[])

    const goToServices = () => {
        history.push('/');
        showServices();
    }

    const showServices = () => {
        getSelect("servicios",true)
        setTimeout(() => {
            getSelect("servicios",false)
        }, 1000);
        setTimeout(() => {
            getSelect("servicios",true)
        }, 2000);
        setTimeout(() => {
            getSelect("servicios",false)
        }, 3000);
        setTimeout(() => {
            getSelect("servicios",true)
        }, 4000);
        setTimeout(() => {
            getSelect("servicios",false)
        }, 5000);
    }
    return (
        <Fragment>
            <div className={'page-not-found-container location-container'}>
                <div className={'not-found-title mont green'}>
                    ¡Te perdiste!
                </div>
                <div className={'not-found-subtitle mont dark-green'}>
                    <b>No te preocupes</b>, siempre puedes volver a ver:
                </div>
                <div className={'not-found-btn mont green'} onClick={goToServices}>
                    Nuestros Servicios
                </div>
            </div>
        </Fragment>
    )
}