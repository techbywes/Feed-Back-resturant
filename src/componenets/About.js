import React from "react";
import Nav from "./Nav";
import bugaIMG from "../images/bugger.png";
import signature from "../images/signature.png";
import bugger2 from "../images/bugger2.png";
import Footer from "./Footer";
import phone from "../images/phone.png";
import resturant from "../images/restaurant.png";

function About() {
  return (
    <>
      <Nav />
      <div className="about_us_div">
        <div className="left_img_righttext_div">
          <div className="r_image_div">
            <img src={bugaIMG} className="buga_img_" />
          </div>
          <div className="right_text_div">
            <p className="abt_us">About Us</p>
            <h3 className="right_text_">
              The Best Enjoyable Place Around You.
            </h3>
            <p className="abt_para_text_">
              We are the best quality elementum integer enim neque volutpat ac.
              Morbi enim nunc faucibus a. Amet consectetur adipiscing elit duis
              tempus pharetra.
            </p>
            <p className="abta-parapgraph_text">
              Massa placerat duis ultricies lacus sed turpis tincidunt id.
              Interdum varius sit amet mattis enim. Quis hendrerit dolor magna
              eget est lorem ipsum dolor. Sagittis scelerisque purus semper eget
              duis. Viverra maecenas accumsan lacus vel facilisis volutpat est.
              Ultricies lacus sed turpis tincidunt id aliquet risus feugiat in.
              Adipiscing elit duis tristique sollicitudin nibh sit. Porttitor
              lacus luctus accumsan tortor.
            </p>

            <div className="menu_food_count">
              <div className="left_div_expert">
                <h2 className="expert_text_ numb_reduce">108</h2>
                <h2 className="expert_chef_text reduce_p_text">EXPERT CHEF</h2>
              </div>
              <div className="middle_div_menu">
                <h2 className="menu_count_text numb_reduce ">142</h2>
                <h2 className="menu_food_count_ reduce_p_text">MENU OF FOOD</h2>
              </div>
              <div className="right_div_orders">
                <h2 className="orders_count_ numb_reduce">900</h2>
                <h2 className="order_delivered_ reduce_p_text">
                  ORDER DELIVERED
                </h2>
              </div>
            </div>
          </div>
        </div>
        <section className="good_food_div_">
          <div className="left_text_div_">
            <h2 className="good_food_text_">
              Good food For your all day good mood
            </h2>
            <div className="line_div"></div>
            <p className="good_food_orar_text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
            <img className="_signature_" src={signature} />
            <h4 className="author_name_">George Shaw, CEO</h4>
          </div>

          <div className="rigth_image_div_">
            <img className="img_signature_" src={bugger2} />
          </div>
        </section>
        <section className="general_section_div">
          <div className="need_help_div_">
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
        </section>
      </div>
      <Footer />
    </>
  );
}

export default About;
