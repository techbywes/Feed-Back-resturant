import React, { useState } from "react";
import close from "../images/close.png";
import profileicon from "../images/testimonial-1.png";
import ModelLinks from "./ModelLinks";
function ProfileModel() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="profileMode_div">
      <div className="profile_model">
        <div className="user_img_username_name">
          <div className="profile_img_open_div">
            <img className="open_model_user_img" src={profileicon} alt="" />
          </div>
          <div className="username_name_div">
            <p className="p_username_text">Techbywes</p>
            <p className="p_name_text">Wisdom Samuel</p>
          </div>
          <div className="close_btn_div">
            <img
              className="close_btn"
              src={close}
              alt="Close"
              onClick={handleClose}
            />
          </div>
        </div>
        <ModelLinks />
      </div>
    </div>
  );
}

export default ProfileModel;
