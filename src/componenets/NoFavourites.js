import React from "react";
import animatedHeart from "../images/animated_heart.gif";

function NoFavourites() {
  return (
    <div className="NoFavourites">
      <div className="favourite_div__">
        <h3 className="no_favorites_text">You have no favorites yet :(</h3>

        <div className="animated_heart__div">
          <img src={animatedHeart} />
        </div>
        <div className="explain_favourite_text_div">
          <p className="explain_favourite_text_">
            Touch the heart icon on any{" "}
            <a href="#" className="link__change_color">
              restaurant
            </a>{" "}
            or
            <a href="#" className="link__change_color">
              {" "}
              hotel
            </a>{" "}
            and it will save them here as a favorite. You first need to{" "}
            <a href="#" className="link__change_color">
              register
            </a>{" "}
            to save lists.
          </p>
          <p className="explain_favourite_text_2">
            Registering allows us make your list available on any device you
            choose. You will also receive access to exclusive member rates for
            hotels & upcoming personalization features.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NoFavourites;
