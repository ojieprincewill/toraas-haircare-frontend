import React from "react";
import "./cart-item.styles.scss";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { clearItem } from "../../../features/cart/cartSlice";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  const { image, title, price, quantity } = product;

  const removeItemFromCart = () => {
    dispatch(clearItem(product));
  };

  return (
    <div className="cart-item">
      <div className="cart-image-cont">
        <img src={image} alt={title} className="cart-image" />
        <div className="cart-overlay-cont">
          <IoCloseOutline className="cart-close" onClick={removeItemFromCart} />
        </div>
      </div>
      <div className="cart-product-details">
        <span className="product-title">{title}</span>
        <span className="product-price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
