import React from "react";
import Navigation from "../../components/navigation/navigation.component";
import FooterSection from "../../components/footer-section/footer-section.component";
import Contact from "../../components/contact/contact.component";
import ContactHeader from "../../components/contact/contact-header.component";

const ContactPage = () => {
  return (
    <>
      <Navigation />
      <ContactHeader />
      <Contact />
      <FooterSection />
    </>
  );
};

export default ContactPage;
