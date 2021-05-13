import React, {Fragment, useEffect, useState} from 'react';

export default function AboutCounter (props) {

        const [number, setNumber] = useState(0);
        const [startCounting, setStartCounting] = useState(false)
        const limit = 12310;
        useEffect(()=> {
            if(startCounting){
                if(number < limit) {
                    setTimeout(() => {
                        setNumber(prev => prev = prev + Math.ceil(Math.random()*250))
                    }, 10);
                }
            }
        },[number, startCounting])

        const scrolled = () => {
            if(window.scrollY > 300){
                setStartCounting(true);
            }
        }

        window.addEventListener('scroll', scrolled)
        return (
            <Fragment>
            <section id={'aboutCounter'}>
                    <div className={'counter-container'}>
                        <div className={'counter-title'}>
                            <h2 className={'mont green'}>Hemos realizado</h2>
                        </div>
                        <div className={'counter-numbers'}>
                                <h1 className={'mont dark-green'}>{number}</h1>
                        </div>
                        <div className={'counter-subtitle'}>
                            <h2 className={'mont green'}>Exámenes medicos</h2>
                            
                        </div>
                    </div>
            </section>
        </Fragment>
    );

}