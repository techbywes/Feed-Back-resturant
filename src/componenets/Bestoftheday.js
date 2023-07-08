import React from "react";
import leftimage from "../images/bugger-left.png";
import rightimage from "../images/drink-right.png";
import Foodclass from "./Foodclass";

function Bestoftheday() {
  return (
    <section className="bestoftheday_div">
    
      <div className="left_div">
        <div className="general_div">
          <div className="left_wrapup">
            <div className="best_toopoint">Best of the day</div>
            <h2 className="bestofhteday_discount_text">
              GET A 10% DISCOUNT ON CHRISTMAS
            </h2>
            <p className="best_para_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="OrderNow_btn">Order Now</button>
          </div>
          <div className="left_image">
            <img className="img_left" src={leftimage} alt="" />
          </div>
        </div>
      </div>
      <div className="right_div">
      <div className="general_div">
          <div className="left_wrapup">
            <div className="best_toopoint">Best of the day</div>
            <h2 className="bestofhteday_discount_text">
              GET A 10% DISCOUNT ON CHRISTMAS
            </h2>
            <p className="best_para_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="OrderNow_btn">Order Now</button>
          </div>
          <div className="left_image">
            <img className="img_left" src={rightimage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bestoftheday;
