import React from "react";
import "./search-button.styles.scss";
import { IoSearchOutline, IoCloseSharp } from "react-icons/io5";

const SearchButton = ({ isActive, toggleSearch }) => {
  return (
    <>
      <button
        onClick={toggleSearch}
        className={`search-btn ${isActive && "active"}`}
      >
        {isActive ? (
          <IoCloseSharp className="search-icon" />
        ) : (
          <IoSearchOutline className="search-icon" />
        )}
        search
      </button>
    </>
  );
};

export default SearchButton;
