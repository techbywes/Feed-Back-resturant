import React from "react";


function SubmitReview() {
  return (
    <>
      <div className="reviws_div">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Submit a review"
        />
        <div className="review_submit_btn_div">
          <button className="submit_review_btn">Submit Review</button>
        </div>
      </div>
    </>
  );
}

export default SubmitReview;
