import React, { useState } from "react";
import "./wish-content.styles.scss";
import { useSelector, useDispatch } from "react-redux";
import { removeWishItem } from "../../../features/wishlist/wishlistSlice";
import { addItem } from "../../../features/cart/cartSlice";
import WishItem from "../wish-item/wish-item.component";

const WishContent = () => {
  const dispatch = useDispatch();
  const wishItems = useSelector((state) => state.wishlist.wishlistItems);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectItem = (itemId, isSelected) => {
    if (isSelected) {
      setSelectedItems((prevSelectedItems) => [...prevSelectedItems, itemId]);
    } else {
      setSelectedItems((prevSelectedItems) =>
        prevSelectedItems.filter((id) => id !== itemId)
      );
    }
  };

  const handleAddSelectedItems = () => {
    const itemsToAdd = wishItems.filter((item) =>
      selectedItems.includes(item.id)
    );

    itemsToAdd.forEach((item) => {
      dispatch(addItem(item));
      dispatch(removeWishItem(item));
    });

    setSelectedItems([]);
  };

  return (
    <div className="wish-content-cont">
      <div className="content-header">
        <span className="header-block">product</span>
        <span className="header-block">description</span>
        <span className="header-block">category</span>
        <span className="header-block">price</span>
      </div>
      <div className="wish-item-cont">
        {wishItems.length ? (
          <div>
            {wishItems.map((wishItem) => (
              <WishItem
                key={wishItem.id}
                product={wishItem}
                handleSelectItem={handleSelectItem}
              />
            ))}
          </div>
        ) : (
          <span className="empty-message">
            No products were added to the wishlist
          </span>
        )}
      </div>
      {wishItems.length > 0 ? (
        <div className="transfer-btn-cont">
          <button className="transfer-btn" onClick={handleAddSelectedItems}>
            Add selected items to cart
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default WishContent;
