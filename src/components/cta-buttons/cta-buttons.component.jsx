import React from "react";
import "./cta-buttons.styles.scss";

const CtaButtons = ({ closeQuickView, handleRedirect }) => {
  return (
    <div className="modal-btn-flex">
      <button onClick={closeQuickView} className="modal-btn">
        continue shopping
      </button>
      <button onClick={handleRedirect} className="modal-btn">
        go to checkout
      </button>
    </div>
  );
};

export default CtaButtons;
