import React, { useState } from "react";
import Profile from "./Profile";
import close from "../images/close.png";

function ProfileModel() {
  const [Isopen, setIsopen] = useState(true);

  const handleProfileIconClick = () => {
    setIsopen(!Isopen);
  };

  return (
    <div className="profileMode_div">
      {Isopen && (
        <div className="profile_model">
          <div className="user_img_username_name">
            <div className="profile_img_div">
              <Profile/>
            </div>
            <div className="username_name_div">
              <p className="p_username_text">Techbywes</p>
              <p className="p_name_text">Wisdom Samuel</p>
            </div>
            <div className="close_btn_div">
              <img
                className="close_btn"
                src={close}
                onClick={handleProfileIconClick}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileModel;
