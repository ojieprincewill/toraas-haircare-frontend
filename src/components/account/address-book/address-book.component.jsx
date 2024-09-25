import React from "react";

import "./address-book.styles.scss";

import { useSelector } from "react-redux";

const AddressBook = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const shippingAddress = useSelector((state) => state.user.shippingAddress);

  return (
    <div className="address-book">
      <div className="address-header-cont">
        <p className="address-header">Address</p>
      </div>
      <div className="address-details-cont">
        <p className="address-label">your default shipping address:</p>

        {currentUser &&
          (shippingAddress ? (
            <div>
              <p className="address">
                <span className="title">Name:</span> {shippingAddress.name}
              </p>
              <p className="address">
                <span className="title">Address:</span>{" "}
                {shippingAddress.address}.
              </p>
              <p className="address">
                <span className="title">City:</span> {shippingAddress.city}
              </p>
              <p className="address">
                <span className="title">State:</span> {shippingAddress.state}
              </p>
              <p className="address">
                <span className="title">Country:</span>{" "}
                {shippingAddress.country}
              </p>
              <p className="address">
                <span className="title">Postal Code:</span>{" "}
                {shippingAddress.postalCode}
              </p>
            </div>
          ) : (
            <p className="address">
              No shipping address found. Please update your shipping address.
            </p>
          ))}
      </div>
    </div>
  );
};

export default AddressBook;
