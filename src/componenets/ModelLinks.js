import React from "react";
import login from "../images/enter.png";
import register from "../images/register.png";
import myfavourite from "../images/heart.png";
import settings from "../images/setting.png";
import faq from "../images/faq.png";
import logout from "../images/power-off.png";

function ModelLinks() {
  return (
    <div>
      <div className="model_link_gen_div">
        <ul className="new_model_ul">
          <li className="model_li">
            <div className="img_icon_div">
              <img className="icon_img" src={login} />
              <a className="new_model_a" href="#">
                Login
              </a>
            </div>
          </li>

          <li className="model_li">
            <div className="img_icon_div">
              <img className="icon_img" src={register} />
              <a className="new_model_a" href="#">
                Register
              </a>
            </div>
          </li>

          <li className="model_li">
            <div className="img_icon_div">
              <img className="icon_img" src={myfavourite} />
              <a className="new_model_a" href="#">
                My Favourite
              </a>
            </div>
          </li>
          <li className="model_li">
            <div className="img_icon_div">
              <img className="icon_img" src={settings} />
              <a className="new_model_a" href="#">
                Settings
              </a>
            </div>
          </li>
          <li className="model_li">
            <div className="img_icon_div">
              <img className="icon_img" src={faq} />
              <a className="new_model_a" href="#">
                FAQ
              </a>
            </div>
          </li>
          <li className="model_li">
            <div className="img_icon_div">
              <img className="icon_img" src={logout} />
              <a className="new_model_a" href="#">
                Logout
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ModelLinks;
