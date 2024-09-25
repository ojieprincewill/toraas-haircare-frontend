import React from "react";
import "./quickview-display.styles.scss";
import { HiOutlineMagnifyingGlassPlus } from "react-icons/hi2";

const QuickviewDisplay = ({ openQuickView }) => {
  return (
    <div className="product-icon" onClick={openQuickView}>
      <HiOutlineMagnifyingGlassPlus className="quickview-icon" />
    </div>
  );
};

export default QuickviewDisplay;
