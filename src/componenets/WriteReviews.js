import StarRating2 from "./StarsWithtext";
import TestimonialCarouse2 from "./Testimonial_second";
import React, { useState } from "react";
import { MDBTextArea } from "mdb-react-ui-kit";
import Search from "../componenets/Search";
import Customer_review from "../images/customer-review.png";

function WriteReviews() {
  const [text, setText] = useState("");

  const handleChange = event => {
    setText(event.target.value);
    event.target.style.height = "auto";
    event.target.style.height = event.target.scrollHeight + "px";
  };
  return (
    <>
      <div className="login-reg_div">a</div>
      <div className="write_reviews_div">
        <div className="find_resturent_reviw_icon_div">
          <div className="text_reveiw_writing">
            <h2 className="find_biz_text">Find a resturant to review</h2>
            <p className="writw_rev_text__">
              Review anything from your favorite food spot to your local
              resturant.
            </p>
          </div>
          <div className="write_review_icon__">
            <img className="rewviews_icon_img_" src={Customer_review} alt="reviews icon" />
          </div>
        </div>

        <Search />
        <TestimonialCarouse2 />
        <div className="reviews_div">
          <StarRating2 />
          <p className="keep_in_mind__text">
            A few things to consider in your review
          </p>
          <div className="facts_to_keep_">
            <p className="tings_too_">Food</p>
            <p className="tings_too_">Service</p>
            <p className="tings_too_">Ambiance</p>
          </div>
          <MDBTextArea
            label="Message"
            id="textAreaExample"
            rows={4}
            value={text}
            onChange={handleChange}
          />
          <button className="_submit_review_btn"> Submit Review</button>
        </div>
      </div>
    </>
  );
}

export default WriteReviews;
