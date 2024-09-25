import React from "react";
import PolicyHeader from "../../components/policy/policy-header/policy-header.component";
import PolicyGrid from "../../components/policy/policy-grid/policy-grid.component";
import FooterSection from "../../components/footer-section/footer-section.component";
import Navigation from "../../components/navigation/navigation.component";

const PolicyPage = () => {
  return (
    <>
      <Navigation />
      <PolicyHeader />
      <PolicyGrid />
      <FooterSection />
    </>
  );
};

export default PolicyPage;
