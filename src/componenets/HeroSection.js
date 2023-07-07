import React from "react";
import buggerimage from "../images/bugger.png"

function HeroSection() {
  return (
    <section className="hero_div">
      <div className="text_btn_div">
        <div className="title_div">
          <h1 className="title_text">BEST FEED-BACK RESTURANT</h1>
        </div>
        <div className="paragraphtext_div">
          <p className="paragraph_text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes.
          </p>
        </div>

        <button className="learnmore_btn">Learn about us</button>
      </div>
      <div className="img_div">
        <img className="hero_img" src={buggerimage} alt="" />
      </div>
    </section>
  );
}

export default HeroSection;
