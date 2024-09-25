import React from "react";

import "./orders.styles.scss";
import OrderHistory from "../order-history/order-history.component";

const Orders = () => {
  return (
    <>
      <div className="title-cont">
        <p className="main-title">Order History</p>
      </div>
      <OrderHistory />
    </>
  );
};

export default Orders;
