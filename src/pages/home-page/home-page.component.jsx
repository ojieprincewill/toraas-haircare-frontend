import React from "react";
import Navigation from "../../components/navigation/navigation.component";
import LandingHeader from "../../components/landing-header/landing-header.component";
import FooterSection from "../../components/footer-section/footer-section.component";

const HomePage = () => {
  return (
    <>
      <Navigation />
      <LandingHeader />
      <FooterSection />
    </>
  );
};

export default HomePage;
