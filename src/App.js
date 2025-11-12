import React, { Fragment, useState } from "react";
import Nav from "./components/nav";
import NavMobile from "./components/navMobile";
import ServiceWindow from "./components/service-window";
import StickyCart from "./components/sticky-cart";
import StickyNofifier from "./components/sticky-notifier";
import "./css/styles.css";
import "./App.css";
import { services } from "./components/services/servicesData.js";
import Footer from "./components/footer/Footer";
import ResultsDownload from "./components/results-download";
import Routes from "./Routes.jsx";
import Information from "./components/Information.jsx";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [serviceSelected, setServiceSelected] = useState({
    selected: -1,
    status: false,
  });

  const [select, setSelect] = useState({ option: "", shown: false });
  const [path, setPath] = useState(false);
  const [copied, setCopied] = useState({ id: "", status: false });
  const selected = (e, s) => {
    setServiceSelected({ selected: e, status: s });
  };
  const [cart, setCart] = useState([]);
  const [totalServices, setTotalServices] = useState(0);
  const [lastService, setLastService] = useState("");
  const [notifierStatus, setNotifierStatus] = useState(false);
  const closeWindow = (e) => {
    setServiceSelected({
      ...serviceSelected,
      status: e,
    });
  };
  const getCart = (e, s) => {
    setCart(e);
    setTotalServices(s);
  };
  const getLastService = (e, s) => {
    setLastService(e);
    setNotifierStatus(s);
  };

  const getSelect = (e, f) => {
    setSelect({ option: e, shown: f });
  };

  const getCopied = (e) => {
    setCopied(e);
  };

  const getPath = (path) => {
    setPath(path);
  };

  return (
    <Router>
      <div id="inicio" className="app">
        {!path && (
          <Fragment>
            <Nav
              services={services}
              getSelect={getSelect}
              select={select}
              path={path}
            />
            <NavMobile
              services={services}
              getSelect={getSelect}
              select={select}
            />
          </Fragment>
        )}
        <Routes
          selected={selected}
          select={select}
          getSelect={getSelect}
          getCopied={getCopied}
          getPath={getPath}
        />
        {!path && (
          <Fragment>
            <Footer getCopied={getCopied} />
            <ServiceWindow
              getSelected={selected}
              selected={services[serviceSelected.selected]}
              id={serviceSelected.selected}
              status={serviceSelected.status}
              close={closeWindow}
              cart={getCart}
              lastService={getLastService}
            />
            {totalServices > 0 && (
              <StickyCart
                services={services}
                cart={cart}
                totalServices={totalServices}
                selected={selected}
              />
            )}
            <ResultsDownload />
            <StickyNofifier
              lastService={lastService}
              status={notifierStatus}
              services={services}
              setStatus={setNotifierStatus}
            />
            <Information closeFormOutside={cart.length > 0} copied={copied} />
          </Fragment>
        )}
      </div>
    </Router>
  );
}

export default App;
