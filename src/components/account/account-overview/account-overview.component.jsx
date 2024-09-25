import React from "react";

import "./account-overview.styles.scss";
import AccountDetails from "../account-details/account-details.component";
import AddressBook from "../address-book/address-book.component";

const AccountOverview = () => {
  return (
    <>
      <div className="title-cont">
        <p className="main-title">Account Overview</p>
      </div>
      <div className="overview">
        <AccountDetails />
        <AddressBook />
      </div>
    </>
  );
};

export default AccountOverview;
