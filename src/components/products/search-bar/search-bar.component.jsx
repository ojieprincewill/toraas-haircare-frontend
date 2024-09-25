import React from "react";
import "./search-bar.styles.scss";
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = ({ isSearchActive }) => {
  return (
    <div className={`search-cont ${isSearchActive ? "animate" : ""}`}>
      <input type="search" placeholder="search" className="search-input" />
      <IoSearchOutline className="search-icon" />
    </div>
  );
};

export default SearchBar;
