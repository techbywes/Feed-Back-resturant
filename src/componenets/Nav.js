import React from "react";
import Profile from "../componenets/Profile";

function Nav() {
  return (
    <nav>
      <div className="logo_div">
        <h1 className="logo_text">
          <span className="food_text">FEED</span> BACK POST
        </h1>
      </div>
     
      <ul className="nav_ul">
        <li>
          <a href="/" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="/">Favourites</a>
        </li>

        <li>
          <a href="/">About</a>
        </li>

        <li>
          <a href="/">Contact</a>
        </li>
        <li>
          <a href="/">Write Review</a>
        </li>


        <button className="go_prmium_btn">Go premium</button>
        <li>
          <Profile />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
