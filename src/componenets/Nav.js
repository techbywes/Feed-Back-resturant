import React from "react";

function Nav() {
  return (
    <nav>
      <div className="logo_div">
        <h1 className="logo_text">
          <span className="food_text">FEED</span> BACK
        </h1>
      </div>
      <div className="input_btn_div">
        <input className="input_" type="text" />
        <button className="submit_btn">Search</button>
      </div>
      <ul className="nav_ul">
        <li>
          <a href="/" className="active">Home</a>
        </li>
        <li>
          <a href="/">Favourites</a>
        </li>
        <li>
          <a href="/">Profile</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <button className="go_prmium_btn">Go premium</button>
      </ul>
    </nav>
  );
}

export default Nav;
