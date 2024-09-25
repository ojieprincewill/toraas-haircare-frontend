import React from "react";
import "./wish-icon.styles.scss";
import { IoHeartOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const WishIcon = () => {
  const location = useLocation();
  const wishItems = useSelector((state) => state.wishlist.wishlistItems);
  const wishCount =
    Array.isArray(wishItems) && wishItems.length > 0
      ? wishItems.reduce(
          (accumulatedQuantity, wishItem) =>
            accumulatedQuantity + wishItem.quantity,
          0
        )
      : 0;

  return (
    <Link
      to="/wishlist"
      onClick={() => window.scrollTo(0, 0)}
      className="wish-cont"
    >
      <IoHeartOutline
        className={`wish-icon ${location.pathname === "/wishlist" && "active"}`}
      />
      <span className="item-count">{wishCount}</span>
    </Link>
  );
};

export default WishIcon;
