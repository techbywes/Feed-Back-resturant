import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import quote from "../images/quote.png";
import StarRating from "./Star_rating";
import testimonial1 from "../images/testimonial-1.png";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
    return (
      <div className="test_general_div">
        <h2 className="text_title">Testimonial</h2>
        <h2 className="test_subtitle">Customer Review</h2>
        <Slider {...settings}>
          <div className="add_up">
            <div className="quote_para_stars_div">
              <div className="quote_div">
                <img className="test_quote" src={quote} alt="" />
              </div>

              <h3 className="text_parapgraph">
                In massa tempor feugiat nis vitae sapien pellentesque habitant
                morbi tristique senectus.
              </h3>
              <div className="test_rating_starts">
                {" "}
                <StarRating />
              </div>
            </div>

            <div className="text_img_div">
              <img className="text_img" src={testimonial1} alt="" />
            </div>
            <p className="test_name">Hanna Marriana</p>
            <p className="test_desgination">Designation</p>
          </div>
          <div className="add_up">
            <div className="quote_para_stars_div">
              <div className="quote_div">
                <img className="test_quote" src={quote} alt="" />
              </div>

              <h3 className="text_parapgraph">
                In massa tempor feugiat nis vitae sapien pellentesque habitant
                morbi tristique senectus.
              </h3>
              <div className="test_rating_starts">
                {" "}
                <StarRating />
              </div>
            </div>

            <div className="text_img_div">
              <img className="text_img" src={testimonial1} alt="" />
            </div>
            <p className="test_name">Hanna Marriana</p>
            <p className="test_desgination">Designation</p>
          </div>
          <div className="add_up">
            <div className="quote_para_stars_div">
              <div className="quote_div">
                <img className="test_quote" src={quote} alt="" />
              </div>

              <h3 className="text_parapgraph">
                In massa tempor feugiat nis vitae sapien pellentesque habitant
                morbi tristique senectus.
              </h3>
              <div className="test_rating_starts">
                {" "}
                <StarRating />
              </div>
            </div>

            <div className="text_img_div">
              <img className="text_img" src={testimonial1} alt="" />
            </div>
            <p className="test_name">Hanna Marriana</p>
            <p className="test_desgination">Designation</p>
          </div>
          <div className="add_up">
            <div className="quote_para_stars_div">
              <div className="quote_div">
                <img className="test_quote" src={quote} alt="" />
              </div>

              <h3 className="text_parapgraph">
                In massa tempor feugiat nis vitae sapien pellentesque habitant
                morbi tristique senectus.
              </h3>
              <div className="test_rating_starts">
                {" "}
                <StarRating />
              </div>
            </div>

            <div className="text_img_div">
              <img className="text_img" src={testimonial1} alt="" />
            </div>
            <p className="test_name">Hanna Marriana</p>
            <p className="test_desgination">Designation</p>
          </div>
          <div className="add_up">
            <div className="quote_para_stars_div">
              <div className="quote_div">
                <img className="test_quote" src={quote} alt="" />
              </div>

              <h3 className="text_parapgraph">
                In massa tempor feugiat nis vitae sapien pellentesque habitant
                morbi tristique senectus.
              </h3>
              <div className="test_rating_starts">
                {" "}
                <StarRating />
              </div>
            </div>

            <div className="text_img_div">
              <img className="text_img" src={testimonial1} alt="" />
            </div>
            <p className="test_name">Hanna Marriana</p>
            <p className="test_desgination">Designation</p>
          </div>
          <div className="add_up">
            <div className="quote_para_stars_div">
              <div className="quote_div">
                <img className="test_quote" src={quote} alt="" />
              </div>

              <h3 className="text_parapgraph">
                In massa tempor feugiat nis vitae sapien pellentesque habitant
                morbi tristique senectus.
              </h3>
              <div className="test_rating_starts">
                {" "}
                <StarRating />
              </div>
            </div>

            <div className="text_img_div">
              <img className="text_img" src={testimonial1} alt="" />
            </div>
            <p className="test_name">Hanna Marriana</p>
            <p className="test_desgination">Designation</p>
          </div>
        </Slider>
      </div>
    );
  }
}
