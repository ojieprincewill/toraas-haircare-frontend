import React, { useState, useEffect } from "react";
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

  const { image, title, description, categories, sizeandprice } = product;

  const initialSize =
    sizeandprice && sizeandprice.length > 0
      ? sizeandprice[0]
      : { size: "", price: product.price };
  const [selectedSize, setSelectedSize] = useState(initialSize);
  const [price, setPrice] = useState(initialSize.price);

  useEffect(() => {
    console.log("Product:", product);
    console.log("Size and Price:", sizeandprice);
    console.log("Selected Size:", selectedSize);
  }, [product, sizeandprice, selectedSize]);

  const handleSizeChange = (e) => {
    const newSize = sizeandprice.find(
      (size) => size.Size.toLowerCase() === e.target.value.toLowerCase()
    );
    if (newSize) {
      setSelectedSize(newSize);
      setPrice(newSize.price);
    } else {
      console.error("Selected size not found:", e.target.value);
    }
  };

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
          <p className="content-price">&#8358;{price}</p>
          <p className="content-text">{description}</p>

          {sizeandprice && sizeandprice.length > 0 && (
            <div className="dropdown-container">
              {" "}
              <label htmlFor="size-select" className="dropdown-label">
                hair growth oil (size):
              </label>
              <select
                id="size-select"
                value={selectedSize.Size}
                onChange={handleSizeChange}
                className="custom-dropdown"
              >
                {sizeandprice.map((size) => (
                  <option
                    key={size.id}
                    value={size.Size}
                    className="dropdown-option"
                  >
                    {size.Size}
                  </option>
                ))}
              </select>
            </div>
          )}

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
            category:{" "}
            {categories.map((category, index) => (
              <span key={index} className="content-text">
                {category.name}
                {index < categories.length - 1 && ", "}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quickview;
