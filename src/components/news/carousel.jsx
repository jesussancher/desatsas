import React, {Fragment, useEffect, useState} from 'react'
import './carouselStyle.css'
export default function Carousel() {

    const [slideIndex,
        setSlideIndex] = useState(0);
    const images = [
        {
            img: 'assets/img/Covid/1.jpg',
            title: 'Covid',
            icon: 'Covid'
        }, {
            img: 'assets/img/Covid/2.jpg',
            title: 'Covid2',
            icon: 'Covid'
        }, {
            img: 'assets/img/Covid/3.jpg',
            title: 'Covid3',
            icon: 'Covid'
        }, {
            img: 'assets/img/Covid/4.jpg',
            title: 'Covid4',
            icon: 'Covid'
        }, {
            img: 'assets/img/Covid/5.jpg',
            title: 'Covid5',
            icon: 'Covid'
        }, {
            img: 'assets/img/Covid/6.jpg',
            title: 'Covid6',
            icon: 'Covid'
        }, {
            img: 'assets/img/Covid/7.jpg',
            title: 'Covid7',
            icon: 'Covid'
        }
    ]

    // var myTimer;

    // NEXT AND PREVIOUS CONTROL
    function plusSlides(n) {
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
        setSlideIndex(n);
    }

    const showSlides = (n) => {
        const slides = images;
        if (n > slides.length-1) {
            setSlideIndex(slideIndex => slideIndex = 0)
        }
        if (n < 1) {
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
        setTimeout(() => {
            if(slideIndex < images.length-1 && slideIndex > 0) {
                plusSlides(1)
            }
            if (slideIndex === images.length-1) {
                setSlideIndex(slideIndex => slideIndex = 0)
            } else if (slideIndex === 0) {
                setSlideIndex(slideIndex => slideIndex = 1)
            }
        }, 4000)
    },[slideIndex, images])

    const classNames = require('classnames')

    return (
        <Fragment>
            <section id={'Noticias'}>

            <div className="relative w-100">

                <div id="carousel" className="content relative mb-30 row w-100">

                    <div
                        className="slideshow-container rounded-chart-left relative col-lg-6 shadow">
                        {images.map((image, index) => {
                            return (
                                <div
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

                        <span className="prev" onClick={() => plusSlides(-1)}>&#10094;</span>
                        <span id="nextMob" className="next" onClick={() => plusSlides(1)}>&#10095;</span>
                    </div>
                    <div className="content-container col-lg-6 rounded-chart-right shadow">
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
                        <div className="dot-container text-center">
                            {images.map((image, index) => {
                                return (
                                    <span className={classNames("dot relative shadow", {'caroussel-active' : slideIndex === index})} 
                                        onClick={() => currentSlide(index)}>
                                        <i className={"color-white " + image.icon}></i>
                                    </span>
                                )

                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </Fragment>
    )
}