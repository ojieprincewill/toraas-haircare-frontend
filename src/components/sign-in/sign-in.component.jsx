import React, { useState } from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { signInWithEmailAndPassword } from "firebase/auth";
import LoadingSpinner from "../loading-spinner/loading-spinner.component";

const SignIn = ({ handleSwitch }) => {
  const navigate = useNavigate();
  const [signedIn, setSignedIn] = useState({
    email: "",
    password: "",
  });
  const [signInError, setSignInError] = useState(null);
  const [loggingIn, setLoggingIn] = useState(false);

  const handleOrigins = () => {
    window.scrollTo(0, 0);
  };

  const handleRedirect = () => {
    const intendedCheckoutUrl = localStorage.getItem("intendedCheckoutUrl");
    const intendedAccountUrl = localStorage.getItem("intendedAccountUrl");

    if (intendedAccountUrl) {
      navigate(intendedAccountUrl);
      handleOrigins();
      localStorage.removeItem("intendedAccountUrl");
    } else if (intendedCheckoutUrl) {
      navigate(intendedCheckoutUrl);
      handleOrigins();
      localStorage.removeItem("intendedCheckoutUrl");
    } else {
      navigate("/");
      handleOrigins();
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = signedIn;

    try {
      setLoggingIn(true);
      await signInWithEmailAndPassword(auth, email, password);
      setSignedIn({ email: "", password: "" });
      setSignInError(null);

      await handleRedirect();
    } catch (error) {
      console.error(error);
      if (error.code === "auth/network-request-failed") {
        setSignInError("Network error. Please check your internet connection.");
      } else {
        setSignInError("Invalid email or password. Please try again.");
      }
      setSignedIn({ ...signedIn, password: "" });
    } finally {
      setLoggingIn(false);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setSignedIn((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const { email, password } = signedIn;
  return (
    <div className="sign-in-cont">
      <p className="sign-in-title">Sign in with your email and password</p>

      {loggingIn && <LoadingSpinner />}

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={email}
          label="Email"
          required
        />

        <FormInput
          name="password"
          type="password"
          handleChange={handleChange}
          value={password}
          label="Password"
          required
        />

        {signInError && <p className="error-message">{signInError}</p>}

        <button type="submit" className="sign-in-btn">
          sign in
        </button>
        <p className="cta-text">
          Don't have an account yet?{" "}
          <span className="sign-up-link" onClick={handleSwitch}>
            Sign up now
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
