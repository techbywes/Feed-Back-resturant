import React, { useState, useRef, useEffect } from "react";
import profileimage from "../images/testimonial-1.png";
import ProfileModel from "./ProfileModel";

function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const profileRef = useRef(null);

  const handleProfileIconClick = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseModel = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = event => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

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
    <div
      className="profile_general_div"
      ref={profileRef}
      onClick={handleProfileIconClick}
    >
      {isOpen && (
        <>
          <ProfileModel />
          <div className="overlay"></div>
        </>
      )}
      <div className="profile_img_div">
        <img className="profile_img" src={profileimage} alt="" />
      </div>
    </div>
  );
}

export default Profile;
