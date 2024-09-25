import React from "react";
import "./checkout-item.styles.scss";

import { clearItem } from "../../../features/cart/cartSlice";
import QuantityControl from "../../products/quantity-control/quantity-control.component";
import { useDispatch } from "react-redux";
import { IoCloseOutline } from "react-icons/io5";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { image, title, price } = cartItem;

  const handleClearItem = () => {
    dispatch(clearItem(cartItem));
  };

  return (
    <div className="checkout-item">
      <div className="checkout-image-cont">
        <img src={image} alt="item" className="checkout-image" />
      </div>
      <span className="checkout-title">{title}</span>
      <span className="checkout-quantity">
        <QuantityControl cartItem={cartItem} />
      </span>
      <span className="checkout-price">${price}</span>
      <div className="remove-item-btn" onClick={handleClearItem}>
        <IoCloseOutline />
      </div>
    </div>
  );
};

export default CheckoutItem;
