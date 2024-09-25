import React from "react";
import "./policy-details.styles.scss";
import { POLICY_DATA } from "../../../data/policy-data/policy.data";
import { Link, useParams } from "react-router-dom";

const PolicyDetails = () => {
  const { policyId } = useParams();
  const policyData = POLICY_DATA;
  const selectedPolicy = policyData.find(
    (policy) => policy.id === Number(policyId)
  );
  const { title, description, content } = selectedPolicy;

  return (
    <>
      <div className="details-header-cont">
        <p className="details-header">{title}</p>
      </div>

      <div className="details-container">
        <div className="details-breadcrumbs">
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="details-breadlink"
          >
            Home <span className="details-slash">{"/"}</span>
          </Link>
          <Link
            to="/policy"
            onClick={() => window.scrollTo(0, 0)}
            className="details-breadlink"
          >
            Policy <span className="details-slash">{"/"}</span>
          </Link>{" "}
          <span className="details-breadtitle">{title}</span>
        </div>

        <div className="title-cont">
          <p className="title">{title}</p>
          <p className="description">{description}</p>
        </div>

        {content.map((item, index) => (
          <div key={index} className="content-cont">
            <p className="content-header">- {item.header}</p>
            <p className="content-text">{item.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default PolicyDetails;
