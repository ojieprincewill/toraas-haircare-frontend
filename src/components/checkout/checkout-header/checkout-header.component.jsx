import React from "react";
import "./checkout-header.styles.scss";
import { Link } from "react-router-dom";

const CheckoutHeader = () => {
  return (
    <div className="checkout-header-cont">
      <p className="checkout-header">checkout</p>
      <div className="checkout-breadcrumbs">
        <Link
          to="/"
          onClick={() => window.scrollTo(0, 0)}
          className="checkout-breadlink"
        >
          Home <span className="checkout-slash">{"/"}</span>
        </Link>{" "}
        <span className="checkout-breadtitle">checkout</span>
      </div>
    </div>
  );
};

export default CheckoutHeader;
