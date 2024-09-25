import React from "react";
import "./quantity-control.styles.scss";
import { IoAddSharp, IoRemoveSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../../features/cart/cartSlice";

const QuantityControl = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { quantity } = cartItem;

  const handleAddItemClick = () => {
    dispatch(addItem(cartItem));
  };

  const handleRemoveItemClick = () => {
    dispatch(removeItem(cartItem));
  };

  if (!cartItem) {
    return null;
  }

  return (
    <div className="quantity-control">
      <div className="decrease" onClick={handleRemoveItemClick}>
        <IoRemoveSharp />
      </div>
      <div className="quantity">{quantity}</div>
      <div className="increase" onClick={handleAddItemClick}>
        <IoAddSharp />
      </div>
    </div>
  );
};

export default QuantityControl;
