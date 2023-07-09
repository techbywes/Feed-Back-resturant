import React, { useState, useRef, useEffect } from "react";
import profileimage from "../images/testimonial-1.png";
import ProfileModel from "../componenets/ProfileModel";

function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const profileRef = useRef(null);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleProfileIconClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (profileRef.current && !profileRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  return (
    <div className="profile_general_div" ref={profileRef}>
      {isOpen && <ProfileModel />}
      <div className="profile_img_div" onClick={handleProfileIconClick}>
        <img className="profile_img" src={profileimage} alt="" />
      </div>
    </div>
  );
}

export default Profile;
