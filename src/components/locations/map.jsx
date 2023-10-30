import React, {Fragment} from 'react';

export default function Map(props) {

    const classNames = require('classnames');
    const { selected, selectLocation, deleteLocation, getTagPosition } = props;
    return(
        <Fragment>
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            viewBox="0 0 510.2 510.2" style={{enableBackground: "new 0 0 510.2 510.2"}}>
        <g id="Layer_1_1_">
            <g id="BACKGROUND">
            </g>
            <g id="OBJECTS">
                <g>
                    <g>
                        <path className={classNames("st1")} d="M66.1,58.4c-3.7-6.9-5.8,2.8-10,3.7c-1,0.4-1.6,1.3-0.7,2.8c2.6,4.3-6.2,6-3.9,10.1
                            c3.2,3.3-3.1,7.6,0.9,10.9c3.9,6.1-5.5,16.8-0.2,21.8c6.9-3.2,5.3-14.6,9.4-20.7c5.9-3.7-0.3-6.9,2.9-11.4
                            c3.7-2.9-4.7-8.1,0.2-10C71,64.6,71,61.4,66.1,58.4z"/>
                        <path className={classNames("st1")} d="M101.5,66.6c-4.6-1-5.7-11.5-8.7-5.1c-0.1,2.1-1.5,2.4-2.9,2.5c-2.1,0.1-5.3,2-5.3,3.7
                            c1,3.9-4.3,6.8-1.1,10.6c2.5,1.8-1.7,7.6,3,6.7c3-4.8,12.8-5,13.2-10.9C98.4,71.3,99.2,69,101.5,66.6z"/>
                        <path className={classNames("st1")} d="M90.7,57.9c2.1-1.1,1-3.4-0.6-3.7C86.4,54.3,86.9,60,90.7,57.9z"/>
                    </g>
                    <path className={classNames("st1")} d="M422.2,325.6l7.3-0.6c-4.4-1.2,10.9-12,13.5-11.4c1.6,3.7-1.8,8.1,2.8,10.5c7.2,3.4,1.2,22.2,9.2,20.6
                        c10.3-0.1,0.5-7.6,2.7-13.5c-0.7-4.3-4.8-7.6-4.8-12.3c-0.3-3.3-5-4.9-3.9-9c-1.4-3.1-6.8-4-7.4-8.4c-0.2-4.1-4.5-0.3-5.5-3.4
                        c-0.1-5.1-5.6-1.3-7.3-4.4c5.5-4.7,9.7-10.9,14.9-15.4c0.2-6.3-7.6-8-7.5-14.4c-5-7.6-10-19.2-7.5-30c-1.7-25.6,3.1-10,5.8-25.7
                        c0.4-5.1,8.2-9.7,4.5-15.4c-1.1-3.5-4.8-0.4-6.8-3.1c-5.7-4-9.4,4.9-16,2.6c-6.1,1.7-13.5,3-20.1,1.5c-6.1-3.3-12.3,6-17.4-0.2
                        c-8.7-6.6-14.3-24.4-26.1-23.3c-5.4,1.3-10.1-7.9-15.7-2.8c-1.8,2-4.8,1.3-7,2c-1.6,2.4-3.3,1.2-5,0.3c-7-1.9-14-1.4-21.6-1.2
                        c-2.1-0.1-3.3-1.8-3.4-3.9c0.9-14-9.5-0.4-12.1-17.1c-4.7-9.8,5.5-2,4.2-16.3c-0.2-2.3-3.8-3.1-3.8-5.9
                        c-7.1-6.6-3.7-19.3-12.9-19.1c-1.5-3.8-1.4-3.8-5.1-1.7c-2,0.8-6.6,0-4.5-2.8c2.9-5,3.1-11,8.4-14.6c1.1-1,1.6-1.8,0.6-3.4
                        c-1.3-5.2,0.7-13.5,3.9-17.3c7.5-11.1,5.3-15.7,18-23c3-11.8,13-15,23.4-18c2.4,0,0.7-2.9,2.5-4.1c1.1-0.3,2.6,0.9,4-0.6
                        c3.2-2.9-1.6-4.6-1.2-7.6c-0.2-4.9-6.7-2.4-8.7-6.1c-3.7-3.3-4.1,4.3-8.1,3.4c-3.7,3.5-5,0.6-6.5,3.8c-2.8-2.6-6.7-0.2-5.4,3.4
                        c-0.1,9.6-13.7,8-18.6,14c-4.6,3.5-9,8.9-14.9,9.6c-4.3-1.6-8.7,3.6-12.3,0.5c-1.4-1.3-2.9-1.4-4.2-0.5c-3.9,1-8-5.1-8.7,2.3
                        c-0.6,8.5-11.9,7.9-17.1,4.3c-6.4-1.9-7.3,8.1-14.1,7.5c-3.7,2.9-10,8.8-8.3,13.9c0.7,2.9-2.1,4-3.5,5.6c4.3-0.4,2.4,3.2,1.2,5.6
                        c-0.8,1.5-1.2,3.2,0,4.7c2,3.1-2.6,5.3-1.7,8.7c-0.1,5.4-6.2,1-8.1,5c-7.1,9-17.2,18.7-28.3,21.9c-6.5,0.6,14.6,15,8.1,20.2
                        c-5.1-1.2-10.9-0.6-7.4-5.4c-3.9-4.1-9.6-7.3-12.5-12.5c-1-4.4-9.2-0.4-6.1,3.1c11.2,12.1,7.9,21.2-4,27.9
                        c-2.2-1.7-5-2.2-5.1,1.6c-2.5,2.8-7.6,3.7-3.3,7.9c2.1,4.6,9,6.6,8.5,12.1c-1.4,4.3,4.4,1.8,5.3,5c4.3,7.1-0.3,15.1,4.1,22
                        c5.4,7-12.6,9.4-6.6,13c3,0.6,4.3,6.1,3.3,9c-1.8,2.6,2.2,3.6,1.1,6.2c-1.4,4.1,4.9,5.4,2.3,9c-2.5,2.7-0.1,7.4-3.9,9.2
                        c-5.9,2.3-3.1,8,0.1,11.5c2.3-2,3.5-5.6,6.3-1.3c-6.7,5.9,2.7,3.1,3.9,6.1c0.8,2-1.1,2.3-2.5,3.1c0.6,5.2-5.5,3.9-6.8,7.9
                        c-0.6,1-0.6,2-2.2,2.4c-3.4,2.3-1.9,9-6.8,10.5c-6.4,11.5,0.4,4.5-12.6,12.1c-1.4-1.5-2.9-5.3-4.3-1.5c-0.6,3.3-3.4,3.5-5.2,1.2
                        c-2.9-0.1-2.6,3.5-4.3,4.5c-1.6,0-2.3,0.9-2.2,2.3c0.9,9.1,5.9,5.5-1.1,14.5c3.5,8-9.3-2.2-11.1,8.6c3.1,4.3,9.4,5.3,11,10.8
                        c0.5,1.1,1,2.3,2.5,1.9c6.8,0.3,9.9,7.6,17.1,8.4c3.3,4.1,10.2-0.3,11.9,4.5c-0.3,3.6,5.5,3.5,4.9,6.7c0.8,6.2,8.9,3.5,12.9,4.4
                        c3.5,2.1,7.1,3.9,11.5,2.1c15.1,2.8,7.3-9.7,21.3,1.9c3.9,7.4,6.9,0.4,9.8,5c0.4,1,1,1.8,2.2,1.7c4.4,0.5,5.3,7,11.1,3.6
                        c4.4-2.7,6.7,3.2,10.8,2.6c5.6-0.7,5.3,5.1,8.4,7.3c7.1,5.4,2.1,18.9,13.8,18.5c3.6-0.8,3.4,4.5,7,4c0.7-0.1,1.4,0.8,2,1.3
                        c5.5,3.5,8.3,5.2,5.9,13.2c0.4,8,14.4,0,11.8,10.9c0,2.1-0.9,5.9,1.4,6.9c8.1,6,16,5.1,26.1,3.6c6.8,0.4,10.3-7.7,16.3-7.1
                        c3.4,5.4,9.2,2.6,14,4.2c2.4,1.7,3.9,1.5,5.9-0.3c3.4-5.9,6.7,0.4,10.4,1.4c5.1,0.9,7.8,6.9,14,7.5c12.3,7.4-13,25.6-15.3,36.1
                        c15,1.4,13.3-4.3,23,12c6.8-30.8,13.8-63.1,16.4-94.8c-1-3.8-8.9-6.9-6.2-11.5c1.9-3.7-3.6-8.4-6.4-9.7c-2.3,0.7-2.6-1.2-3.7-2.3
                        c-5-5.5-1.1-14.4-2.2-21.3c0.1-3.4,5.5-2.9,7.3-5.6c9.8-0.8,5.6-4.7,15.8,2.1c5.4-2,2.7-8.3,1.1-12.9c0.6-3-17-3.1-17.6-1.6
                        c-0.4-4.8-4-17.7,1.7-19.5c3,0.2,5.6-5.3,8.3-2.3C392.1,332.7,407,324.8,422.2,325.6z"/>
                </g>
                
            </g>
                {/* CIRCULOS */}
            <circle onMouseEnter={() => selectLocation("Acacías")} onMouseLeave={deleteLocation} className={classNames("location", selected === "Acacías" ? "st3" : "st2")} cx="252.3" cy="259.4" r={selected === "Acacías" ? "4" : "2"}/>
            <circle onMouseEnter={() => selectLocation("Florencia")} onMouseLeave={deleteLocation} className={classNames("location", selected === "Florencia" ? "st3" : "st2")} cx="197.3" cy="331.1" r={selected === "Florencia" ? "4" : "2"}/>
            <circle onMouseEnter={() => selectLocation("Espinal Tolima")} onMouseLeave={deleteLocation}className={classNames("location", selected === "Espinal Tolima" ? "st3" : "st2")} cx="216.3" cy="255.1" r={selected === "Espinal Tolima" ? "4" : "2"}/>
            <circle onMouseEnter={() => selectLocation("Girardot")} onMouseLeave={deleteLocation} className={classNames("location", selected === "Girardot" ? "st3" : "st2")} cx="222.4" cy="249.9" r={selected === "Girardot" ? "4" : "2"}/>
            <circle onMouseEnter={() => selectLocation("Yopal")} onMouseLeave={deleteLocation} className={classNames("location", selected === "Yopal" ? "st3" : "st2")} cx="292.9" cy="219.2" r={selected === "Yopal" ? "4" : "2"}/>
            <circle onMouseEnter={() => selectLocation("Bucaramanga")} onMouseLeave={deleteLocation} className={classNames("location", selected === "Bucaramanga" ? "st3" : "st2")} cx="267.7" cy="165.9" r={selected === "Bucaramanga" ? "5.6" : "3.6"}/>
            <circle onMouseEnter={() => selectLocation("Arauca")} onMouseLeave={deleteLocation} className={classNames("location", selected === "Arauca" ? "st3" : "st2")} cx="340.5" cy="173.3" r={selected === "Arauca" ? "4" : "2"}/>
            <ellipse onMouseEnter={() => selectLocation("Villavicencio")} onMouseLeave={deleteLocation} transform="matrix(0.1602 -0.9871 0.9871 0.1602 -33.6486 467.7762)" className={classNames("location", selected === "Villavicencio" ? "st3" : "st2")} cx="258.1" cy="253.7" rx={selected === "Villavicencio" ? "4" : "2"} ry={selected === "Villavicencio" ? "4" : "2"}/>
            <circle onMouseEnter={() => selectLocation("Mocoa")} onMouseLeave={deleteLocation} className={classNames("location", selected === "Mocoa" ? "st3" : "st2")} cx="164.5" cy="346.4" r={selected === "Mocoa" ? "5.6" : "3.6"}/>
            <circle onMouseEnter={() => selectLocation("Pasto")} onMouseLeave={deleteLocation} className={classNames("location", selected === "Pasto" ? "st3" : "st2")} cx="145" cy="344.1" r={selected === "Pasto" ? "5.6" : "3.6"}/>
            <circle onMouseEnter={() => selectLocation("Ibagué")} onMouseLeave={deleteLocation} className={classNames("location", selected === "Ibagué" ? "st3" : "st2")} cx="206.7" cy="249.1" r={selected === "Ibagué" ? "5.6" : "3.6"}/>
            <circle onMouseEnter={() => selectLocation("Cartagena")} onMouseLeave={deleteLocation} className={classNames("location", selected === "Cartagena" ? "st3" : "st2")} cx="205.9" cy="72.6" r={selected === "Cartagena" ? "5.6" : "3.6"}/>
            <circle onMouseEnter={() => selectLocation("Cúcuta")} onMouseLeave={deleteLocation} className={classNames("location", selected === "Cúcuta" ? "st3" : "st2")} cx="276.6" cy="143.2" r={selected === "Cúcuta" ? "5.6" : "3.6"}/>
            <circle onMouseEnter={() => selectLocation("Buenaventura")} onMouseLeave={deleteLocation} className={classNames("location", selected === "Buenaventura" ? "st3" : "st2")} cx="155.3" cy="259.4" r={selected === "Buenaventura" ? "4" : "2"}/>
            <circle onMouseEnter={() => selectLocation("Manizales")} onMouseLeave={deleteLocation} className={classNames("location", selected === "Manizales" ? "st3" : "st2")} cx="196.8" cy="227.3" r={selected === "Manizales" ? "4" : "2"}/>
            <circle onMouseEnter={() => selectLocation("Duitama")} onMouseLeave={deleteLocation} className={classNames("location", selected === "Duitama" ? "st3" : "st2")} cx="276.5" cy="204" r={selected === "Duitama" ? "4" : "2"}/>
            <circle onMouseEnter={() => selectLocation("Tunja")} onMouseLeave={deleteLocation} className={classNames("location", selected === "Tunja" ? "st3" : "st2")} cx="263.4" cy="212.2" r={selected === "Tunja" ? "5.6" : "3.6"}/>
            <circle onMouseEnter={() => selectLocation("Sogamoso")} onMouseLeave={deleteLocation} className={classNames("location", selected === "Sogamoso" ? "st3" : "st2")} cx="272.7" cy="220.1" r={selected === "Sogamoso" ? "4" : "2"}/>
            <circle onMouseEnter={() => selectLocation("Pereira")} onMouseLeave={deleteLocation} className={classNames("location", selected === "Pereira" ? "st3" : "st2")} cx="190.8" cy="234.9" r={selected === "Pereira" ? "4" : "2"}/>
            <circle onMouseEnter={() => selectLocation("Barrancabermeja")} onMouseLeave={deleteLocation} className={classNames("location", selected === "Barrancabermeja" ? "st3" : "st2")} cx="248.8" cy="168.4"  r={selected === "Barrancabermeja" ? "4" : "2"}/>
            <circle onMouseEnter={() => selectLocation("Rioacha")} onMouseLeave={deleteLocation} className={classNames("location", selected === "Rioacha" ? "st3" : "st2")} cx="279.8" cy="39.8" r={selected === "Rioacha" ? "4" : "2"}/>
            <circle onMouseEnter={() => selectLocation("Barrancas")} onMouseLeave={deleteLocation} className={classNames("location", selected === "Barrancas" ? "st3" : "st2")} cx="275.2" cy="56.3" r={selected === "Barrancas" ? "4" : "2"}/>
            <circle onMouseEnter={() => selectLocation("Armenia")} onMouseLeave={deleteLocation} className={classNames("location", selected === "Armenia" ? "st3" : "st2")} cx="193.8" cy="244" r={selected === "Armenia" ? "4" : "2"}/>
            <circle onMouseEnter={() => selectLocation("Neiva")} onMouseLeave={deleteLocation} className={classNames("location", selected === "Neiva" ? "st3" : "st2")} cx="208.4" cy="293.2" r={selected === "Neiva" ? "15.5" : "11.5"}/>
            <ellipse onMouseEnter={() => selectLocation("Aguachica")} onMouseLeave={deleteLocation} transform="matrix(0.1602 -0.9871 0.9871 0.1602 81.459 363.911)" className={classNames("location", selected === "Aguachica" ? "st3" : "st2")} cx="254.6" cy="134.1" rx={selected === "Aguachica" ? "4" : "2"} ry={selected === "Aguachica" ? "4" : "2"}/>
            <circle onMouseEnter={() => selectLocation("Valledupar")} onMouseLeave={deleteLocation} className={classNames("location", selected === "Valledupar" ? "st3" : "st2")} cx="265.1" cy="67.6" r={selected === "Valledupar" ? "4" : "2"}/>
            <circle onMouseEnter={() => selectLocation("Apartado")} onMouseLeave={deleteLocation} className={classNames("location", selected === "Apartado" ? "st3" : "st2")} cx="168.4" cy="145.3" r={selected === "Apartado" ? "4" : "2"}/>
            <circle onMouseEnter={() => selectLocation("Barranquilla")} onMouseLeave={deleteLocation} className={classNames("location", selected === "Barranquilla" ? "st3" : "st2")} cx="219.2" cy="56.1" r={selected === "Barranquilla" ? "5.6" : "3.6"}/>
            <circle onMouseEnter={() => selectLocation("Santa Marta")} onMouseLeave={deleteLocation} className={classNames("location", selected === "Santa Marta" ? "st3" : "st2")} cx="244.2" cy="50.6" r={selected === "Santa Marta" ? "5.6" : "3.6"}/>
            <circle onMouseEnter={() => selectLocation("San Andrés")} onMouseLeave={deleteLocation} className={classNames("location", selected === "San Andrés" ? "st3" : "st2")} cx="57.8" cy="75.3" r={selected === "San Andrés" ? "4" : "2"}/>
            <circle onMouseEnter={() => selectLocation("Puerto Boyacá")} onMouseLeave={deleteLocation} className={classNames("location", selected === "Puerto Boyacá" ? "st3" : "st2")} cx="233.4" cy="202" r={selected === "Puerto Boyacá" ? "4" : "2"}/>
            <circle onMouseEnter={() => selectLocation("Montelíbano")} onMouseLeave={deleteLocation} className={classNames("location", selected === "Montelíbano" ? "st3" : "st2")} cx="204.9" cy="139.1" r={selected === "Montelíbano" ? "4" : "2"}/>
            <circle onMouseEnter={() => selectLocation("Montería")} onMouseLeave={deleteLocation} className={classNames("location", selected === "Montería" ? "st3" : "st2")} cx="187.3" cy="116.9" r={selected === "Montería" ? "4" : "2"}/>
            <circle onMouseEnter={() => selectLocation("Sincelejo")} onMouseLeave={deleteLocation} className={classNames("location", selected === "Sincelejo" ? "st3" : "st2")} cx="202.3" cy="103.4" r={selected === "Sincelejo" ? "4" : "2"}/>
            <circle onMouseEnter={() => selectLocation("Tulua")} onMouseLeave={deleteLocation} className={classNames("location", selected === "Tulua" ? "st3" : "st2")} cx="183.1" cy="253.7" r={selected === "Tulua" ? "4" : "2"}/>
            <circle onMouseEnter={() => selectLocation("Cali")} onMouseLeave={deleteLocation} className={classNames("location", selected === "Cali" ? "st3" : "st2")} cx="168.6" cy="276.1" r={selected === "Cali" ? "5.6" : "3.6"}/>
            <circle onMouseEnter={() => selectLocation("Popayán")} onMouseLeave={deleteLocation} className={classNames("location", selected === "Popayán" ? "st3" : "st2")} cx="165.2" cy="306.4" r={selected === "Popayán" ? "5.6" : "3.6"}/>
            <circle onMouseEnter={() => selectLocation("Buga")} onMouseLeave={deleteLocation} className={classNames("location", selected === "Buga" ? "st3" : "st2")} cx="180.2" cy="261.7" r={selected === "Buga" ? "4" : "2"}/>
            <circle onMouseEnter={() => selectLocation("Palmira")} onMouseLeave={deleteLocation} className={classNames("location", selected === "Palmira" ? "st3" : "st2")} cx="177.9" cy="272.2" r={selected === "Palmira" ? "4" : "2"}/>
                {/* NEIVA */}
            {/* <g>
                <path className={classNames("st2")} d="M224.9,303.6v-8.9h1.3l2.8,4.5c0.7,1,1.2,2,1.6,2.9l0,0c-0.1-1.2-0.1-2.3-0.1-3.6v-3.7h1.1v8.9h-1.2l-2.8-4.5
                    c-0.6-1-1.2-2-1.7-3l0,0c0.1,1.1,0.1,2.2,0.1,3.7v3.8L224.9,303.6L224.9,303.6z"/>
                <path className={classNames("st2")} d="M234.1,300.7c0,1.6,1,2.2,2.2,2.2c0.8,0,1.3-0.1,1.8-0.3l0.2,0.8c-0.4,0.2-1.1,0.4-2.1,0.4
                    c-2,0-3.1-1.3-3.1-3.2c0-1.9,1.1-3.4,3-3.4c2.1,0,2.6,1.8,2.6,3c0,0.2,0,0.4,0,0.5L234.1,300.7L234.1,300.7z M237.5,299.8
                    c0-0.7-0.3-1.9-1.6-1.9c-1.2,0-1.7,1.1-1.8,1.9H237.5z"/>
                <path className={classNames("st2")} d="M241.4,295.5c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
                    C241.1,294.7,241.4,295.1,241.4,295.5z M240.1,303.6v-6.4h1.2v6.4H240.1z"/>
                <path className={classNames("st2")} d="M243.6,297.3l1.3,3.6c0.2,0.6,0.4,1.1,0.5,1.6h0c0.1-0.5,0.3-1.1,0.5-1.6l1.2-3.6h1.2l-2.5,6.4h-1.1l-2.4-6.4
                    H243.6z"/>
                <path className={classNames("st2")} d="M253,303.6l-0.1-0.8h0c-0.4,0.5-1,0.9-1.9,0.9c-1.3,0-1.9-0.9-1.9-1.8c0-1.5,1.4-2.4,3.8-2.4v-0.1
                    c0-0.5-0.1-1.5-1.4-1.5c-0.6,0-1.2,0.2-1.7,0.5l-0.3-0.8c0.5-0.3,1.3-0.6,2.1-0.6c1.9,0,2.4,1.3,2.4,2.6v2.4c0,0.5,0,1.1,0.1,1.5
                    L253,303.6L253,303.6z M252.8,300.4c-1.3,0-2.7,0.2-2.7,1.4c0,0.7,0.5,1.1,1.1,1.1c0.8,0,1.4-0.5,1.5-1.1c0-0.1,0.1-0.3,0.1-0.4
                    L252.8,300.4L252.8,300.4z"/>
            </g> */}
            <path className={classNames("st3")} d="M-225.7,406.3c3.6-1.3,7.8-2.9,11.8-4.8c1.6-0.7,3.1-1.7,4.6-2.5c-6.7,0-13.4,0-20,0.1l-205.6,1.8l205.5,5.3
                L-225.7,406.3z"/>
                {/* DESAT */}
            <g>
                <path className={classNames("st4")} d="M207.7,295C207.6,295,207.6,295,207.7,295c-0.1-0.2-0.1-0.3-0.1-0.4c0,0,0,0,0-0.1c0.1,0,0.2,0,0.3-0.1
                    c0.1,0,0.2,0,0.3-0.1c0,0,0.1,0,0.1,0c0,0,0,0,0,0c0,0.1,0,0.1,0,0.2c0,0.1,0,0.2,0.1,0.3c0,0,0.1,0.1,0.1,0.1
                    c0.1,0.1,0.2,0.2,0.3,0.2c0.2,0.1,0.4,0.1,0.5,0c0.1,0,0.1,0,0.2-0.1c0.1-0.1,0.2-0.1,0.3-0.2c0,0,0,0,0.1-0.2c0-0.2,0-0.3,0-0.5
                    c0-0.1-0.1-0.3-0.2-0.3c-0.1-0.1-0.2-0.1-0.3-0.2c-0.1-0.1-0.3-0.1-0.4-0.2c-0.1,0-0.2-0.1-0.3-0.1c-0.2-0.1-0.4-0.2-0.5-0.3
                    c-0.2-0.2-0.3-0.4-0.4-0.6c0-0.1,0-0.2,0-0.2c0-0.1,0-0.3,0-0.4c0-0.1,0.1-0.3,0.2-0.4c0.1-0.2,0.3-0.3,0.4-0.4
                    c0.2-0.1,0.4-0.2,0.6-0.2c0.2,0,0.4,0,0.6,0c0.1,0,0.3,0.1,0.4,0.2c0.2,0.1,0.3,0.3,0.4,0.4c0,0.1,0.1,0.1,0.1,0.2c0,0,0,0,0,0
                    c-0.1,0.1-0.3,0.2-0.4,0.3c0,0-0.1,0-0.1,0.1c0,0,0,0,0,0c0-0.1-0.1-0.1-0.1-0.2c-0.1-0.1-0.1-0.1-0.2-0.2c-0.1,0-0.1-0.1-0.2-0.1
                    c-0.1,0-0.2,0-0.2,0c-0.2,0-0.3,0-0.4,0.1c-0.1,0.1-0.2,0.2-0.2,0.3c0,0.2,0,0.3,0.1,0.5c0.1,0.1,0.2,0.2,0.4,0.2
                    c0.2,0.1,0.4,0.2,0.6,0.2c0.2,0.1,0.4,0.2,0.6,0.3c0.1,0.1,0.2,0.2,0.3,0.4c0.1,0.1,0.1,0.3,0.1,0.4c0,0.1,0,0.1,0,0.2
                    c0,0.1,0,0.2,0,0.3c0,0.1,0,0.2-0.1,0.3c-0.1,0.1-0.1,0.3-0.2,0.4c-0.1,0.1-0.3,0.3-0.4,0.4c-0.1,0.1-0.2,0.1-0.3,0.1
                    c-0.1,0-0.2,0-0.3,0.1c-0.1,0-0.1,0-0.2,0c-0.3,0-0.6-0.1-0.8-0.2c-0.1-0.1-0.3-0.2-0.4-0.3c-0.1-0.1-0.1-0.2-0.2-0.2
                    C207.7,295.2,207.7,295,207.7,295z"/>
                <path className={classNames("st4")} d="M203.2,293.3c0-0.1,0-0.1,0-0.2c0-0.3-0.2-0.6-0.3-0.9c-0.1-0.1-0.1-0.2-0.2-0.3c-0.1-0.1-0.3-0.3-0.4-0.4
                    c-0.1-0.1-0.3-0.2-0.4-0.2c-0.3-0.1-0.6-0.2-0.9-0.2c-0.1,0-0.1,0-0.2,0c-0.1,0-0.2,0-0.3,0c-0.3,0-0.6,0-1,0
                    c-0.1,0-0.1,0-0.1,0.1c0,0.3,0,0.6,0,0.9c0,0.4,0,0.8,0,1.3l0,2.6c0,0.1,0,0.1,0.1,0.1c0.2,0,0.4,0,0.6,0c0.3,0,0.5,0,0.8,0
                    c0,0,0.1,0,0.1,0c0.1,0,0.3,0,0.4,0c0.3,0,0.5-0.1,0.7-0.3c0.1,0,0.1-0.1,0.2-0.1c0.1-0.1,0.2-0.2,0.3-0.3c0,0,0.1-0.1,0.2-0.2
                    c0.1-0.1,0.2-0.3,0.3-0.5c0.1-0.1,0.1-0.2,0.1-0.3c0.1-0.2,0.1-0.4,0.1-0.7C203.2,293.4,203.2,293.4,203.2,293.3z M202.4,294.1
                    c-0.1,0.3-0.3,0.6-0.6,0.8c-0.1,0.1-0.2,0.1-0.3,0.2c-0.1,0-0.2,0.1-0.3,0.1c-0.1,0-0.2,0-0.3,0.1c-0.2,0-0.4,0-0.6,0
                    c0,0,0,0-0.1,0c0,0,0,0,0,0c0,0,0,0,0-0.1V295c0-0.1,0-0.3,0-0.4c0-0.1,0-0.2,0-0.3c0-0.4,0-0.9,0-1.3c0-0.4,0-0.8,0-1.2
                    c0,0,0,0,0-0.1c0,0,0,0,0,0c0,0,0,0,0,0c0.2,0,0.3,0,0.5,0c0.3,0,0.5,0.1,0.8,0.2c0.2,0.1,0.4,0.2,0.6,0.4
                    c0.2,0.2,0.3,0.4,0.3,0.7c0,0.1,0,0.2,0,0.3C202.5,293.6,202.5,293.9,202.4,294.1L202.4,294.1z"/>
                <path className={classNames("st3")} d="M214.2,294.8l-0.3,0l-0.1,0c0,0-0.1,0-0.1,0c-0.1,0-0.2,0.1-0.2,0.2l-0.1,0.3l-0.2,0.8l-0.3-2.6
                    c-0.1-1-0.2-1.9-0.4-2.9c0-0.1-0.1-0.1-0.1-0.1c-0.1,0-0.1,0-0.1,0.1l-0.6,4.9l-0.2-0.5v0c0,0-0.1-0.1-0.1-0.1l-1.3,0l-1-0.9l0,0
                    c0,0,0,0,0,0c-0.1,0-0.1,0-0.2,0c0,0,0,0,0,0l-0.4,0.6l-0.2,0.3l-0.1,0.1l-0.1,0.1c0,0,0,0,0,0c0,0-0.1,0-0.1,0h-0.2l-0.3,0
                    l-0.7,0l-2.7,0c-0.4,0-0.9,0-1.3,0c0,0,0,0,0,0c0,0-0.1,0.1-0.1,0.1c0.5,0,1,0,1.5,0l2.7,0l0.7,0l0.3,0l0.2,0c0.1,0,0.2,0,0.2-0.1
                    c0,0,0.1-0.1,0.1-0.1l0.1-0.1l0.1-0.1l0.2-0.3l0.3-0.4l0.9,0.9c0,0,0.1,0,0.1,0h0l1.2,0l0.4,0.9c0,0.1,0.1,0.1,0.2,0.1
                    c0,0,0.1-0.1,0.1-0.1l0.5-4.5c0.1,0.7,0.2,1.3,0.3,2l0.4,2.9v0c0,0,0,0.1,0.1,0.1c0,0,0.1,0,0.1-0.1l0.3-1.1l0.1-0.3
                    c0-0.1,0.1-0.1,0.2-0.1c0,0,0.1,0,0.1,0l0.1,0L214.2,294.8l2.2,0L214.2,294.8z"/>
                <polygon className={classNames("st4")} points="206.8,291.8 206.8,291.1 204.9,291.1 204.4,291.1 204.2,291.1 204.2,296 204.4,296 204.9,296 
                    206.8,296 206.8,295.2 204.9,295.2 204.9,293.7 206.8,293.7 206.8,293 204.9,293 204.9,291.8 		"/>
                <polygon className={classNames("st4")} points="216.5,291.1 215.3,291.1 214.6,291.1 213.5,291.1 213.5,291.8 214.6,291.8 214.6,296 215.3,296 
                    215.3,291.8 216.5,291.8 		"/>
            </g>
            <circle className={classNames("st3")} cx="595.1" cy="340.6" r="9"/>
        </g>
        </svg>

        </Fragment>
    )
}