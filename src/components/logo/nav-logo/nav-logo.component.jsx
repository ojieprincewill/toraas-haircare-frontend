import React from "react";
import "./nav-logo.styles.scss";

const NavLogo = () => {
  const navlogo = "https://i.ibb.co/dbD5s7G/toraa-logo-2.jpg";
  return (
    <div className="logo-cont">
      <img src={navlogo} alt="toraa-logo" className="logo" />
    </div>
  );
};

export default NavLogo;
