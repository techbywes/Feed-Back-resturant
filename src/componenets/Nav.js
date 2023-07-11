import React from "react";
import { useNavigate } from "react-router-dom";
import Profile from "../componenets/Profile";


function Nav() {
  const navigate = useNavigate();

  const ShowAbout = () => {
    navigate("/About", { replace: true });
  };


  const GoHome = () => {
    navigate("/", { replace: true });
  };


  return (
    <nav>
      <div className="logo_div" onClick={GoHome}>
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
          <a href="#">Favourites</a>
        </li>

        <li>
          <a href="#" onClick={ShowAbout}>
            About
          </a>
        </li>

        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Write Review</a>
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
