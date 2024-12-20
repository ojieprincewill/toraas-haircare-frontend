import React, { useState } from "react";
import "./product.styles.scss";
import Quickview from "../quickview/quickview.component";
import AddToCart from "../add-to-cart/add-to-cart.component";
import QuickviewDisplay from "../quickview-display/quickview-display.component";
import WishAdd from "../../wishlist/wish-add/wish-add.component";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../../../features/cart/cartSlice";
import QuantityControl from "../quantity-control/quantity-control.component";
import { toast } from "react-toastify";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartItem = cartItems.find((cartItem) => cartItem.id === product.id);

  const [showQuickView, setShowQuickView] = useState(false);

  const openQuickView = () => {
    setShowQuickView(true);
  };

  const closeQuickView = () => {
    setShowQuickView(false);
  };

  const handleAddToCart = () => {
    dispatch(addItem(product));
    toast.success(`${product.title} added to cart`);
  };

  const { id, image, title, sizeandprice, price } = product;

  let displayPrice = `₦${price}`;
  if (sizeandprice && sizeandprice.length > 0) {
    const prices = sizeandprice.map((item) => item.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    displayPrice =
      minPrice === maxPrice ? `₦${minPrice}` : `₦${minPrice} - ₦${maxPrice}`;
  }

  return (
    <div key={id} className="product-container">
      <div className="product-image-cont">
        <img src={image} alt={title} className="product-image" />
        <div className="product-icons">
          <div className="tooltip">
            <QuickviewDisplay openQuickView={openQuickView} />
            <span className="tooltip-text">Quickview</span>
          </div>
          <div className="tooltip">
            <WishAdd product={product} />
          </div>
        </div>
      </div>
      <p className="product-title">{title}</p>
      <p className="product-price">{displayPrice}</p>

      {cartItem ? (
        <div className="quantity-cont">
          <QuantityControl cartItem={cartItem} />
        </div>
      ) : (
        <AddToCart handleAddToCart={handleAddToCart} />
      )}

      {showQuickView && (
        <Quickview
          product={product}
          cartItem={cartItem}
          handleAddToCart={handleAddToCart}
          closeQuickView={closeQuickView}
        />
      )}
    </div>
  );
};

export default Product;
