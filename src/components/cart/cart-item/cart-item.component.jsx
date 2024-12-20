import React from "react";
import "./cart-item.styles.scss";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { clearItem } from "../../../features/cart/cartSlice";
import { toast } from "react-toastify";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  const { image, title, price, quantity } = product;

  const removeItemFromCart = () => {
    dispatch(clearItem(product));
    toast.success(`${product.title} has been removed from cart`);
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
          {quantity} x &#8358;{price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
