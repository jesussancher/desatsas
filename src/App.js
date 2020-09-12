import React from 'react';
import Nav from './components/nav'
import Header from './components/header'
import Services from './components/services/services'
import './css/styles.css'
import './App.css';

function App() {
    return (
        <div id="inicio" className="app">
            <Nav/>
            <Header/>
            <Services/>
        </div>
    );
}

export default App;
