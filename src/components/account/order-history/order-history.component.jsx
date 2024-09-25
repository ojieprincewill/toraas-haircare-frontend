import React, { useEffect, useState } from "react";

import "./order-history.styles.scss";

import { useSelector, useDispatch } from "react-redux";
import {
  fetchOrderHistory,
  selectOrder,
} from "../../../features/orders/orderHistorySlice";
import LoadingSpinner from "../../loading-spinner/loading-spinner.component";
import OrderDetails from "../order-details/order-details.component";

const OrderHistory = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const orderHistory = useSelector((state) => state.orderHistory.orders);
  const orderHistoryStatus = useSelector((state) => state.orderHistory.status);
  const [isDetailOpen, setDetailOpen] = useState(false);

  useEffect(() => {
    if (currentUser) {
      dispatch(fetchOrderHistory(currentUser.uid));
    }
  }, [currentUser, dispatch]);

  const handleViewDetails = async (order) => {
    await dispatch(selectOrder(order));
    setDetailOpen(true);
  };

  const handleDetailsClose = () => {
    setDetailOpen(false);
  };

  return (
    <div className="order-history">
      {orderHistoryStatus === "loading" && <LoadingSpinner />}

      <>
        <div className="order-header-cont">
          <span className="order-header">Order Number</span>
          <span className="order-header">Order Date</span>
          <span className="order-header">Total</span>
          <span className="order-header">Status</span>
          <span className="order-header">Actions</span>
        </div>

        {orderHistory.length === 0 && (
          <p className="empty-message">No orders placed yet.</p>
        )}

        {orderHistory.map((order) => (
          <div className="order-detail-cont" key={order.id}>
            <span className="order-text">{order.orderNumber}</span>
            <span className="order-text">{order.orderDate}</span>
            <span className="order-text">${order.total}</span>
            <span className="order-text">{order.status}</span>
            <span className="order-text">
              <button
                className="detail-button"
                onClick={() => handleViewDetails(order)}
              >
                View Details
              </button>
            </span>
          </div>
        ))}
        {isDetailOpen && <OrderDetails closeDetails={handleDetailsClose} />}
      </>
    </div>
  );
};

export default OrderHistory;
