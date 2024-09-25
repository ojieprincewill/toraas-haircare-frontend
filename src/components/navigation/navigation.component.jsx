import React, { useState, useEffect } from "react";
import "./navigation.styles.scss";

import NavIcons from "../nav-icons/nav-icons.component";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import CartModal from "../cart/cart-modal/cart-modal.component";
import NavLogo from "../logo/nav-logo/nav-logo.component";

const Navigation = () => {
  const location = useLocation();
  const isCartOpen = useSelector((state) => state.cart.hidden);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`navigation-container ${isScrolled ? "scrolled" : ""}`}>
        <Link
          to="/"
          onClick={() => window.scrollTo(0, 0)}
          className="logo-wrapper"
        >
          <NavLogo />
        </Link>
        <div className="nav-links">
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className={`nav-link ${location.pathname === "/" && "active"}`}
          >
            home
          </Link>
          <Link
            to="/about"
            onClick={() => window.scrollTo(0, 0)}
            className={`nav-link ${location.pathname === "/about" && "active"}`}
          >
            about
          </Link>
          <Link
            to="/shop"
            onClick={() => window.scrollTo(0, 0)}
            className={`nav-link ${location.pathname === "/shop" && "active"}`}
          >
            shop
          </Link>
          <Link
            to="/contact"
            onClick={() => window.scrollTo(0, 0)}
            className={`nav-link ${
              location.pathname === "/contact" && "active"
            }`}
          >
            contact
          </Link>
        </div>
        <NavIcons />
      </div>
      <div className="nav-placeholder"></div>
      {isCartOpen ? null : <CartModal />}
    </>
  );
};

export default Navigation;
