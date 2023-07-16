import Nav from "./Nav";
import Footer from "./Footer";
import StarRating2 from "./StarsWithtext";
import TestimonialCarousel from "./Testimonial";
import React, { useState } from "react";
import { MDBTextArea } from "mdb-react-ui-kit";

function WriteReviews() {
  const [text, setText] = useState("");

  const handleChange = event => {
    setText(event.target.value);
    event.target.style.height = "auto";
    event.target.style.height = event.target.scrollHeight + "px";
  };
  return (
    <>
      <Nav />
      <div className="login-reg_div">
        a
      </div>

      <div className="write_reviews_div">
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
        <TestimonialCarousel />
      </div>
      <Footer />
    </>
  );
}

export default WriteReviews;
