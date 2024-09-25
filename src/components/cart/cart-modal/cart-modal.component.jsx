import React, { useEffect, useRef } from "react";
import "./cart-modal.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import { useSelector, useDispatch } from "react-redux";
import { toggleCartDisplay, resetCart } from "../../../features/cart/cartSlice";
import {
  IoCloseOutline,
  IoBagHandleOutline,
  IoTrashOutline,
} from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const CartModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const modalContentRef = useRef();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const currentUser = useSelector((state) => state.user.currentUser);

  const handleCartClose = (event) => {
    event.stopPropagation();
    dispatch(toggleCartDisplay());
  };

  const handleOrigins = () => {
    window.scrollTo(0, 0);
  };

  const handleClearAllItems = () => {
    dispatch(resetCart());
  };

  const handleRedirect = () => {
    if (!currentUser) {
      localStorage.setItem("intendedCheckoutUrl", "/checkout");
      navigate("/signin");
      dispatch(toggleCartDisplay());
      handleOrigins();
    } else {
      navigate("/checkout");
      dispatch(toggleCartDisplay());
      handleOrigins();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalContentRef.current &&
        !modalContentRef.current.contains(event.target)
      ) {
        dispatch(toggleCartDisplay());
      }
    };

    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  return (
    <div className="cart-modal">
      <div className="cart-content" ref={modalContentRef}>
        <div className="header-flex">
          <p className="cart-title">shopping cart</p>
          <div className="close-cont">
            <div className="clear-cart-cont" onClick={handleClearAllItems}>
              <IoTrashOutline className="clear-cart-icon" />
              <span className="clear-cart-text">clear cart</span>
            </div>
            <IoCloseOutline className="close-cart" onClick={handleCartClose} />
          </div>
        </div>
        <div className="cart-items-cont">
          {cartItems.length ? (
            <div>
              {cartItems.map((cartItem) => (
                <CartItem key={cartItem.id} product={cartItem} />
              ))}
            </div>
          ) : (
            <div className="empty-message-cont">
              <IoBagHandleOutline className="empty-icon" />
              <p className="empty-message">Your cart is empty</p>
              <p className="empty-subtext">
                Looks like you haven't added anything to your cart yet.
              </p>
            </div>
          )}
        </div>
        <div className="modal-buttons">
          {cartItems.length > 0 ? (
            <div className="modal-btn-flex">
              <button onClick={handleCartClose} className="modal-btn">
                continue shopping
              </button>
              <button onClick={handleRedirect} className="modal-btn">
                go to checkout
              </button>
            </div>
          ) : (
            <div className="modal-btn-cont">
              <button onClick={handleCartClose} className="modal-btn">
                continue shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
