import React from "react";
import logo from "../assets/img/logo.svg";
import x from "./../assets/img/icons/x.png";
import bars from "./../assets/img/icons/bars.png";
import { Fragment } from "react";
import Hammer from "hammerjs";
import { Link } from "react-router-dom";

class NavMobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  scrollTo = (section) => {
    const sect = document.getElementById(section);
    const serviciosOffset = sect.getBoundingClientRect().top - 150;
    window.scrollTo(0, serviciosOffset);
    this.toggleOpen();
  };

  showServices = () => {
    const { getSelect } = this.props;
    this.scrollTo("inicio");
    getSelect("servicios", true);
    setTimeout(() => {
      getSelect("servicios", false);
    }, 1000);
    setTimeout(() => {
      getSelect("servicios", true);
    }, 2000);
    setTimeout(() => {
      getSelect("servicios", false);
    }, 3000);
    setTimeout(() => {
      getSelect("servicios", true);
    }, 4000);
    setTimeout(() => {
      getSelect("servicios", false);
    }, 5000);
  };

  toggleOpen = () => {
    const $ = require("jquery");
    this.setState((state) => ({ open: !state.open }));
    $("#navbox").toggleClass("open-navbar");
    $("#navboxBack").toggleClass("open-navbar-back");
  };

  openMenu = () => {
    const $ = require("jquery");
    this.setState({ open: true });
    $("#navbox").addClass("open-navbar");
    $("#navboxBack").addClass("open-navbar-back");
  };

  closeMenu = () => {
    const $ = require("jquery");
    this.setState({ open: false });
    $("#navbox").removeClass("open-navbar");
    $("#navboxBack").removeClass("open-navbar-back");
  };

  closeOnClickOutside = (e) => {
    const target = e.target;
    const main = document.getElementById("navbox");
    if (!main.contains(target)) {
      this.toggleOpen();
    }
  };

  componentDidMount() {
    const menu = document.getElementById("navboxBack");
    const body = document.getElementById("inicio");
    const hammerClose = new Hammer(menu);
    hammerClose.get("swipe").set({ direction: Hammer.DIRECTION_HORIZONTAL });
    const hammerToggle = new Hammer(body);
    hammerClose.on("swipe", (e) => {
      if (e.direction === 2) {
        this.closeMenu();
      }
    });
    hammerToggle.on("swipe", (e) => {
      if (e.direction === 4) {
        this.openMenu();
      }
    });
  }

  render() {
    var classNames = require("classnames");
    const { open } = this.state;

    return (
      <Fragment>
        <div
          id={"burger"}
          onClick={this.toggleOpen}
          className={classNames(
            "bars",
            { "bars-open": open },
            { shadow: !open }
          )}
        >
          <img
            src={open ? x : bars}
            alt={"Icóno de menú de DESAT"}
            height="16px"
            width="16px"
          />
        </div>
        <div
          id={"navboxBack"}
          onClick={this.closeOnClickOutside}
          className={"nav-container-back fixed"}
        >
          <div id="navbox" className="nav-container absolute shadow">
            <img
              src={logo}
              alt={"Logo de DESAT IPS"}
              className={"burger-logo"}
              onClick={() => this.scrollTo("inicio")}
            />
            <nav className="navport">
              <ul id="navigation">
                <Link to="/">
                  <li onClick={() => this.scrollTo("inicio")}>Inicio</li>
                </Link>
                <Link to="/">
                  <li onClick={this.showServices}>Servicios</li>
                </Link>
                <Link to="/">
                  <li onClick={() => this.scrollTo("Contacto")}>Contacto</li>
                </Link>
                <Link to="/Nosotros">
                  <li onClick={() => this.scrollTo("inicio")}>Nosotros</li>
                </Link>
                <a
                  href="https://desatneiva.rednacional.com.co/erp/snt/websys_login.snt"
                  target="_blank"
                  alt="Certíficate con SOFIA y DESAT"
                >
                  <li>Certificado</li>
                </a>
              </ul>
            </nav>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default NavMobile;
