import React, {Fragment, useEffect, useState} from 'react'
import './carouselStyle.css';
import './../../css/flaticon.css';
import Img1 from './../../assets/img/Covid/1.jpg';
import Img2 from './../../assets/img/Covid/2.png';
import Img3 from './../../assets/img/Covid/3.png';
import Img4 from './../../assets/img/Covid/4.png';
import Img5 from './../../assets/img/Covid/5.jpg';
// import * as firebase from 'firebase';
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


    const [slideIndex,
        setSlideIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const [clicked, setClicked] = useState(false);

    const images = [
        {
            img: Img1,
            title: 'Para nuestro equipo',
            subtitle: 'Tu tiempo es valioso',
            icon: 'flaticon-prevention',
            description: 'Por eso reducimos el tiempo de espera para que seas atentido por nuestros médicos',
        }, {
            img: Img2,
            title: 'Trabajamos con dedicación',
            icon: 'flaticon-documents',
            subtitle: 'Para ofrecerte el mejor servicio',
            description: 'Facilitamos el acceso a los resultados ingresando a nuestra web.',
        }, {
            img: Img3,
            title: 'Velamos por la salud',
            subtitle: 'Y seguridad en el trabajo',
            icon: 'flaticon-affection',
            description: 'Nuestros servicios médicos se enfocan en la detección temprana de enfermedades laborales',
        }, {
            img: Img4,
            title: 'Estamos a la vanguardia',
            icon: 'flaticon-washing-hands',
            subtitle: 'Con tecnología avanzada',
            description: 'Que nos permite brindar veracidad y confianza en la obtención de resultados, además de captar los datos del trabajador con rapidez y precisión.',
        }, {
            img: Img5,
            title: 'Nuestra atención es humanizada',
            subtitle: 'Y nuestros servicios especializados',
            icon: 'flaticon-footprints',
            description: 'En DESAT contamos con los recursos y la experiencia para velar por la salud y seguiridad de los empleados de tu empresa.',
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
            if(n < images.length-1) {
                setSlideIndex(slideIndex => slideIndex = slideIndex + 1)
                showSlides(slideIndex + 1);
            } else {
                showSlides(0)
            }
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
    }

    const pause = () => {
        setPaused(true);
    }

    const resume = () => {
        setPaused(false);
    }

    useEffect(() => {
        if(!paused){
            if (clicked) {
                setTimeout(() => {
                    setClicked(false)
                }, 2000);
            } else {
            if(!clicked){
                setTimeout(() => {
                    if(slideIndex < images.length-1 && slideIndex > -1) {
                        plusSlides(1)
                    } else if (slideIndex === images.length-1) {
                        setSlideIndex(slideIndex => slideIndex = 0)
                    }
                }, 2000)
            }
            }
        }
    },[slideIndex, clicked, paused])

    const classNames = require('classnames')

    return (
        <Fragment>
            <section id={'Noticias'}>
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
                                    <div
                                        className="absolute rounded-chart-left carousel-img"
                                        style={{
                                        backgroundImage: `url(${image.img})`,
                                        backgroundSize: '100%',
                                        backgroundRepeat: 'no-repeat'
                                        }}>
                                    </div>
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
                    <div className="content-container rounded-chart-right shadow" onMouseEnter={pause} onMouseLeave={resume}>
                        <div className={'carousel-info-content'}>
                            <div className="title-container">

                                <h2
                                    style={{
                                    fontWeight: 400,
                                    color: "#355e3b"
                                }}>
                                    {images[slideIndex]?.title}</h2>
                                <h2>
                                    <b>{images[slideIndex]?.subtitle}</b>
                                </h2>

                            </div>

                            <div className={'carousel-info'}>
                                <p>
                                    {images[slideIndex] ? images[slideIndex].description : ""}
                                </p>
                            </div>
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
            </section>
        </Fragment>
    )
}