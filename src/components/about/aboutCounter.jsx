import React, { Fragment, useEffect, useState } from "react";

export default function AboutCounter(props) {
  const [number, setNumber] = useState(0);
  const [startCounting, setStartCounting] = useState(false);
  const [timeStamp, setTimeStamp] = useState(0);
  const limit = 50446;
  useEffect(() => {
    if (startCounting) {
      if (number <= limit - (3 * limit) / 4) {
        setTimeout(() => {
          setNumber((prev) => (prev = prev + Math.floor(Math.random() * 300)));
        }, 10);
      } else if (
        (number > limit - (3 * limit) / 4 && number <= limit) ||
        (number >= limit && number < limit + (3 * limit) / 4)
      ) {
        setNumber(limit);
      } else if (timeStamp > 150) {
        setNumber(limit);
      }
    }
  }, [number, startCounting, timeStamp]);

  useEffect(() => {
    setTimeout(() => {
      setTimeStamp((prev) => (prev = prev + 1));
    }, 1);
  }, [timeStamp]);

  useEffect(() => {
    setTimeStamp(0);
  }, [number]);

  const scrolled = () => {
    if (window.scrollY > 300) {
      setStartCounting(true);
    }
  };

  window.addEventListener("scroll", scrolled);
  return (
    <Fragment>
      <section id={"aboutCounter"}>
        <div className={"counter-container"}>
          <div className={"counter-title"}>
            <h2 className={"mont green"}>Hemos Realizado</h2>
          </div>
          <div className={"counter-title"}>
            <h3
              className={"mont green"}
              style={{ fontWeight: 400, fontSize: "1.5em" }}>
              Hasta la fecha
            </h3>
          </div>
          <div className={"counter-numbers"}>
            <h1 className={"mont dark-green"}>{number}</h1>
          </div>
          <div className={"counter-subtitle"}>
            <h2 className={"mont green"}>Exámenes Medicos Laborales</h2>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
