import React from "react";
import "./search-bar.styles.scss";
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = ({ searchQuery, onSearchChange, isSearchActive }) => {
  return (
    <div className={`search-cont ${isSearchActive ? "animate" : ""}`}>
      <input
        type="search"
        placeholder="search"
        className="search-input"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <IoSearchOutline className="search-icon" />
    </div>
  );
};

export default SearchBar;
