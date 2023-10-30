import React, {useState} from 'react';
import {Fragment} from 'react';
import Main from './../../assets/img/About/0.jpg';
import c1 from './../../assets/img/About/1.jpg';
import c2 from './../../assets/img/About/2.jpg';
import c3 from './../../assets/img/About/3.jpg';
import c4 from './../../assets/img/About/4.jpg';
import c5 from './../../assets/img/About/5.jpg';
import c6 from './../../assets/img/About/6.jpg';
import c7 from './../../assets/img/About/7.jpg';
import c8 from './../../assets/img/About/8.jpg';
import c9 from './../../assets/img/About/9.jpg';
import Mainx from './../../assets/img/About/compressor/0.jpg';
import c1x from './../../assets/img/About/compressor/1.jpg';
import c2x from './../../assets/img/About/compressor/2.jpg';
import c3x from './../../assets/img/About/compressor/3.jpg';
import c4x from './../../assets/img/About/compressor/4.jpg';
import c5x from './../../assets/img/About/compressor/5.jpg';
import c6x from './../../assets/img/About/compressor/6.jpg';
import c7x from './../../assets/img/About/compressor/7.jpg';
import c8x from './../../assets/img/About/compressor/8.jpg';
import c9x from './../../assets/img/About/compressor/9.jpg';
export default function AboutCollage(props) {
    const classNames = require('classnames');
    const [hover,
        setHover] = useState("");

    const isHover = (id) => {
        setHover(id)
    }

    return (
        <Fragment>
            <div className={'collage-container'}>
                <img className={classNames('collage-img c0')} 
                    alt={'Equipo de trabajo de DESAT IPS'} srcSet={`${Mainx} 768w, ${Main} 1080w`}
                    sizes={`(max-width: 768px) 280px, 1080px`}
                    src={Mainx}/>
                <img className={classNames('collage-img c1')} 
                    alt={'Exámenes médicos escolares, doctora pesando un niño'} srcSet={`${c1x} 768w, ${c1} 1080w`}
                    sizes={`(max-width: 768px) 280px, 1080px`}
                    src={c1x}/>
                <img className={classNames('collage-img c2')} 
                    alt={'Doctora enseñando resultados al paciente'} srcSet={`${c2x} 768w, ${c2} 1080w`}
                    sizes={`(max-width: 768px) 280px, 1080px`}
                    src={c2x}/>
                <img className={classNames('collage-img c3')} 
                    alt={'Consultorio médico, camilla y escritorio'} srcSet={`${c3x} 768w, ${c3} 1080w`}
                    sizes={`(max-width: 768px) 280px, 1080px`}
                    src={c3x}/>
                <img className={classNames('collage-img c4')} 
                    alt={'Cabina de fonoaudilogía, audiometría'} srcSet={`${c4x} 768w, ${c4} 1080w`}
                    sizes={`(max-width: 768px) 280px, 1080px`}
                    src={c4x}/>
                <img className={classNames('collage-img c5')} 
                    alt={'Ventanilla de atención al usuario de institución médica'} srcSet={`${c5x} 768w, ${c5} 1080w`}
                    sizes={`(max-width: 768px) 280px, 1080px`}
                    src={c5x}/>
                <img className={classNames('collage-img c6')} 
                    alt={'Sala de espera de institución médica'} srcSet={`${c6x} 768w, ${c6} 1080w`}
                    sizes={`(max-width: 768px) 280px, 1080px`}
                    src={c6x}/>
                <img className={classNames('collage-img c7')} 
                    alt={'Personas esperando atención médica'} srcSet={`${c7x} 768w, ${c7} 1080w`}
                    sizes={`(max-width: 768px) 280px, 1080px`}
                    src={c7x}/>
                <img className={classNames('collage-img c8')} 
                    alt={'Equipo de protección anti Covid19'} srcSet={`${c8x} 768w, ${c8} 1080w`}
                    sizes={`(max-width: 768px) 280px, 1080px`}
                    src={c8x}/>
                <img className={classNames('collage-img c9')} 
                    alt={'Doctora atentiendo a paciente de Covid19'} srcSet={`${c9x} 768w, ${c9} 1080w`}
                    sizes={`(max-width: 768px) 280px, 1080px`}
                    src={c9x}/>
            </div>
        </Fragment>
    )
}