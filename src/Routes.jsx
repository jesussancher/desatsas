import React, {useEffect} from 'react';
import Header from './components/header';
import Contact from './components/contact/contact';
import Carousel from './components/news/carousel';
import {
    Switch,
    Route,
    useHistory,
    Redirect
} from "react-router-dom";
import AboutUs from './components/about/about';
import AboutHeader from './components/about/aboutHeader';
import AboutCounter from './components/about/aboutCounter';
import AboutMV from './components/about/aboutMV';
import Locations from './components/locations/Locations';
import AboutHistory from './components/about/aboutHistory';
import PageNotFound from './components/pageNotFound/pageNotFound';


function Routes(props) {

        const history = useHistory();
        const {select, selected, getCopied, getSelect, getPath} = props;

        return (
                <Switch>
                        <Route path={`/Servicios/:serviceId`}>
                                <Header selected={selected} select={select}/>
                                <Carousel />
                                <Contact getCopied={getCopied}/>
                                <Locations />
                        </Route>
                        <Route exact path={`/`}>
                                <Header selected={selected} select={select}/>
                                <Carousel />
                                <Contact getCopied={getCopied}/>
                                <Locations />
                        </Route>
                        <Route path="/Nosotros">
                                <AboutHeader />
                                <AboutCounter />
                                <AboutMV />
                                <AboutHistory />
                                <AboutUs />
                        </Route>
                        <Route path={`/404`}>
                                <PageNotFound getSelect={getSelect} getPath={getPath}/>
                        </Route>
                        <Redirect to="/404" />
                </Switch>
        );
}

export default Routes;
