import React from "react";
import Nav from "./Nav";
import bugaIMG from "../images/bugger.png";
import signature from "../images/signature.png";
import bugger2 from "../images/bugger2.png";

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
            <img className="_signature_"  src={signature} />
            <h4 className="author_name_">George Shaw, CEO</h4>
          </div>

          <div className="rigth_image_div_">
            <img className="img_signature_" src={bugger2} />
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
