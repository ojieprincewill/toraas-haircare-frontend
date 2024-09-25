import React, { useState } from "react";
import "./login.styles.scss";
import SignIn from "../sign-in/sign-in.component";
import SignUp from "../sign-up/sign-up.component";

const Login = () => {
  const loginImage = "https://i.ibb.co/f1Xdpz4/toraa-logo-3-edited.jpg";
  const [activeHeader, setActiveHeader] = useState("sign in");

  const toggleActiveHeader = (headerName) => {
    setActiveHeader(headerName);
  };

  return (
    <div className="login-container">
      <div className="login-section">
        <div className="headers">
          <p
            className={`header ${activeHeader === "sign in" && "active"}`}
            onClick={() => toggleActiveHeader("sign in")}
          >
            sign in
          </p>
          <p
            className={`header ${activeHeader === "register" && "active"}`}
            onClick={() => toggleActiveHeader("register")}
          >
            register
          </p>
        </div>
        {activeHeader === "sign in" && (
          <SignIn handleSwitch={() => toggleActiveHeader("register")} />
        )}
        {activeHeader === "register" && <SignUp />}
      </div>
      <div className="login-image-cont">
        <img src={loginImage} alt="toraa-logo" className="login-image" />
      </div>
    </div>
  );
};

export default Login;
