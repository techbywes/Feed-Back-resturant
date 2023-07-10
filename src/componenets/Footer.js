import React from "react";
import phoneicon from "../images/phone.png";
import email from "../images/email.png";
import mapicon from "../images/map.png";
import facebook_icon from "../images/facebook.png";
import twitter_icon from "../images/twitter.png";
import tinstagram_icon from "../images/instagram.png";

function Footer() {
  return (
    <footer className="footer_div">
      <div className="text_form_div">
        <div className="text_div">
          <p className="news_letter_text">GET EXCLUSIVE UPDATE</p>
        </div>
        <div className="form_div">
          <form
            action="mailto:your-email@example.com"
            method="POST"
            encType="text/plain"
          >
            <input
              className="form_input"
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
            />
            <br />
            <button className="submit_form_btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="footer_name_phone_address_div">
        <div className="site_logo_para_text">
          <h2 className="site_logo_text_title">
            {" "}
            <span className="feed_text_footer">FEED</span> BACK POST
          </h2>
          <p className="footer_paragrap_text_">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className="support_link_div">
          <h2 className="support_title_">SUPPORT</h2>

          <ul className="support_ul">
            <li className="suppr_link">
              <a className="support_a" href="#">
                FAQ's
              </a>
            </li>
            <li className="suppr_link">
              <a className="support_a" href="#">
                Privacy Policy
              </a>
            </li>
            <li className="suppr_link">
              <a className="support_a" href="#">
                Terms & Conditions
              </a>
            </li>
            <li className="suppr_link">
              <a className="support_a" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="phone_email_div">
          <div className="phone_div">
            <h2 className="phone_title_">PHONE</h2>
            <div className="phone_icon_phone_num">
              <img className="phone_icon" src={phoneicon} />
              <p className="phon_number">+47826-4578-562-2</p>
            </div>
          </div>
          <div className="email_div">
            <h2 className="email_title_">Email</h2>
            <div className="email_id_">
              <img className="email_icon" src={email} />
              <p className="email_id_">contact@foodcourt.com</p>
            </div>
          </div>
        </div>

        <div className="address_social_icons_div">
          <div className="Adress_div">
            <h2 className="address_title_">ADDRESS</h2>
            <div className="address_icon_address_num">
              <img className="address_icon" src={mapicon} />
              <p className="address__">Ui. Jantai Kuya No. 74, Jadukg, Kali.</p>
            </div>
          </div>
          <div className="social_medi__div">
            <div className="social_icon_social">
              <h2 className="follow_title_">Follow Us</h2>
              <div className="all_social_icons">
                <img className="social_icon" src={facebook_icon} />
                <img className="social_icon" src={twitter_icon} />
                <img className="social_icon" src={tinstagram_icon} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="down_footer_div">
        <div className="left_text_div">Food Back Post Made  by Techbywes</div>
        <div className="right_text_div">
          Copyright © 2023. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
