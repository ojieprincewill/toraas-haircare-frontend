import React, { useState } from "react";
import "./wish-item.styles.scss";
import { useDispatch } from "react-redux";
import { removeWishItem } from "../../../features/wishlist/wishlistSlice";
import { IoCloseOutline } from "react-icons/io5";

const WishItem = ({ product, handleSelectItem }) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(false);
  const { image, title, id, price, category } = product;

  const toggleSelection = () => {
    setSelected(!selected);
    handleSelectItem(id, !selected);
  };

  const removeItemFromWishlist = () => {
    dispatch(removeWishItem(product));
  };

  return (
    <div className="wish-item">
      <div className="check-cont">
        <input
          type="checkbox"
          checked={selected}
          onChange={toggleSelection}
          id={`checkbox-${id}`}
        />
        <label htmlFor={`checkbox-${id}`}></label>
      </div>
      <div className="wish-image-cont">
        <img src={image} alt="product" className="wish-image" />
        <div className="wishoverlay-cont">
          <IoCloseOutline
            className="wishoverlay-close"
            onClick={removeItemFromWishlist}
          />
        </div>
      </div>
      <p className="wish-title">{title}</p>
      <p className="wish-category">{category}</p>
      <p className="wish-price">&#8358;{price}</p>
    </div>
  );
};

export default WishItem;
