import React, { useState } from "react";
import "./form-input.styles.scss";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const FormInput = ({ handleChange, label, type, ...otherProps }) => {
  const isPasswordInput = type === "password";
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="group">
      <input
        className="form-input"
        onChange={handleChange}
        type={isPasswordInput ? (showPassword ? "text" : "password") : type}
        {...otherProps}
      />
      {label ? (
        <label
          className={`${otherProps.value ? "shrink" : ""} form-input-label`}
        >
          {label}
        </label>
      ) : null}
      {isPasswordInput && (
        <span className="toggle-password" onClick={handleTogglePassword}>
          {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
        </span>
      )}
    </div>
  );
};

export default FormInput;
