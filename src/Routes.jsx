import React from 'react';
import Header from './components/header';
import Contact from './components/contact/contact';
import Carousel from './components/news/carousel';
import {
    Switch,
    Route,
} from "react-router-dom";
import AboutUs from './components/about/about';
import AboutHeader from './components/about/aboutHeader';
import AboutCounter from './components/about/aboutCounter';
import AboutValues from './components/about/aboutValues';
import AboutMV from './components/about/aboutMV';


function Routes(props) {

    const {select, selected} = props;

    return (
            <Switch>
                <Route path={`/Servicios/:serviceId`}>
                        <Header selected={selected} select={select}/>
                        <Carousel />
                        <Contact />
                </Route>

                {/* <Route path="/">
                    <Redirect to="/Home" />
                </Route> */}
                
                <Route exact path={`/`}>
                        <Header selected={selected} select={select}/>
                        <Carousel />
                        <Contact />
                </Route>
                <Route path="/Nosotros">
                        <AboutHeader />
                        <AboutCounter />
                        <AboutValues />
                        <AboutMV />
                        {/* <Header selected={selected} select={select}/> */}
                        <AboutUs />
                </Route>
            </Switch>
    );
}

export default Routes;
