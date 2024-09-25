import React from "react";
import Navigation from "../../components/navigation/navigation.component";
import ShopHeader from "../../components/shop-header/shop-header.component";
import ProductsContainer from "../../components/products/products-general-container/products-container.component";
import FooterSection from "../../components/footer-section/footer-section.component";

const ShopPage = () => {
  return (
    <>
      <Navigation />
      <ShopHeader />
      <ProductsContainer />
      <FooterSection />
    </>
  );
};

export default ShopPage;
