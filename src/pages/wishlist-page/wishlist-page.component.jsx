import React from "react";
import Navigation from "../../components/navigation/navigation.component";
import WishlistHeader from "../../components/wishlist/wishlist-header/wishlist-header.component";
import WishContent from "../../components/wishlist/wish-content/wish-content.component";
import FooterSection from "../../components/footer-section/footer-section.component";

const WishlistPage = () => {
  return (
    <>
      <Navigation />
      <WishlistHeader />
      <WishContent />
      <FooterSection />
    </>
  );
};

export default WishlistPage;
