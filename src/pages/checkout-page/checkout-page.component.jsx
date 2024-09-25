import React from "react";
import Navigation from "../../components/navigation/navigation.component";
import CheckoutHeader from "../../components/checkout/checkout-header/checkout-header.component";
import Checkout from "../../components/checkout/checkout-content/checkout.component";
import FooterSection from "../../components/footer-section/footer-section.component";

const CheckoutPage = () => {
  return (
    <>
      <Navigation />
      <CheckoutHeader />
      <Checkout />
      <FooterSection />
    </>
  );
};

export default CheckoutPage;
