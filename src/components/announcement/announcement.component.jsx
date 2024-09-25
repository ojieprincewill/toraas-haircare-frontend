import React, { useState } from "react";
import "./announcement.styles.scss";
import { IoCloseSharp } from "react-icons/io5";

const Announcement = () => {
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  const dismissAnnouncement = () => {
    setShowAnnouncement(false);
  };

  return (
    <>
      {showAnnouncement && (
        <div className="announcement-cont">
          <p className="announcement-text">
            Save 5% on all kits! Use code KITDEAL5 at checkout
          </p>
          <IoCloseSharp
            className="announcement-close"
            onClick={dismissAnnouncement}
          />
        </div>
      )}
    </>
  );
};

export default Announcement;
