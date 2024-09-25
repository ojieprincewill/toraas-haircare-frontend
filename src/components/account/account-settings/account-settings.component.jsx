import React from "react";

import "./account-settings.styles.scss";
import { Link } from "react-router-dom";

const AccountSettings = () => {
  return (
    <>
      <div className="title-cont">
        <p className="main-title">Account management</p>
      </div>
      <div className="manage-options">
        <Link
          to="/account/settings/password"
          onClick={() => window.scrollTo(0, 0)}
          className="option"
        >
          Update password
        </Link>
        <Link
          to="/account/settings/address"
          onClick={() => window.scrollTo(0, 0)}
          className="option"
        >
          Update Address
        </Link>
      </div>
    </>
  );
};

export default AccountSettings;
