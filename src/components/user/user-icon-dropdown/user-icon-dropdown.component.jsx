import React from "react";
import "./user-icon-dropdown.styles.scss";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { auth } from "../../../firebase/firebase.utils";
import { signOut } from "firebase/auth";
import { IoLogInOutline, IoLogOutOutline } from "react-icons/io5";
import { MdOutlineManageAccounts } from "react-icons/md";

const UserIconDropdown = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.currentUser);

  const handleOrigins = () => {
    window.scrollTo(0, 0);
  };

  const handleAccountLink = () => {
    if (!currentUser) {
      localStorage.setItem("intendedAccountUrl", "/account");
      navigate("/signin");
      handleOrigins();
    } else {
      navigate("/account");
      handleOrigins();
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
      handleOrigins();
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <div className="dropdown-cont">
      {currentUser ? (
        <p className="dropdown-option" onClick={handleSignOut}>
          sign out{" "}
          <span className="dropdown-icon">
            <IoLogOutOutline />
          </span>
        </p>
      ) : (
        <Link
          to="/signin"
          onClick={() => window.scrollTo(0, 0)}
          className="dropdown-option"
        >
          sign in{" "}
          <span className="dropdown-icon">
            <IoLogInOutline />
          </span>
        </Link>
      )}

      <p className="dropdown-option" onClick={handleAccountLink}>
        my account{" "}
        <span className="dropdown-icon">
          <MdOutlineManageAccounts />
        </span>
      </p>
    </div>
  );
};

export default UserIconDropdown;
