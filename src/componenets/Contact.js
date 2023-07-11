import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

import phone from "../images/phone2.png";
import resturant from "../images/restaurant.png";
import map from "../images/map2.png";
import mail from "../images/email2.png";
import web from "../images/web.png";

function Contact() {
  return (
    <>
      <Nav />
      <div className="contact_div">
        <section className="general_section_div">
          <div className="need_help_div_2">
            <div className="left_text_check_food_">
              <div className="left_text_div_">
                <h2 className="good_food_text_">
                  Check Your Food Court Restaurant location.
                </h2>
                <div className="line_div"></div>
                <p className="good_food_orar_text">
                  All in good taste elementum integer enim neque volutpat ac.
                  Morbi enim nunc faucibus a. Amet consectetur adipiscing elit
                  duis tempus urna et pharetra. Sagittis scelerisque purus
                  semper eget duis. Viverra maecenas accumsan lacus vel
                  facilisis volutpat est. Ultricies lacus sed turpis tincidunt
                  id aliquet risus feugiat in.
                </p>
                <button className="location_btn_">Check Our Location</button>
              </div>
            </div>
            <div className="right_need_help_div">
              <div className="help_address_div__">
                <div className="need_help_mail_div">
                  <div className="need_help_text">NEED HELP?</div>
                  <div className="call_resturant_">CALL US RESTAURANT</div>
                </div>
                <div className="need_help_mail_div">
                  <div className="phone_phone_number">
                    <div className="phone_icon_div">
                      <img className="phone_icon" src={phone} />
                    </div>
                    <div className="need_help_text">+123-234-1234</div>
                  </div>
                  <div className="mail_text">admin@example.com</div>
                </div>
              </div>
              <div className="adrresses_div_">
                <div className="adress_icon_div__">
                  <img className="resturant_icon_" src={resturant} />
                  Feed Back Post Restaurant 1 - Address, Fax 99 Roving St, Big
                  City PKU
                </div>
              </div>
              <div className="dotted_line_div"></div>
              <div className="adrresses_div_">
                <div className="adress_icon_div__">
                  <img className="resturant_icon_" src={resturant} />
                  Feed Back Post Restaurant 1 - Address, Fax 99 Roving St, Big
                  City PKU
                </div>
              </div>
              <div className="dotted_line_div"></div>
              <div className="adrresses_div_">
                <div className="adress_icon_div__">
                  <img className="resturant_icon_" src={resturant} />
                  Feed Back Post Restaurant 1 - Address, Fax 99 Roving St, Big
                  City PKU
                </div>
              </div>
            </div>
          </div>
          <div className="address_phoe_email_website_div__">
            <div className="address_text_icon_div___">
              <div className="icon_div_adress_">
                <img className="map2_icon__" src={map} />
              </div>
              <div className="adress_fax_text__">
                <p className="Adress_text__g">Address</p>
                <p className="fax_addres_text">Fax 99 Roving St, Big</p>
              </div>
            </div>

            <div className="address_text_icon_div___">
              <div className="icon_div_adress_">
                <img className="map2_icon__" src={phone} />
              </div>
              <div className="adress_fax_text__">
                <p className="Adress_text__g">Phone</p>
                <p className="fax_addres_text">+123-234-1234</p>
              </div>
            </div>
            <div className="address_text_icon_div___">
              <div className="icon_div_adress_">
                <img className="map2_icon__" src={mail} />
              </div>
              <div className="adress_fax_text__">
                <p className="Adress_text__g">Email</p>
                <p className="fax_addres_text">admin@example.com</p>
              </div>
            </div>
            <div className="address_text_icon_div___">
              <div className="icon_div_adress_">
                <img className="map2_icon__" src={web} />
              </div>
              <div className="adress_fax_text__">
                <p className="Adress_text__g">Website</p>
                <p className="fax_addres_text">www.example.com</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
