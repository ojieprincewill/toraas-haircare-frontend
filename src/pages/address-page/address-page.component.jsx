import React from "react";
import Navigation from "../../components/navigation/navigation.component";
import UpdateShipping from "../../components/account/update-shipping/update-shipping.component";
import FooterSection from "../../components/footer-section/footer-section.component";

const AddressPage = () => {
  return (
    <>
      <Navigation />
      <UpdateShipping />
      <FooterSection />
    </>
  );
};

export default AddressPage;
