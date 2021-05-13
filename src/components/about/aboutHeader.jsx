import React, {Fragment, Component} from 'react';
import nosotrosHeader from './../../assets/img/nosotrosBackground.jpg';
import { TxtRotate } from './../utils/typer.js';
import logo from './../../assets/img/logo.svg';
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

        return (
            <Fragment>
            <section id={"Inicio"}>
                <div className="header about">
                    <div className={'logo-container about-logo-container'}>
                        <img className="logo-sm absolute" src={logo} alt="Desat Logo"/>
                    </div>
                    {/* <div className={'about-head-img-container'}>
                        <div className={'about-head-img-content'}>
                            <img src={nosotrosHeader} alt={'¿Qué es DESAT?'} />
                        </div>
                    </div> */}
                    <div className="header-content-container about-head-content">
                        <div className={"header-content"}>
                            <h1 className="h1-md mont green">Pensamos en</h1>
                            <h1 className="h1-md mont dark-green">
                                <b>tu <span style={{fontWeight: 700, color: "var(--dark-green)"}}
                                        className="txt-rotate"
                                        data-period="2000"
                                        data-rotate='[ "seguridad", "salud", "bienestar"]'>
                                    </span>
                                </b>
                            </h1>
                            <p className="p-md mont dark-grey">Nos apasiona servirte.</p>
                        </div>
                    {/* <div className={"header-services"}>
                    </div> */}
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
}