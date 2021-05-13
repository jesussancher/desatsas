import React, {Fragment, useEffect, useState} from 'react'
import './carouselStyle.css';
import './../../css/flaticon.css';
import Img1 from './../../assets/img/Covid/1.jpg';
import Img2 from './../../assets/img/Covid/2.jpg';
import Img3 from './../../assets/img/Covid/3.jpg';
import Img4 from './../../assets/img/Covid/4.jpg';
import Img5 from './../../assets/img/Covid/5.jpg';
import Img6 from './../../assets/img/Covid/6.jpg';
// import * as firebase from 'firebase';
import { app, apps, initializeApp } from 'firebase/app'
export default function Carousel() {


    const firebaseConfig = {
        apiKey: "AIzaSyCNf8YkgRR-0QlaeB8PVrhUikGV9fTl1r8",
        authDomain: "desat-a011c.firebaseapp.com",
        projectId: "desat-a011c",
        storageBucket: "desat-a011c.appspot.com",
        messagingSenderId: "782966691520",
        appId: "1:782966691520:web:c9cdb1e3208f32d02b7f25",
        measurementId: "G-5T2VZQG67M"
      };
    // Initialize Firebase
    // if (!apps.length) {
    //     initializeApp(firebaseConfig)
    //         .firestore();
    // } else {
    //     app()
    //         .firestore();
    // }


    const [slideIndex,
        setSlideIndex] = useState(0);

    const [clicked, setClicked] = useState(false);

    const images = [
        {
            img: Img1,
            title: 'Covid',
            icon: 'flaticon-prevention',
            description: 'Hemos intensificado nuestros controles para protegerte y protegernos',
        }, {
            img: Img2,
            title: 'Covid2',
            icon: 'flaticon-documents',
            description: 'Conforme al Ministerio de Salud',
        }, {
            img: Img3,
            title: 'Covid3',
            icon: 'flaticon-affection',
            description: 'Nuestro compromiso es 0 contagios',
        }, {
            img: Img4,
            title: 'Covid4',
            icon: 'flaticon-washing-hands',
            description: 'Lavado correcto de manos',
        }, {
            img: Img5,
            title: 'Covid5',
            icon: 'flaticon-footprints',
            description: 'Desinfección de suela de zapatos',
        }, {
            img: Img6,
            title: 'Covid6',
            icon: 'flaticon-handwash',
            description: 'Módulo de desinfección de ingreso de personal',
        }
    ]

    // var myTimer;

    // NEXT AND PREVIOUS CONTROL
    function plusSlides(n) {
        setClicked(true);
        if (n < 0) {
            setSlideIndex(slideIndex => slideIndex = slideIndex - 1)
            showSlides(slideIndex - 1);
        } else {
            setSlideIndex(slideIndex => slideIndex = slideIndex + 1)
            showSlides(slideIndex + 1);
        }
    }

    //Controls the current slide and resets interval if needed
    const currentSlide = (n) => {
        setClicked(true);
        setSlideIndex(n);
    }

    const showSlides = (n) => {
        const slides = images;
        if (n > slides.length-1) {
            setSlideIndex(slideIndex => slideIndex = 0)
        }
        if (n < 0) {
            setSlideIndex(slideIndex => slideIndex = slides.length-1)
        }
        // console.log(n)
    }

    // const pause = () => {
    //     clearInterval(myTimer);
    // }

    // const resume = () => {
    //     clearInterval(myTimer);
    //     myTimer = setInterval(function () {
    //         plusSlides(slideIndex)
    //     }, 4000);
    // }

    useEffect(() => {
        if (clicked) {
            setTimeout(() => {
                setClicked(false)
            }, 2000);
        } else {
            setTimeout(() => {
                if(slideIndex < images.length-1 && slideIndex > -1) {
                    plusSlides(1)
                } else if (slideIndex === images.length-1) {
                    setSlideIndex(slideIndex => slideIndex = 0)
                }
            }, 2000)
        }
    },[slideIndex, clicked])

    // useEffect(() => {
    //     console.log(desatApp);
    // },[desatApp])
    const classNames = require('classnames')

    return (
        <Fragment>
            <section id={'Noticias'}>

                {/* <div className={'noticias-top relative'}>

                    <img src={BackTop} alt={''}/>
                    

                </div> */}
                <h1 className={'section-title green mont'}>
                        Novedades
                </h1>
                <div id="carousel" className="content mb-30 row w-100">

                    <div
                        className="slideshow-container rounded-chart-left relative shadow">
                        {images.map((image, index) => {
                            return (
                                <div
                                    key={index}
                                    style={{
                                    display: slideIndex === index
                                        ? 'block'
                                        : 'none'
                                }}
                                    className={classNames("mySlides fade")}>
                                    <img
                                        src={image.img}
                                        className="absolute rounded-chart-left carousel-img"
                                        style={{
                                        width: '100%'
                                    }}
                                        alt={image.title}/>
                                </div>
                            )
                        })}
                        <div className={'prev-control'}  onClick={() => plusSlides(-1)}>
                            <span className="prev">&#10094;</span>
                        </div>
                        <div className={'next-control'}  onClick={() => plusSlides(1)}>
                            <span id="nextMob" className="next">&#10095;</span>
                        </div>
                    </div>
                    <div className="content-container rounded-chart-right shadow">
                        <div className="title-container">

                            <h2
                                style={{
                                fontWeight: 400,
                                color: "#355e3b"
                            }}>
                                La vida es nuestra prioridad</h2>
                            <h2>
                                <b>Cumplimos con los protocolos de bioseguridad</b>
                            </h2>

                        </div>

                        <div className={'carousel-info'}>
                            <p>
                                {images[slideIndex] ? images[slideIndex].description : ""}
                            </p>
                        </div>
                        <div className="dot-container text-center">
                            {images.map((image, index) => {
                                return (
                                    <span key={index} className={classNames("dot relative shadow", {'caroussel-active' : slideIndex === index})} 
                                        onClick={() => currentSlide(index)}>
                                        <i className={image.icon}></i>
                                    </span>
                                )

                                })
                            }
                        </div>
                    </div>
                </div>

                {/* <div className={'noticias-bottom'}>

                    <img src={BackBottom} alt={''}/>

                </div> */}

            </section>
        </Fragment>
    )
}