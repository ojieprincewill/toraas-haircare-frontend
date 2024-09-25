import React from "react";
import "./footer-logo.styles.scss";

const FooterLogo = () => {
  const footerlogo = "https://i.ibb.co/3RCZKST/toraa-logo-6-edited.png";
  return (
    <div className="logo-cont">
      <img src={footerlogo} alt="toraa-logo" className="logo" />
    </div>
  );
};

export default FooterLogo;
