import React, { useState } from "react";
import "./user-icon.styles.scss";
import { IoPersonOutline } from "react-icons/io5";
import UserIconDropdown from "../user-icon-dropdown/user-icon-dropdown.component";
import { useSelector } from "react-redux";

const UserIcon = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleIconClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="user-cont">
      {currentUser ? (
        <span className="user-name">{`Hi, ${currentUser.displayName}!`}</span>
      ) : null}
      <IoPersonOutline
        className={`user-icon ${showDropdown && "active"}`}
        onClick={handleIconClick}
      />
      {showDropdown && <UserIconDropdown />}
    </div>
  );
};

export default UserIcon;
