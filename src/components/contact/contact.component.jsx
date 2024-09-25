import React from "react";
import "./contact.styles.scss";
import { MdLocalPhone, MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="contact-form">
      <div className="form">
        <p className="form-header">Say something...</p>
        <div>
          <p className="label">email</p>
          <input type="text" className="form-field" required />
        </div>
        <div>
          <p className="label">subject</p>
          <input type="text" className="form-field" required />
        </div>
        <div>
          <p className="label">Message</p>
          <textarea className="textarea" required />
        </div>
        <div>
          <button className="send-btn">Send message</button>
        </div>
      </div>
      <div className="contact-info-cont">
        <p className="info-header">Reach Out to Us!</p>
        <p className="contact-text">
          Below are corresponding contact information
        </p>
        <div className="info-flex">
          <span className="contact-icon">
            <MdLocalPhone />
          </span>
          <p className="info-text">+234 905 310 8229</p>
        </div>
        <div className="info-flex">
          <span className="contact-icon">
            <MdEmail />
          </span>
          <p className="info-text">toraas.haircare12@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
