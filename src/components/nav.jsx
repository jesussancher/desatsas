import React, { useState } from "react";
import logo from "../assets/img/logo.svg";
import { useHistory, Link } from "react-router-dom";
function Nav(props) {
  const history = useHistory();
  const { getSelect } = props;
  var classNames = require("classnames");
  const [dropShadow, setDropShadow] = useState(false);

  const scrollTo = (section) => {
    history.push("/");
    setTimeout(() => {
      const sect = document.getElementById(section);
      const serviciosOffset = sect?.getBoundingClientRect().top - 150;
      window.scrollTo(0, serviciosOffset);
    }, 200);
  };

  const scrolled = () => {
    if (window.scrollY > 10) {
      setDropShadow(true);
    } else return setDropShadow(false);
  };

  const showServices = () => {
    scrollTo("inicio");
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

  window.addEventListener("scroll", scrolled);

  return (
    <div
      id={"navBar"}
      className={classNames("row nav-bar fixed w-100", {
        "drop-shadow": dropShadow,
      })}
    >
      <div onClick={() => scrollTo("inicio")}>
        <img
          style={
            dropShadow
              ? {
                  width: "120px",
                  height: "auto",
                  top: "2vh",
                  left: "4vw",
                  transition: "all 200ms ease",
                }
              : {
                  width: "300px",
                  height: "auto",
                  top: "17vh",
                  left: "4vw",
                  transition: "all 200ms ease",
                }
          }
          className={classNames("logo logo-lg fixed")}
          src={logo}
          alt="Desat Logo"
        />
      </div>
      <div className="navbar-menu">
        <ul className="mont">
          <li id="inicioli" className={"active"}>
            <span
              id="inicioLink"
              className={"dark-green"}
              onClick={() => scrollTo("inicio")}
            >
              Inicio
            </span>
          </li>
          <li id="servicesli" className={"active"}>
            <span
              id="servicesLink"
              className={"dark-green"}
              onClick={showServices}
            >
              Servicios
            </span>
          </li>
          <li>
            <span
              id="contactoLink"
              className={"dark-green"}
              onClick={() => scrollTo("Contacto")}
            >
              Contacto
            </span>
          </li>
          <li>
            <Link to="/Nosotros">
              <span
                id="nosotrosLink"
                className={"dark-green"}
                onClick={() => scrollTo("inicio")}
              >
                Nosotros
              </span>
            </Link>
          </li>

          <div className={"tooltip"}>
            <a
              className="cert-btn"
              href="https://desatneiva.rednacional.com.co/erp/snt/websys_login.snt"
              target="_blank"
            >
              Certificado
            </a>
            <span className="tooltiptext shadow">
              Certifícate con <b>SOFIA</b>
            </span>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
