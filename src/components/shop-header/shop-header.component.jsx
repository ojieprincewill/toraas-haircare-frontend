import React from "react";
import "./shop-header.styles.scss";
import { Link } from "react-router-dom";

const ShopHeader = () => {
  return (
    <div className="shop-header-cont">
      <p className="shop-header">shop</p>
      <div className="shop-breadcrumbs">
        <Link
          to="/"
          onClick={() => window.scrollTo(0, 0)}
          className="shop-breadlink"
        >
          home <span className="shop-slash">{"/"}</span>
        </Link>{" "}
        <span className="shop-breadtitle">shop</span>
      </div>
    </div>
  );
};

export default ShopHeader;
