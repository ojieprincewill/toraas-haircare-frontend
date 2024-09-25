import React from "react";
import "./faq-header.styles.scss";
import { Link } from "react-router-dom";

const FaqHeader = () => {
  return (
    <div className="questions-header-cont">
      <p className="questions-header">FAQs</p>
      <div className="questions-breadcrumbs">
        <Link
          to="/"
          onClick={() => window.scrollTo(0, 0)}
          className="questions-breadlink"
        >
          Home <span className="questions-slash">{"/"}</span>
        </Link>{" "}
        <span className="questions-breadtitle">FAQs</span>
      </div>
    </div>
  );
};

export default FaqHeader;
