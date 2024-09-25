import React from "react";
import "./add-to-cart.styles.scss";

const AddToCart = ({ handleAddToCart }) => {
  return (
    <div>
      <button className="add-btn" onClick={handleAddToCart}>
        add to cart
      </button>
    </div>
  );
};

export default AddToCart;
