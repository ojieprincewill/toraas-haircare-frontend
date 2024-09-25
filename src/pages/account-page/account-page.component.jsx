import React from "react";
import Navigation from "../../components/navigation/navigation.component";
import AccountHeader from "../../components/account/account-header/account-header.component";
import FooterSection from "../../components/footer-section/footer-section.component";
import AccountMaster from "../../components/account/account-master/account-master.component";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AccountPage = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();

  const handleOrigins = () => {
    window.scrollTo(0, 0);
  };

  if (!currentUser) {
    navigate("/signin");
    handleOrigins();
  }

  return (
    <>
      <Navigation />
      <AccountHeader />
      <AccountMaster />
      <FooterSection />
    </>
  );
};

export default AccountPage;
