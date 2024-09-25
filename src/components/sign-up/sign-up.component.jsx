import React, { useState } from "react";
import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input.component";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../loading-spinner/loading-spinner.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const SignUp = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [signingUp, setSigningUp] = useState(false);
  const [error, setError] = useState("");

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

    const { displayName, email, password, confirmPassword } = details;

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setSigningUp(true);
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await createUserProfileDocument(user, {
        displayName,
      });

      await updateProfile(user, { displayName });

      setDetails({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      await handleRedirect();
    } catch (error) {
      console.error(error);

      if (error.code === "auth/email-already-in-use") {
        setError("User already exists. Please sign in instead.");
      } else if (error.code === "auth/network-request-failed") {
        setError("Network error. Please check your internet connection.");
      } else {
        setError("An error occurred during sign-up. Please try again.");
      }
    } finally {
      setSigningUp(false);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const { displayName, email, password, confirmPassword } = details;

  return (
    <div className="sign-up-cont">
      <p className="sign-up-title">Register with your email and password</p>

      {signingUp && <LoadingSpinner />}

      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Username"
          required
        />

        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />

        <FormInput
          type="password"
          name="password"
          value={password}
          label="Password"
          onChange={handleChange}
          required
        />

        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="sign-up-btn">
          register
        </button>
      </form>
    </div>
  );
};

export default SignUp;
