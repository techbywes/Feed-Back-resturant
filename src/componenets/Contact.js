import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

import { MDBInput, MDBCheckbox, MDBBtn } from "mdb-react-ui-kit";

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
        <section className="get_intouch_form_div">
          <div className="left_get_intou_div">
            <h2 className="get_intouh_title__">Get in Touch</h2>
            <p className="get_intouch_para_text__">
              Get in touch elementum integer enim neque volutpat ac. Morbi enim
              nunc faucibus a. Amet consectetur adipiscing elit duis tempus urna
              et pharetra.
            </p>
            <p className="get_intouch_para_text__2">
              Massa placerat duis ultricies lacus sed turpis tincidunt id.
              Interdum varius sit amet mattis enim. Quis hendrerit dolor magna
              eget est lorem ipsum dolor. Sagittis scelerisque purus semper eget
              duis. Viverra maecenas accumsan lacus vel facilisis volutpat est.
              Ultricies lacus sed turpis tincidunt id aliquet risus feugiat in.
            </p>
            <div className="adress__num_mail_div">
              <div className="office_adress__">
                <div className="icon_office_adress___">
                  <img className="map_icon___" src={map} />
                </div>
                <div className="off_tit_para__text">
                  <h2 className="adress__office">OFFICE ADDRESS</h2>
                  <p className="office__adres__tesxt">
                    Address, Fax 99 Roving St, Big City PKU
                  </p>
                </div>
              </div>
            </div>
            <div className="adress__num_mail_div">
              <div className="office_adress__">
                <div className="icon_office_adress___">
                  <img className="map_icon___" src={mail} />
                </div>
                <div className="off_tit_para__text">
                  <h2 className="adress__office">EMAIL ADDRESS</h2>
                  <p className="office__adres__tesxt">
                    www.feedbackpost.com | hello@awesomefood.com
                  </p>
                </div>
              </div>
            </div>
            <div className="adress__num_mail_div">
              <div className="office_adress__">
                <div className="icon_office_adress___">
                  <img className="map_icon___" src={phone} />
                </div>
                <div className="off_tit_para__text">
                  <h2 className="adress__office">PHONE NUMBER</h2>
                  <p className="office__adres__tesxt">
                    423-734-1734 | +723-834-5234
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="right_form_get_div">
            <form>
              <MDBInput id="form4Example1" wrapperClass="mb-4" label="Name" />
              <MDBInput
                type="email"
                id="form4Example2"
                wrapperClass="mb-4"
                label="Email address"
              />
              <MDBInput
                wrapperClass="mb-4"
                textarea
                id="form4Example3"
                rows={4}
                label="Message"
              />

              <MDBCheckbox
                wrapperClass="d-flex justify-content-center mb-4"
                id="form4Example4"
                label="Send me a copy of this message"
                defaultChecked
              />

              <MDBBtn type="submit" className="mb-4" block>
                Sign in
              </MDBBtn>
            </form>
          </div>
        </section>
        <section className="general_section_div">
          <div className="need_help_div_2">
            <div className="left_text_check_food_">
              <div className="left_text_div_">
                <h2 className="good_food_text_">
                  Check Your Feed Back Post Restaurant location.
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
