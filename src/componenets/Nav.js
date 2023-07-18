import React from "react";
import { Link, useLocation } from "react-router-dom";
import Profile from "../componenets/Profile";

function Nav() {
  const location = useLocation();

  const isActiveLink = pathname => {
    return location.pathname === pathname ? "active" : "";
  };

  return (
    <nav>
      <div className="logo_div">
        <h1 className="logo_text">
          <span className="food_text">FEED</span>BACK POST
        </h1>
      </div>

      <ul className="nav_ul">
        <li>
          <Link to="/" className={isActiveLink("/")}>
            Home
          </Link>
        </li>

        <li>
          <Link to="/About" className={isActiveLink("/About")}>
            About
          </Link>
        </li>

        <li>
          <Link to="/Contact" className={isActiveLink("/Contact")}>
            Contact
          </Link>
        </li>

        <li>
          <Link to="/WriteReviews" className={isActiveLink("/WriteReviews")}>
            Write Review
          </Link>
        </li>

        <li>
          <Link to="/Favourite" className={isActiveLink("/Favourite")}>
            My Favorites
          </Link>
        </li>

        <button className="go_prmium_btn">
          <Link to="/PremiumPage" className={isActiveLink("/PremiumPage")}>
            Go premium
          </Link>
        </button>

        <li>
          <Profile />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
