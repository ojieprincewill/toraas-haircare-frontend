import React from "react";
import "./policy-header.styles.scss";
import { Link } from "react-router-dom";

const PolicyHeader = () => {
  return (
    <div className="policy-header-cont">
      <p className="policy-header">our policy</p>
      <div className="policy-breadcrumbs">
        <Link
          to="/"
          onClick={() => window.scrollTo(0, 0)}
          className="policy-breadlink"
        >
          Home <span className="policy-slash">{"/"}</span>
        </Link>{" "}
        <span className="policy-breadtitle">policy</span>
      </div>
    </div>
  );
};

export default PolicyHeader;
