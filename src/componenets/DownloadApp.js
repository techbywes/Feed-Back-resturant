import React from "react";
import appimage from "../images/app-image.png";
import andriod from "../images/andriod.svg";
import apple from "../images/apple.svg";

function DownloadApp() {
  return (
    <div className="download_app_div">
      <div className="app_image_div_">
        <img className="app_icon_" src={appimage} alt="" />
      </div>
      <div className="dowload_text_div">
        <p className="download_para_text">
          Use the app to find the best resturants and hostels everywhere.
        </p>
      </div>
      <div className="phone_op_icons">
        <img src={andriod} alt="" />
        <img src={apple} alt="" />
      </div>
    </div>
  );
}

export default DownloadApp;
