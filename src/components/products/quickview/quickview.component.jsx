import React from "react";
import "./quickview.styles.scss";
import { IoCloseOutline } from "react-icons/io5";
import AddToCart from "../add-to-cart/add-to-cart.component";
import QuantityControl from "../quantity-control/quantity-control.component";
import WishAdd from "../../wishlist/wish-add/wish-add.component";
import { useSelector } from "react-redux";
import CtaButtons from "../../cta-buttons/cta-buttons.component";
import { useNavigate } from "react-router-dom";

const Quickview = ({ product, closeQuickView, handleAddToCart }) => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.currentUser);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartItem = cartItems.find((cartItem) => cartItem.id === product.id);
  const wishItems = useSelector((state) => state.wishlist.wishlistItems);
  const isItemInWishList = wishItems.some((item) => item.id === product.id);

  const { image, title, price, description, category } = product;

  const handleOrigins = () => {
    window.scrollTo(0, 0);
  };

  const handleRedirect = () => {
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
    <div className="quickview-container">
      <div className="close-view" onClick={closeQuickView}>
        <IoCloseOutline className="close-icon" />
      </div>
      <div className="quickview-content">
        <div className="content-image-cont">
          <img src={image} alt={title} className="content-image" />
        </div>
        <div className="content-info">
          <h2 className="content-header">{title}</h2>
          <p className="content-price">${price}</p>
          <p className="content-text">{description}</p>

          <div className="quick-btn-cont">
            {cartItem ? (
              <div className="cta-buttons">
                <QuantityControl cartItem={cartItem} />
                <CtaButtons
                  handleRedirect={handleRedirect}
                  closeQuickView={closeQuickView}
                />
              </div>
            ) : (
              <div className="cart-btn-cont">
                <AddToCart handleAddToCart={handleAddToCart} />
              </div>
            )}
          </div>

          <div className="wish-add-cont">
            <WishAdd product={product} />
            {isItemInWishList ? (
              <span className="wish-add-text">Remove from Wishlist</span>
            ) : (
              <span className="wish-add-text">Add to Wishlist</span>
            )}
          </div>
          <p className="content-category">
            category: <span className="content-text">{category}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quickview;
