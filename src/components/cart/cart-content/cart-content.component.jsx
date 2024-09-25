import React from "react";
import "./cart-content.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const CartContent = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const currentUser = useSelector((state) => state.user.currentUser);

  const handleOrigins = () => {
    window.scrollTo(0, 0);
  };

  const handleCheckoutAction = () => {
    if (!currentUser) {
      localStorage.setItem("intendedCheckoutUrl", "/checkout");
      navigate("/signin");
      handleOrigins();
    } else {
      navigate("/checkout");
      handleOrigins();
    }
  };

  return (
    <div className="cart-content-cont">
      <p className="cart-header">Items in Cart</p>
      <div className="item-cont">
        {cartItems.length ? (
          <div>
            {cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} product={cartItem} />
            ))}
          </div>
        ) : (
          <span className="empty-message">
            No products were added to the cart
          </span>
        )}
      </div>
      <div className="action-links">
        {cartItems.length > 0 ? (
          <div className="action-btn-flex">
            <Link to="/shop" className="action-btn">
              continue shopping
            </Link>
            <button onClick={handleCheckoutAction} className="action-btn">
              go to checkout
            </button>
          </div>
        ) : (
          <div className="action-btn-cont">
            <Link to="/shop" className="action-btn">
              continue shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartContent;
