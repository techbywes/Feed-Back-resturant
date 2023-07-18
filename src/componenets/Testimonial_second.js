import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import quote from "../images/quote.png";
import StarRating from "./Star_rating";
import testimonial1 from "../images/testimonial-1.png";
import testimonial2 from "../images/testimonial-2.png";
import testimonial3 from "../images/testimonial-3.png";
import testimonial4 from "../images/testimonial-4.png";
import testimonial5 from "../images/testimonial-5.png";



export default class TestimonialCarousel2 extends Component {
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
      <div className="main_gen_div_2">
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
                  <StarRating rating={4} />
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
                  <StarRating rating={5} />
                </div>
              </div>

              <div className="text_img_div">
                <img className="text_img" src={testimonial2} alt="" />
              </div>
              <p className="test_name">Rendy Zennda</p>
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
                  <StarRating rating={3} />
                </div>
              </div>

              <div className="text_img_div">
                <img className="text_img" src={testimonial3} alt="" />
              </div>
              <p className="test_name">Hendrik Morella</p>
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
                  <StarRating rating={5} />
                </div>
              </div>

              <div className="text_img_div">
                <img className="text_img" src={testimonial4} alt="" />
              </div>
              <p className="test_name">Caroll Xenna</p>
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
                  <StarRating rating={2} />
                </div>
              </div>

              <div className="text_img_div">
                <img className="text_img" src={testimonial5} alt="" />
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
                  <StarRating rating={5} />
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
        {/* <SubmitReview /> */}
      </div>
    );
  }
}
