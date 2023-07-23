import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Profile from "../componenets/Profile";
import openBtn from "../images/open-btn2.png";
import closeBtn from "../images/close-btn1.png";

function Nav() {
  const [Isopen, setIsopen] = useState(false);

  const toggleMenu = () => {
    setIsopen(!Isopen);
  };

  const location = useLocation();
  const isActiveLink = pathname => {
    return location.pathname === pathname ? "active" : "";
  };

  const handleLinkClick = () => {
    setIsopen(false);
  };

  const handleLogoClick = () => {
    setIsopen(false);
  };

  return (
    <>
      <nav>
        <div className="logo_title_open_close__div">
          <div className="logo_div">
            <h1 className="logo_text">
              <Link to="/" onClick={handleLogoClick}>
                <span className="food_text">FEED</span>{" "}
                <span className="back__text">BACK POST</span>
              </Link>
            </h1>
          </div>
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

          <li>
            <Link to="/Resturant" className={isActiveLink("/Resturant")}>
              Resturants
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

      {/* MOBILE MENU NAV STARTS FROM HERE */}

      <nav className="mobile_nav">
        <div className="logo_title_open_close__div">
          <div className="logo_div">
            <h1 className="logo_text">
              <Link to="/" onClick={handleLogoClick}>
                <span className="food_text">FEED</span>{" "}
                <span className="back__text">BACK POST</span>
              </Link>
            </h1>
          </div>

          <div className="open_close__btn_div">
            <img
              className="open__btn"
              src={Isopen ? closeBtn : openBtn}
              onClick={toggleMenu}
            />
          </div>
        </div>
        {Isopen && (
          <ul className="Nav__mobile">
            <li>
              <Link
                to="/"
                className={isActiveLink("/")}
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/About"
                className={isActiveLink("/About")}
                onClick={handleLinkClick}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/Contact"
                className={isActiveLink("/Contact")}
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </li>

            <li>
              <Link
                to="/WriteReviews"
                className={isActiveLink("/WriteReviews")}
                onClick={handleLinkClick}
              >
                Write Review
              </Link>
            </li>

            <li>
              <Link
                to="/Favourite"
                className={isActiveLink("/Favourite")}
                onClick={handleLinkClick}
              >
                My Favorites
              </Link>
            </li>

            <li>
              <Link
                to="/Resturant"
                className={isActiveLink("/Resturant")}
                onClick={handleLinkClick}
              >
                Resturants
              </Link>
            </li>
            <button className="go_prmium_btn">
              <Link to="/PremiumPage" className={isActiveLink("/PremiumPage")}>
                Go premium
              </Link>
            </button>

            <li>
              <Profile onClick={handleLinkClick} />
            </li>
          </ul>
        )}
      </nav>

      {/* MOBILE MENU NAV ENDS FROM HERE */}
    </>
  );
}

export default Nav;
