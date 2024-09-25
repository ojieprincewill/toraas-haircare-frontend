import React from "react";
import "./wish-add.styles.scss";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishItem } from "../../../features/wishlist/wishlistSlice";

const WishAdd = ({ product }) => {
  const dispatch = useDispatch();
  const wishItems = useSelector((state) => state.wishlist.wishlistItems);
  const isItemInWishList = wishItems.some((item) => item.id === product.id);

  const handleToggleWishItemClick = () => {
    dispatch(toggleWishItem(product));
  };

  return (
    <div
      className={`product-icon ${isItemInWishList ? "active" : ""}`}
      onClick={handleToggleWishItemClick}
    >
      {isItemInWishList ? (
        <IoHeartSharp className="active-icon" />
      ) : (
        <IoHeartOutline />
      )}
      {isItemInWishList ? (
        <span className="tooltip-text">Remove from wishlist</span>
      ) : (
        <span className="tooltip-text">Add to wishlist</span>
      )}
    </div>
  );
};

export default WishAdd;
