import React, { Fragment, useCallback, useDebugValue, useEffect } from 'react';
import { useState } from 'react';
import medoc from '../assets/img/services/medoc.jpg';
import espiro from '../assets/img/services/espiro.png';
import inv from '../assets/img/services/inv.png';
import psico from '../assets/img/services/psico.jpg';
import fono from '../assets/img/services/fono.jpg';
import lab from '../assets/img/services/lab.jpg';
import opto from '../assets/img/services/opto.jpg';
import cap from '../assets/img/services/cap.jpg';
import est from '../assets/img/services/est.png';
import fisio from '../assets/img/services/fisio.jpg';
import covid from '../assets/img/services/covid.jpg';
import gen from '../assets/img/services/gen.jpg';
import medocX from '../assets/img/services/medocx.jpg';
import espiroX from '../assets/img/services/espirox.png';
import invX from '../assets/img/services/invx.png';
import psicoX from '../assets/img/services/psicox.jpg';
import fonoX from '../assets/img/services/fonox.jpg';
import labX from '../assets/img/services/labx.jpg';
import optoX from '../assets/img/services/optox.jpg';
import capX from '../assets/img/services/capx.jpg';
import estX from '../assets/img/services/estx.png';
import fisioX from '../assets/img/services/fisiox.jpg';
import covidX from '../assets/img/services/covidx.jpg';
import genX from '../assets/img/services/genx.jpg';
import logo from '../assets/img/logo.svg';
import { services } from './services/servicesData.js';
import { useParams, useHistory } from 'react-router-dom';

function ServiceWindow(props) {
  const servicesImg = [
    medoc,
    gen,
    covid,
    lab,
    espiro,
    psico,
    fono,
    opto,
    cap,
    inv,
    est,
    fisio,
  ];

  const servicesImgSmall = [
    medocX,
    genX,
    covidX,
    labX,
    espiroX,
    psicoX,
    fonoX,
    optoX,
    capX,
    invX,
    estX,
    fisioX,
  ];

  const history = useHistory();
  let { serviceId } = useParams();
  const classNames = require('classnames');
  const [counter, setCounter] = useState(1);
  const [servicesList, setServicesList] = useState([]);
  const [totalServices, setTotalServices] = useState(0);
  const closeWindow = () => {
    props.close(false);
    const form = document.getElementById('servForm');
    const serviceWindow = document.getElementById('serviceWindow');
    const content = document.getElementById('serviceWindowContent');
    serviceWindow.style.height = '0%';
    content.classList.add('invisible');
    content.classList.remove('visible');
    setTimeout(() => {
      form.reset();
    }, 300);
    history.push('/');
    props.getSelected(-1, false);

    document.title = 'DESAT IPS - Medicina Ocupacional';
  };

  const addService = (e) => {
    e.preventDefault();
    const qty = counter;
    const id = props.id;
    let totalServicios = totalServices;
    if (servicesList.length > 0) {
      const found = servicesList.find((element) => element.servID === id);
      if (found) {
        const index = servicesList.findIndex(
          (element) => element.servID === id
        );
        let newArray = [...servicesList];
        if (qty > 0) {
          newArray[index] = {
            servID: props.id,
            servQty: parseInt(qty),
          };
          props.lastService(id, true);
        } else {
          newArray.splice(index, 1);
          setTotalServices(
            (totalServicios) => (totalServicios = totalServicios - 1)
          );
        }
        setServicesList(newArray);
      } else {
        setServicesList([
          ...servicesList,
          {
            servID: id,
            servQty: parseInt(qty),
          },
        ]);
        setTotalServices(
          (totalServicios) => (totalServicios = totalServicios + 1)
        );
        props.lastService(id, true);
      }
    } else {
      setServicesList([
        ...servicesList,
        {
          servID: id,
          servQty: parseInt(qty),
        },
      ]);
      totalServicios++;
      setTotalServices(totalServicios);
      props.lastService(id, true);
    }
    // localStorage.setItem('services', )
    closeWindow();
  };

  const showWindow = (id) => {
    props.getSelected(id, true);
    const serviceWindow = document.getElementById('serviceWindow');
    const content = document.getElementById('serviceWindowContent');
    if (serviceWindow !== null) {
      serviceWindow.style.height = '100%';
    }
    if (content !== null) {
      setTimeout(() => {
        content.classList.add('visible');
        content.classList.remove('invisible');
      }, 500);
    }
  };

  const handleDocumentClick = (e) => {
    const which = e.which;
    if (which === 27) {
      closeWindow();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleDocumentClick);

    return function cleanUp() {
      document.removeEventListener('keydown', handleDocumentClick);
    };
  });

  const plusService = () => {
    setCounter((prev) => (prev = prev + 1));
  };

  const minusService = () => {
    if (counter > 0) {
      setCounter((prev) => (prev = prev - 1));
    }
  };

  const handleOnChange = (e) => {
    setCounter(parseInt(e.target.value, 10));
  };

  useEffect(() => {
    if (servicesList.length > 0) {
      const quantity = servicesList.findIndex(
        (service) => service.servID === props.id
      );
      if (servicesList[quantity]?.servQty) {
        setCounter(servicesList[quantity]?.servQty);
      } else {
        setCounter(1);
      }
    }
    const index = services
      .map((serv) => {
        return serv.name;
      })
      .findIndex(
        (name) =>
          name
            .split(' ')
            .join('')
            .replace('.', '')
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '') ===
          history.location.pathname.split('/')[2]
      );
    if (props.status) {
      showWindow(index);
    }
    const newTitle = `${services[index]?.name} - DESAT IPS`;
    if (services[index]?.name) {
      document.title = newTitle;
    }
  }, [props.id]);

  useEffect(() => {
    const folder = history.location.pathname.split('/')[1];
    const service = history.location.pathname.split('/')[2];
    const isCorrect = services.some((serv) => {
      return (
        serv.name
          .split(' ')
          .join('')
          .replace('.', '')
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '') === service
      );
    });
    const index = services
      .map((serv) => {
        return serv.name;
      })
      .findIndex(
        (name) =>
          name
            .split(' ')
            .join('')
            .replace('.', '')
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '') ===
          history.location.pathname.split('/')[2]
      );
    if (folder === 'Servicios' && isCorrect) {
      showWindow(index);
    } else if (folder === 'Servicios' && !isCorrect) {
      history.push('/');
    }
  }, [history.location.pathname]);

  const closeOnClickOutside = (e) => {
    const target = e.target;
    const main = document.getElementById('serviceWindowContent');

    if (!main.contains(target)) {
      closeWindow();
    }
  };

  props.cart(servicesList, totalServices);
  return (
    <div
      id="serviceWindow"
      onClick={closeOnClickOutside}
      className="service-window visible fixed">
      <div className="service-window-content-container">
        <div
          id="serviceWindowContent"
          className="service-window-content invisible">
          <span id="closeWindow" onClick={closeWindow} className="absolute">
            {' '}
            X{' '}
          </span>
          <div className="row service-window-box">
            <div
              role="img"
              alt={props.selected?.description}
              style={{
                backgroundPosition: props.selected?.position,
                backgroundImage:
                  'url(' +
                  (window.innerWidth > 768
                    ? servicesImg[props.id]
                      ? servicesImg[props.id]
                      : logo
                    : servicesImgSmall[props.id]
                    ? servicesImgSmall[props.id]
                    : logo) +
                  ')',
              }}
              className="services-window-image">
              <div className={'service-window-image-filter'}></div>
            </div>
            <div className="services-window-info">
              <div>
                <h2 className="green mont">{props.selected?.name}</h2>
                <br />
                <p
                  className="description dark-grey"
                  style={{
                    textAlign: 'justify',
                  }}>
                  {props.selected?.longDescription
                    .split('/n')
                    .map((text, index) => {
                      return (
                        <Fragment key={index}>
                          {text.includes('/b')
                            ? text.split('/b').map((bold, index) => {
                                if (index % 2 === 0) {
                                  return bold;
                                } else {
                                  return (
                                    <b key={index} className={'green'}>
                                      {bold}
                                    </b>
                                  );
                                }
                              })
                            : text}
                          <br />
                          <br />
                        </Fragment>
                      );
                    })}
                </p>
              </div>
              <div className={'service-counter-container'}>
                <div className="green mont text-center">
                  ¿Cuántos exámenes de <b>{props.selected?.name}</b> deseas
                  solicitar?
                </div>
                <br />
                <form id="servForm" onSubmit={addService} action="">
                  <div className={'input-container'}>
                    <div className={'counter-btn'} onClick={minusService}>
                      -
                    </div>
                    <input
                      type="number"
                      min={
                        servicesList.some(
                          (service) => service.servID === props.id
                        )
                          ? '0'
                          : '1'
                      }
                      className="input no-spinner"
                      name="qty"
                      placeholder="Cantidad"
                      value={counter}
                      onChange={handleOnChange}
                      required
                    />
                    <div className={'counter-btn'} onClick={plusService}>
                      +
                    </div>
                  </div>
                  <input
                    type="submit"
                    className={classNames(
                      'btn input window-btn',
                      counter === 0 &&
                        servicesList.some(
                          (service) => service.servID === props.id
                        )
                        ? 'main-danger-bg'
                        : 'main-green-bg'
                    )}
                    value={
                      counter === 0 &&
                      servicesList.some(
                        (service) => service.servID === props.id
                      )
                        ? 'Eliminar'
                        : 'Solicitar'
                    }
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceWindow;
