import React from "react";

import { useSelector } from "react-redux";

import "./order-details.styles.scss";

const OrderDetails = ({ closeDetails }) => {
  const selectedOrder = useSelector(
    (state) => state.orderHistory.selectedOrder
  );

  return (
    <div className="order-details-modal">
      <div className="order-details-content">
        <button className="back" onClick={closeDetails}>
          go back
        </button>
        <p className="details-mainheader">Order Details</p>
        <div className="details-main-flex">
          <span className="details-subheader">Order Number:</span>
          <span className="details-subtext">{selectedOrder.orderNumber}</span>
        </div>
        <div className="details-main-flex">
          <span className="details-subheader">Order Date:</span>
          <span className="details-subtext">{selectedOrder.orderDate}</span>
        </div>
        <div className="wrapper">
          <div className="head-cont">
            <span className="head">Products</span>
            <span className="head">Description</span>
            <span className="head">Price</span>
            <span className="head">Quantity</span>
          </div>
          {selectedOrder.products.map((product) => (
            <div key={product.id} className="detail-cont">
              <span className="detail-item">
                <div className="order-image-cont">
                  <img
                    src={product.image}
                    alt={`${product.title}`}
                    className="order-image"
                  />
                </div>
              </span>
              <span className="detail-item">{product.title}</span>
              <span className="detail-item">${product.price}</span>
              <span className="detail-item">{product.quantity}</span>
            </div>
          ))}
        </div>
        <div className="order-total">Total: ${selectedOrder.total}</div>
      </div>
    </div>
  );
};

export default OrderDetails;
