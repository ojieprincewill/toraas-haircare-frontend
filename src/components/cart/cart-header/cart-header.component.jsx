import React from "react";
import "./cart-header.styles.scss";
import { Link } from "react-router-dom";

const CartHeader = () => {
  return (
    <div className="cart-header-cont">
      <p className="cart-header">cart</p>
      <div className="cart-breadcrumbs">
        <Link
          to="/"
          onClick={() => window.scrollTo(0, 0)}
          className="cart-breadlink"
        >
          Home <span className="cart-slash">{"/"}</span>
        </Link>{" "}
        <span className="cart-breadtitle">cart</span>
      </div>
    </div>
  );
};

export default CartHeader;
