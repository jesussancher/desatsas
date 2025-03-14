import React, {Component, Fragment} from 'react';
import logo from '../assets/img/logo.svg'
import ServicesContainer from './services/servicesContainer.jsx';
import {services} from './services/servicesData.js';
import { TxtRotate } from './utils/typer.js'
import './utils/typer.css'
export default class header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        this.runText();
    }

    runText = () => {
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-rotate');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtRotate(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-rotate > .wrap {  }";
        document
            .body
            .appendChild(css);
    };

    render() {
        const {selected, select} = this.props;

        return (
            <Fragment>
            <section id={"Inicio"}>
                <div className="header">
                    <div className={'logo-container'}>
                        <img className="logo-sm absolute" src={logo} alt="Desat Logo"/>
                    </div>
                    <div className="header-content-container">
                        <div className={"header-content"}>
                            <h1 className="h1-md mont green">Tu mejor</h1> <br/><h1 className="h1-md mont green sm-sl"> elección en</h1>
                            <br/>
                            <h2 className="h2-md mont dark-green">
                                    <div className={'wordCarousel-container'}>
                                            <div className="wordCarousel">
                                                <div className="flip4">
                                                        <div>Seguridad</div>
                                                        <div>Salud</div>
                                                        <div>Medicina Laboral</div>
                                                        <div>Prevención</div>
                                                </div>
                                            </div>
                                        </div>
                            </h2>
                            <p className="p-md mont dark-grey">¡Tranquilo! Nosotros te ayudamos.</p>
                        </div>
                        <div className={"header-services"}>
                            <ServicesContainer services={services} selected={selected} select={select}/>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
}