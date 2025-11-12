import React, { useEffect, useState, useCallback } from "react";
import StickyServices from "./sticky-services";
function StickyCart(props) {
  const [status, setStatus] = useState(true);

  const openCart = () => {
    setStatus(!status);
  };

  const closeOnMouseOut = () => {
    setTimeout(() => {
      setStatus(false);
    }, 100);
  };

  const getRef = () => {};

  const handleDocumentClick = useCallback((e) => {
    const target = e.target;
    const container = document.getElementById("stickyCart");
    const button = document.getElementById("cartButton");
    if (!container?.contains(target) && !button?.contains(target)) {
      closeOnMouseOut();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return function cleanUp() {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [handleDocumentClick]);

  return (
    <>
      <div
        id={"cartButton"}
        onClick={openCart}
        className="fixed sticky-cart main-green-bg shadow"
      >
        <div className={"cart-icon"}></div>
        <span className="sticky-circle text-center absolute">
          <h3 className="green">{props.totalServices}</h3>
        </span>
        <StickyServices
          cart={props.cart}
          services={props.services}
          status={status}
          getRef={getRef}
          selected={props.selected}
        />
      </div>
    </>
  );
}

export default StickyCart;
