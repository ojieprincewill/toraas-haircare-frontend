import React from "react";
import "./footer-section.styles.scss";
import { Link } from "react-router-dom";
import { FOOTER_DATA } from "../../data/footer-data/footer.data";
import { POLICY_DATA } from "../../data/policy-data/policy.data";
import FooterLogo from "../logo/footer-logo/footer-logo.component";

const FooterSection = () => {
  const footerData = FOOTER_DATA;
  const policyData = POLICY_DATA;
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-section">
      <div className="footer">
        <div className="logo-socials-cont">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <FooterLogo />
          </Link>
          <div className="socials-cont">
            {footerData.map((data) =>
              data.socials.map((data, index) => (
                <Link to={data.iconTarget} key={index} className="social-icon">
                  <span>{data.icon}</span>
                </Link>
              ))
            )}
          </div>
        </div>
        {footerData.map((data, id) => (
          <div key={id} className="footer-segment">
            <p className="segment-title">{data.title}</p>
            <div className="segment-links">
              {data.links.map((data, index) => (
                <Link
                  to={data.target}
                  key={index}
                  onClick={() => window.scrollTo(0, 0)}
                  className="segment-link"
                >
                  <span>{data.text}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
        <div className="footer-segment">
          <p className="segment-title">terms</p>
          <div className="segment-links">
            {policyData.map((data, id) => (
              <Link
                to={`/policy/${data.id}`}
                key={id}
                className="segment-link"
                onClick={() => window.scrollTo(0, 0)}
              >
                {data.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <p className="copyright">
        &copy; {currentYear} Toraa's Haircare. All rights reserved.
      </p>
    </div>
  );
};

export default FooterSection;
