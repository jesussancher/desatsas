import React, {Fragment, useEffect} from 'react';
import {
    useHistory
  } from "react-router-dom";  
export default function AboutHistory (props) {

        const history = useHistory();

        useEffect(() => {
            const folder = history.location.pathname.split("/")[1];
            const rest = history.location.pathname.split("/")[2];
            if(folder === "Nosotros" && rest !== ""){
                history.push('/Nosotros');
            }
        },[history.location.pathname])

        const date =  new Date().getFullYear
        return (
            <Fragment>
            <section id={'aboutHistory'}>
                    <div className={'mv-container history-container'}>
                        <div className={'history-info'}>
                                <div className={'value-title history-title'}>
                                    <h1 className={'mont green'}><b>Nuestra Historia</b></h1>
                                </div>
                                <div className={'value-subtitle history-title'}>
                                    <h3 className={'mont dark-green'}>¿De dónde venimos?</h3>
                                </div>
                                <div className={'history-description'}>
                                        <p className={'mont'}>Siete años atrás arribamos a los <b>brazos gentiles de los Opitas</b>, en Neiva, su capital. Con el sueño innovador y rebosante de emprendimiento empresarial, iniciamos prestando servicios de medicina ocupacional en diferentes empresas.
            <br/>
            <br/>
    Poco tiempo después formamos un consultorio de salud ocupacional, con el cual <b>abrimos camino en la senda empresarial</b>. Durante ese recorrido establecimos estrategias y creamos sinergias con empresas reconocidas de Neiva y el Huila, las cuales nos permitieron sembrar <b>confianza</b>, ganar <b>experiencia</b> y <b>reconocimiento</b> en los que han sido y son nuestros clientes.
            <br/>
            <br/>
    Cinco años en el futuro, aquel consultorio médico fraguó en lo que hoy yace ante ustedes: <b>DESAT IPS S.A.S</b>, una <b>institución prestadora de salud</b>, una empresa moderna, coherente, agradable y confortable. Con una personalidad que respira seguridad y salud laboral, distinguiéndola en el gremio.</p>
                                </div>
                        </div>
                    </div>
            </section>
        </Fragment>
    );

}