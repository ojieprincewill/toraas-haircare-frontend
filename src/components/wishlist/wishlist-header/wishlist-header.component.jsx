import React from "react";
import "./wishlist-header.styles.scss";
import { Link } from "react-router-dom";

const WishlistHeader = () => {
  return (
    <div className="wish-header-cont">
      <p className="wish-header">wishlist</p>
      <div className="wish-breadcrumbs">
        <Link
          to="/"
          onClick={() => window.scrollTo(0, 0)}
          className="wish-breadlink"
        >
          Home <span className="wish-slash">{"/"}</span>
        </Link>{" "}
        <span className="wish-breadtitle">wishlist</span>
      </div>
    </div>
  );
};

export default WishlistHeader;
