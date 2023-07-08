import React, { useState } from "react";
import profileimage from "../images/testimonial-1.png";
import ProfileModel from "./ProfileModel";

function Profile() {
  const [isOpen, setIsOpen] = useState(false);

  const handleProfileIconClick = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseModel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="profile_general_div" onClick={handleProfileIconClick} >
      {isOpen && <ProfileModel />}
      <div className="profile_img_div">
        <img className="profile_img" src={profileimage} />
      </div>
      {isOpen && (
        <div className="overlay" onClick={handleCloseModel}></div>
      )}
    </div>
  );
}

export default Profile;
