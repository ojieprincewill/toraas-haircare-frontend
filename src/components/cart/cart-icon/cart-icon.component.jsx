import React from "react";
import "./cart-icon.styles.scss";
import { IoBagHandleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartDisplay } from "../../../features/cart/cartSlice";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const itemCount =
    Array.isArray(cartItems) && cartItems.length > 0
      ? cartItems.reduce(
          (accumulatedQuantity, cartItem) =>
            accumulatedQuantity + cartItem.quantity,
          0
        )
      : 0;

  const handleCartIconClick = () => {
    dispatch(toggleCartDisplay());
  };

  return (
    <div className="cart-cont">
      <IoBagHandleOutline className="cart-icon" onClick={handleCartIconClick} />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default CartIcon;
