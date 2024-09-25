import React from "react";
import PolicyDetails from "../../components/policy/policy-details/policy-details.component";
import Navigation from "../../components/navigation/navigation.component";
import FooterSection from "../../components/footer-section/footer-section.component";

const PolicyDetailsPage = () => {
  return (
    <>
      <Navigation />
      <PolicyDetails />
      <FooterSection />
    </>
  );
};

export default PolicyDetailsPage;
