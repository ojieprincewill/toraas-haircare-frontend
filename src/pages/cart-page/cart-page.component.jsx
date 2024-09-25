import React from "react";
import CartContent from "../../components/cart/cart-content/cart-content.component";
import Navigation from "../../components/navigation/navigation.component";
import FooterSection from "../../components/footer-section/footer-section.component";
import CartHeader from "../../components/cart/cart-header/cart-header.component";

const CartPage = () => {
  return (
    <>
      <Navigation />
      <CartHeader />
      <CartContent />
      <FooterSection />
    </>
  );
};

export default CartPage;
