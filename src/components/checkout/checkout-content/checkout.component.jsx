import React from "react";
import "./checkout.styles.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CheckoutItem from "../checkout-item/checkout-item.component";
import ShippingForm from "../shipping-form/shipping-form.component";

const Checkout = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotal = parseFloat(
    cartItems
      .reduce(
        (accumulatedQuantity, cartItem) =>
          accumulatedQuantity + cartItem.quantity * cartItem.price,
        0
      )
      .toFixed(2)
  );

  const handleOrigins = () => {
    window.scrollTo(0, 0);
  };

  if (cartItems.length === 0) {
    navigate("/");
    handleOrigins();
  }

  return (
    <div className="checkout-content-cont">
      <div className="checkout-content-wrapper">
        <div className="content-header">
          <span className="header-block">Product</span>
          <span className="header-block">Description</span>
          <span className="header-block">Quantity</span>
          <span className="header-block">Price</span>
          <span className="header-block">Remove</span>
        </div>

        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <div className="billing-wrapper">
        <p className="billing-title">Cart Totals</p>
        <div className="total-amount">
          <p className="sub-title">Sub-total:</p>
          <p className="total">${cartTotal}</p>
        </div>
        <div>
          <div className="shipping-details-cont">
            <p className="subtitle">Shipping:</p>
            <ShippingForm />
          </div>
          <div className="overall-amount">
            <p className="sub-title">Total:</p>
            <p className="total">${cartTotal}</p>
          </div>
          {/* <Elements stripe={stripePromise}>
              <CheckoutForm price={cartTotal} cartItems={cartItems} />
            </Elements> */}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
