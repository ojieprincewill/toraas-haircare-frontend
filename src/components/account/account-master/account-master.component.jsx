import React, { useState, useEffect, useMemo } from "react";

import "./account-master.styles.scss";

import { auth } from "../../../firebase/firebase.utils";
import { signOut } from "firebase/auth";
import { useNavigate, Link, Routes, Route } from "react-router-dom";

import AccountOverview from "../account-overview/account-overview.component";
import Orders from "../orders/orders.component";
import AddressDetails from "../address-details/address-details.component";
import AccountSettings from "../account-settings/account-settings.component";
import {
  IoPersonOutline,
  IoBagOutline,
  IoSettingsOutline,
  IoBusinessOutline,
  IoLogOutOutline,
} from "react-icons/io5";

const AccountMaster = () => {
  const accountOptions = useMemo(
    () => [
      {
        label: "My Account",
        path: "overview",
        icon: <IoPersonOutline />,
        component: <AccountOverview />,
      },
      {
        label: "Orders",
        path: "orders",
        icon: <IoBagOutline />,
        component: <Orders />,
      },
      {
        label: "Address",
        path: "address",
        icon: <IoBusinessOutline />,
        component: <AddressDetails />,
      },
      {
        label: "Account settings",
        path: "settings",
        icon: <IoSettingsOutline />,
        component: <AccountSettings />,
      },
    ],
    []
  );

  const [selectedOption, setSelectedOption] = useState(0);

  const navigate = useNavigate();

  const [isDetailsVisible, setDetailsVisibility] = useState(false);

  const isPhoneScreen = window.innerWidth <= 600;

  const mlImage = "https://i.ibb.co/N1nW0zD/toraa-logo-3.jpg";

  const handleOrigins = () => {
    window.scrollTo(0, 0);
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

  useEffect(() => {
    const currentOption = accountOptions[selectedOption];

    if (
      !window.location.pathname.includes("/account/") &&
      !selectedOption &&
      currentOption
    ) {
      setSelectedOption(0);
      navigate(`/account/${currentOption.path}`);
    } else {
      const newSelectedOption = accountOptions.findIndex((option) =>
        window.location.pathname.includes(option.path)
      );

      if (newSelectedOption !== -1) {
        setSelectedOption(newSelectedOption);
      }
    }
  }, [selectedOption, accountOptions, navigate]);

  if (isPhoneScreen) {
    const handleOptionClick = (option) => {
      setSelectedOption(option.label);
      setDetailsVisibility(true);
    };

    const handleBackButtonClick = () => {
      setDetailsVisibility(false);
    };

    return (
      <div className="account-container">
        <div className={`account-master ${isDetailsVisible ? "hidden" : ""}`}>
          {accountOptions.map((option) => (
            <Link
              key={option.label}
              to={`/account/${option.path}`}
              className={`master-option`}
              onClick={() => handleOptionClick(option)}
            >
              <span className="master-icon">{option.icon}</span>
              {option.label}
            </Link>
          ))}
          <div className="log-btn-cont">
            <button className="log-btn" onClick={handleSignOut}>
              sign out{" "}
              <span className="log-btn-icon">
                <IoLogOutOutline />
              </span>
            </button>
          </div>
        </div>
        <div className={`details ${isDetailsVisible ? "visible" : "hidden"}`}>
          <button className="back-btn" onClick={handleBackButtonClick}>
            back
          </button>
          <Routes>
            {accountOptions.map((option) => (
              <Route
                key={option.label}
                path={`/${option.path}`}
                element={option.component}
              />
            ))}
          </Routes>
        </div>
      </div>
    );
  }

  return (
    <div className="account-container">
      <div className="master-logo">
        <div className="account-master">
          {accountOptions.map((option, index) => (
            <Link
              key={option.label}
              to={`/account/${option.path}`}
              className={`master-option ${
                selectedOption === index ? "active" : ""
              }`}
              onClick={() => setSelectedOption(index)}
            >
              <span className="master-icon">{option.icon}</span>
              {option.label}
            </Link>
          ))}
          <div className="log-btn-cont">
            <button className="log-btn" onClick={handleSignOut}>
              sign out{" "}
              <span className="log-btn-icon">
                <IoLogOutOutline />
              </span>
            </button>
          </div>
        </div>
        <div className="ml-image-cont">
          <img src={mlImage} alt="toraa-logo" className="ml-image" />
        </div>
      </div>
      <div className="details">
        <Routes>
          {accountOptions.map((option) => (
            <Route
              key={option.label}
              path={`/${option.path}`}
              element={option.component}
            />
          ))}
        </Routes>
      </div>
    </div>
  );
};

export default AccountMaster;
