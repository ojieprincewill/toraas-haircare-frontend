import React from "react";
import Navigation from "../../components/navigation/navigation.component";
import FaqHeader from "../../components/faq-section/faq-header/faq-header.component";
import Faq from "../../components/faq-section/faq/faq.component";
import FooterSection from "../../components/footer-section/footer-section.component";

const FaqPage = () => {
  return (
    <>
      <Navigation />
      <FaqHeader />
      <Faq />
      <FooterSection />
    </>
  );
};

export default FaqPage;
