import React, {Fragment, Component} from 'react';
import nosotrosHeader from './../../assets/img/nosotrosBackground.jpg';
import { TxtRotate } from './../utils/typer.js';
import logo from './../../assets/img/logo.svg';
import AboutCollage from './aboutCollage.jsx';
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
                    <div className="header-content-container about-head-content">
                        <div className={"header-content"}>
                            <h1 className="h1-md mont green">Somos</h1>
                                <h1 className="h1-md mont dark-green">
                                        <div className={'wordCarousel-container'}>
                                                {/* <h1><b>en 
                                                </b></h1> */}
                                                <div className="wordCarousel">
                                                    <div className="flip4">
                                                        {/* <ul class="flip4"> */}
                                                            <div>Apasionados</div>
                                                            <div>Creativos</div>
                                                            <div>Respetuosos</div>
                                                            <div>Opitas</div>
                                                        {/* </ul> */}
                                                    </div>
                                                </div>
                                            </div>
                                </h1>
                            <p className="p-md mont dark-grey">Marcamos la diferencia.</p>
                        </div>
                        <AboutCollage />
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
}