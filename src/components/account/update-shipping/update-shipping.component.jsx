import React, { useState } from "react";

import "./update-shipping.styles.scss";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateNewShippingAddress } from "../../../features/user/userSlice";
import FormInput from "../../form-input/form-input.component";
import LoadingSpinner from "../../loading-spinner/loading-spinner.component";

const UpdateShipping = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const shippingAddress = useSelector((state) => state.user.shippingAddress);
  const dispatch = useDispatch();

  const [newShippingAddress, setNewShippingAddress] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewShippingAddress({
      ...newShippingAddress,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await dispatch(
        updateNewShippingAddress({
          userId: currentUser.uid,
          newShippingAddress,
        })
      );

      alert("Shipping address updated successfully!");
    } catch (error) {
      console.error("Error updating shipping address:", error);
      setError("Failed to update shipping address. Please try again.");
    } finally {
      setLoading(false);
      setNewShippingAddress({
        name: "",
        address: "",
        city: "",
        state: "",
        postalCode: "",
        country: "",
      });
    }
  };

  const { name, address, city, state, postalCode, country } =
    newShippingAddress;

  return (
    <div className="ship-wrapper">
      <div className="ship-breadcrumbs">
        <Link
          to="/"
          onClick={() => window.scrollTo(0, 0)}
          className="ship-breadlink"
        >
          Home <span className="ship-slash">{"/"}</span>
        </Link>
        <Link
          to="/account/settings"
          onClick={() => window.scrollTo(0, 0)}
          className="ship-breadlink"
        >
          Account Settings <span className="ship-slash">{"/"}</span>
        </Link>{" "}
        <span className="ship-breadtitle">update address</span>
      </div>

      <div className="current-address-cont">
        <p className="update-header">Current address:</p>

        {shippingAddress ? (
          <div>
            <p className="address">
              <span className="title">Name:</span> {shippingAddress.name}
            </p>
            <p className="address">
              <span className="title">Address:</span> {shippingAddress.address}.
            </p>
            <p className="address">
              <span className="title">City:</span> {shippingAddress.city}
            </p>
            <p className="address">
              <span className="title">State:</span> {shippingAddress.state}
            </p>
            <p className="address">
              <span className="title">Country:</span> {shippingAddress.country}
            </p>
            <p className="address">
              <span className="title">Postal Code:</span>{" "}
              {shippingAddress.postalCode}
            </p>
          </div>
        ) : (
          <p className="address">
            No shipping address found. Please add your shipping address.
          </p>
        )}
      </div>

      <div className="new-address-cont">
        <p className="update-header">Update address:</p>

        <form onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            label="Name"
            required
          />

          <FormInput
            type="text"
            name="address"
            value={address}
            onChange={handleChange}
            label="Address"
            required
          />

          <FormInput
            type="text"
            name="city"
            value={city}
            onChange={handleChange}
            label="City"
            required
          />

          <FormInput
            type="text"
            name="state"
            value={state}
            onChange={handleChange}
            label="State"
            required
          />

          <FormInput
            type="text"
            name="postalCode"
            value={postalCode}
            onChange={handleChange}
            label="Postal Code"
            required
          />

          <FormInput
            type="text"
            name="country"
            value={country}
            onChange={handleChange}
            label="Country"
            required
          />

          <button type="submit" className="update-ship-btn">
            {loading ? "Updating" : "Save Changes"}
          </button>

          {error && <p className="error-message">{error}</p>}

          {loading && <LoadingSpinner />}
        </form>
      </div>
    </div>
  );
};

export default UpdateShipping;
