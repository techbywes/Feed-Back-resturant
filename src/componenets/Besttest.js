import React from "react";
import juice from "../images/juice.png";
import DownloadApp from "./DownloadApp";

function Besttest() {
  return (
    <section className="besttext_div">
      <div className="best_text_left_div">
        <DownloadApp />
        {/* <img className="besttest_left_image" src={juice} alt="product image" /> */}
      </div>
      {/* <div className="best_text_right_div">
        <h2 className="right_title">
          Find Your best tasted food & drink just in one place
        </h2>
        <div className="line_tex2"></div>
        <p className="besttes_para_text">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes.
        </p>
        <ol></ol>
        <button className="besttest_btn">About Us</button>
      </div> */}
    </section>
  );
}

export default Besttest;
