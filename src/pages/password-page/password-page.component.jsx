import React from "react";
import ChangePassword from "../../components/account/change-password/change-password.component";
import Navigation from "../../components/navigation/navigation.component";
import FooterSection from "../../components/footer-section/footer-section.component";

const PasswordPage = () => {
  return (
    <>
      <Navigation />
      <ChangePassword />
      <FooterSection />
    </>
  );
};

export default PasswordPage;
