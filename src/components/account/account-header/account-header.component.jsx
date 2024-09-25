import React from "react";
import "./account-header.styles.scss";
import { Link } from "react-router-dom";

const AccountHeader = () => {
  return (
    <div className="account-header-cont">
      <p className="account-header">account</p>
      <div className="account-breadcrumbs">
        <Link
          to="/"
          onClick={() => window.scrollTo(0, 0)}
          className="account-breadlink"
        >
          Home <span className="account-slash">{"/"}</span>
        </Link>{" "}
        <span className="account-breadtitle">account</span>
      </div>
    </div>
  );
};

export default AccountHeader;
