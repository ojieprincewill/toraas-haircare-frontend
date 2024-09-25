import React from "react";
import Navigation from "../../components/navigation/navigation.component";
import Login from "../../components/login/login.component";
import FooterSection from "../../components/footer-section/footer-section.component";
import AccountHeader from "../../components/account/account-header/account-header.component";

const LoginPage = () => {
  return (
    <>
      <Navigation />
      <AccountHeader />
      <Login />
      <FooterSection />
    </>
  );
};

export default LoginPage;
