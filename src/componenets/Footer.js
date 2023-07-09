import React from "react";

function Footer() {
  return (
    <footer className="footer_div">
      <div className="text_form_div">
        <div className="text_div">
          <p className="news_letter_text">GET EXCLUSIVE UPDATE</p>
        </div>
        <div className="form_div">
          <form action="text">
            <input className="form_input" type="text" placeholder="Enter Your Email"/> <br />
            <button className="submit_form_btn">Submit</button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
