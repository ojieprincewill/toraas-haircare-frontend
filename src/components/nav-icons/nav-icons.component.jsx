import React from "react";
import "./nav-icons.styles.scss";
import WishIcon from "../wishlist/wish-icon/wish-icon.component";
import CartIcon from "../cart/cart-icon/cart-icon.component";
import UserIcon from "../user/user-icon/user-icon.component";

const NavIcons = () => {
  return (
    <div className="nav-icons">
      <UserIcon />
      <WishIcon />
      <CartIcon />
    </div>
  );
};

export default NavIcons;
