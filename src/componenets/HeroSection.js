import React from "react";
import buggerimage from "../images/bugger.png";
import Search from "./Search";

function HeroSection() {
  return (
    <section className="hero_div">
      <div className="text_btn_div">
        <div className="title_div">
          <h1 className="title_text">FEED-BACK POST RESTURANT</h1>
          <div className="line_tex"></div>
        </div>
        <div className="paragraphtext_div">
          <p className="paragraph_text">
            Find your next great culinary experience with <br />{" "}
            <span className="feed_back_text">FEED BACK POST</span> Guide
          </p>
        </div>
        <Search />
        {/* <button className="learnmore_btn">Learn about us</button> */}
      </div>
      <div className="img_div">
        <img className="hero_img" src={buggerimage} alt="" />
      </div>
    </section>
  );
}

export default HeroSection;
