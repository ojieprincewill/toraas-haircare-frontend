import React from "react";
import "./policy-grid.styles.scss";
import { POLICY_DATA } from "../../../data/policy-data/policy.data";
import { Link } from "react-router-dom";

const PolicyGrid = () => {
  const policyData = POLICY_DATA;
  const policyImage = "https://i.ibb.co/f1Xdpz4/toraa-logo-3-edited.jpg";

  return (
    <div className="policy-grid-container">
      <div className="policy-options-cont">
        {policyData.map((policy, id) => (
          <Link
            to={`/policy/${policy.id}`}
            key={id}
            className="policy-option"
            onClick={() => window.scrollTo(0, 0)}
          >
            {policy.title}
          </Link>
        ))}
      </div>
      <div className="policy-image-cont">
        <img src={policyImage} alt="policy-image" className="policy-image" />
      </div>
    </div>
  );
};

export default PolicyGrid;
