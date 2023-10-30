import React, {Fragment, useEffect, useState} from 'react';
import './locations.css';
import { locationsList, locationsCords } from './locationsList.js';
import Map from './map';
export default function Locations (props) {

        const [tagPosition, setTagPosition] = useState({})
        const [list, setList] = useState([])
        const [selected, setSelected] = useState("Neiva");
        const [timeStamp, setTimeStamp] = useState(0);
        const getSelected = (e) => {
                setTimeStamp(prev => prev = 0)
                setSelected(e)
        }
        const selectLocation = (e) => {
            if(e !== selected){
                setTimeStamp(prev => prev = 0)
            }
            getSelected(e)
        }
        const deleteLocation = () => {
            setTimeout(() => {
            }, 1500);
        }
        const getTagPosition = (sel) => {
            const ref = 510.2;
            const def = {top: ((293.2 - 32)/ref)*100 + "%", left: ((208.4 + 10)/ref)*100 + "%"}
            const e = locationsCords[sel] || def
            const type = e.type;
            const y = e.y;
            const x = e.x;
            let top = 0;
            let left = 0;
            switch (type) {
                case 0:
                    top = ((y - 20)/ref)*100 + "%";
                    left = ((x + 5)/ref)*100 + "%";
                    break;
                case 1:
                    top = ((y - 22)/ref)*100 + "%";
                    left = ((x + 6)/ref)*100 + "%";
                    break;
                case 2:
                    top = ((y - 32)/ref)*100 + "%";
                    left = ((x + 10)/ref)*100 + "%";
                    break;
                default:
                    break;
                }
            setTagPosition({top: top, left: left})
            setTimeStamp(0)
        }
        useEffect(() => {
            getTagPosition(selected)
            
        },[selected])
        useEffect(() => {
            getTagPosition("Neiva")
        },[])
        useEffect(() => {
            if(list.length === 0) {
                setList(locationsList);
            }
        },[list])
        useEffect(() => {
            setTimeout(() => {
                if(selected !== "Neiva") {
                    if(timeStamp < 400){
                        setTimeStamp(prev => prev = prev + 1);
                    } else {
                        setSelected("Neiva");
                        setTimeStamp(0)
                    }
                }
            }, 10);
        },[timeStamp,selected])
        return (
            <Fragment>
            <section id={'Cobertura'}>
                    <div className={'location-container'}>
                        <div className={'value-info'}>
                            <div>
                                <div className={'value-title'}>
                                    <h2 className={'mont green'}><b>Tenemos Cobertura Nacional</b></h2>
                                </div>
                                <div className={'value-subtitle'}>
                                    <p className={'mont dark-grey'}>Puedes contar con DESAT donde quiera que te encuentres. Con nuestra red de más de 40 IPS aliadas te cubrimos en todo el territorio nacional.</p>
                                </div>
                                {/* <div className={'location-searcher'}>
                                    <br/>
                                    <label className={'green'}><b>¿En qué ciudad te encuentras?</b></label>
                                    <br/>
                                    <input 
                                        style={{zIndex: 99, position: "relative"}}
                                        className={'input dark-grey'} 
                                        onChange={filterOnChange}
                                        placeholder={`Ej: Neiva`}></input>
                                        ${locationsList[Math.floor(Math.random()*locationsList.length)]}
                                </div> */}
                            </div>
                            {/* <div className={'value-description'}>
                                <div className={'mont dark-grey location-item'}>
                                    {list.map((location, index) => {
                                        if(["Neiva"].includes(location)){
                                            return(
                                                <Fragment key={index}>
                                                    <span  className={classNames('input location-tag',{'tag-selected': selected.locate === location})}
                                                        onMouseEnter={() => getSelected(location)}
                                                        onMouseLeave={() => getSelected("Neiva")}
                                                        >
                                                        <b className={'green'}>
                                                            {location} 
                                                        </b>
                                                    </span>
                                                </Fragment>
                                            )
                                        } else{
                                            return(
                                                <span key={index} className={classNames('input location-tag',{'tag-selected': selected.locate === location})}
                                                onMouseEnter={() => getSelected(location)}
                                                onMouseLeave={() => getSelected("Neiva")}
                                                >
                                                    {location}
                                                </span>
                                            )
                                        }
                                    })}
                                </div>
                            </div> */}
                        </div>
                        <div className={'location-image-back'}>
                            {/* <div className={'location-image'}> */}
                                <Map selected={selected} selectLocation={selectLocation} deleteLocation={deleteLocation} getTagPosition={getTagPosition}/>
                            {/* </div> */}
                            <div style={tagPosition} className={'map-tag'}>
                                    {selected}
                            </div>
                        </div>
                    </div>
            </section>
        </Fragment>
    );

}