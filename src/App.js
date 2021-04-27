import React, {useState} from 'react';
import Nav from './components/nav'
import Header from './components/header'
import Contact from './components/contact/contact'
// import Services from './components/services/services'
import ServiceWindow from './components/service-window'
import StickyCart from './components/sticky-cart'
import StickyNofifier from './components/sticky-notifier'
// import Cart from './components/cart/cart'
import './css/styles.css'
import './App.css';

import { services } from './components/services/servicesData.js'
import Carousel from './components/news/carousel';
import Footer from './components/footer/Footer';

function App() {

    
    const [serviceSelected,
        setServiceSelected] = useState({selected: 0, status: false});

    const [select, setSelect] = useState({option: '', shown: false})

    const selected = (e, s) => {
        setServiceSelected({selected: e, status: s})
    }
    const [cart,
        setCart] = useState([])
    const [totalServices,
        setTotalServices] = useState(0)
    const [lastService,
        setLastService] = useState("")
    const [notifierStatus,
        setNotifierStatus] = useState(false)
    const closeWindow = (e) => {
        setServiceSelected({
            ...serviceSelected,
            status: e
        })
    }
    const getCart = (e, s) => {
        setCart(e)
        setTotalServices(s)
    }
    const getLastService = (e,s) => {
        setLastService(e)
        setNotifierStatus(s)
    }

    const getSelect = (e,f) => {
        setSelect({option: e, shown: f})
    }
    return (
        <div id="inicio" className="app">
            <Nav services={services} getSelect={getSelect} select={select}/>
            <Header selected={selected} select={select}/>
            <Carousel />
            <Contact />
            <Footer />
            <ServiceWindow
                selected={services[serviceSelected.selected]}
                id={serviceSelected.selected}
                status={serviceSelected.status}
                close={closeWindow}
                cart={getCart}
                lastService={getLastService}/>
            {totalServices > 0 && <StickyCart services={services} cart={cart} totalServices={totalServices}/>}
            <StickyNofifier lastService={lastService} status={notifierStatus} services={services} setStatus={setNotifierStatus}/>
        </div>
    );
}

export default App;
