import React from "react";

import "./address-details.styles.scss";
import AddressBook from "../address-book/address-book.component";

const AddressDetails = () => {
  return (
    <>
      <div className="title-cont">
        <p className="main-title">Address</p>
      </div>
      <div className="address-cont">
        <AddressBook />
      </div>
    </>
  );
};

export default AddressDetails;
