import React, { useState } from "react";
import StarRating from "./Star_rating";
import menu1 from "../images/menu-1.png";
import menu2 from "../images/menu-2.png";
import menu3 from "../images/menu-3.png";
import menu4 from "../images/menu-4.png";
import menu5 from "../images/menu-5.png";
import menu6 from "../images/menu-6.png";
import menu7 from "../images/menu-7.png";
import menu8 from "../images/menu-8.png";
import heart_1 from "../images/heart1.png";
import heart_2 from "../images/heart2.png";
import Favourites from "./Favourite";

function RecentlyAdded() {
  const [ratings, setRatings] = useState({
    menu1: 4.6,
    menu2: 4.8,
    menu3: 4.4,
    menu4: 4.7,
    menu5: 4.6,
    menu6: 4.8,
    menu7: 4.4,
    menu8: 4.7,
  });

  const [likedProducts, setLikedProducts] = useState({
    menu1: false,
    menu2: false,
    menu3: false,
    menu4: false,
    menu5: false,
    menu6: false,
    menu7: false,
    menu8: false,
  });

  const handleRatingChange = (menuId, rating) => {
    setRatings(prevRatings => ({
      ...prevRatings,
      [menuId]: rating,
    }));
  };

  const handleFavoriteChange = menuId => {
    setLikedProducts(prevLikedProducts => ({
      ...prevLikedProducts,
      [menuId]: !prevLikedProducts[menuId],
    }));
  };

  return (
    <section className="ourbestmeal_div RecentlyAdded">
      <h2 className="ourbest_meal_title_text">Most Viewed</h2>
      <p className="bestmeal_para_text">
        All in good taste elementum integer enim neque volutpat ac.
      </p>
      <div className="general_menu_div">
        <div className="section_container" id="Menu-A">
          <div className="img_text_">
            <img className="product_img" src={menu1} alt="product image" />
            <p className="product_title">Shrimps Tomato</p>
            <div className="rate_price_div">
              <div className="price">$18.30</div>
              <div className="rating">
                {ratings.menu1}
                <StarRating
                  rating={ratings.menu1}
                  onChange={rating => handleRatingChange("menu1", rating)}
                />
              </div>
            </div>
            <span className="favourite_product_heart">
              {likedProducts.menu1 ? (
                <img
                  className="favourite_product_heart"
                  src={heart_2}
                  onClick={() => handleFavoriteChange("menu1")}
                />
              ) : (
                <img
                  className="favourite_product_heart"
                  src={heart_1}
                  onClick={() => handleFavoriteChange("menu1")}
                />
              )}
            </span>
          </div>
        </div>
        <div className="section_container" id="Menu-B">
          <div className="img_text_">
            <img className="product_img" src={menu2} alt="product image" />
            <p className="product_title">Avocado Tuna</p>
            <div className="rate_price_div">
              <div className="price">$12.40</div>
              <div className="rating">
                {ratings.menu2}
                <StarRating
                  rating={ratings.menu2}
                  onChange={rating => handleRatingChange("menu2", rating)}
                />
              </div>
            </div>
            <span className="favourite_product_heart">
              {likedProducts.menu2 ? (
                <img
                  className="favourite_product_heart"
                  src={heart_2}
                  onClick={() => handleFavoriteChange("menu2")}
                />
              ) : (
                <img
                  className="favourite_product_heart"
                  src={heart_1}
                  onClick={() => handleFavoriteChange("menu2")}
                />
              )}
            </span>
          </div>
        </div>
        <div className="section_container" id="Menu-C">
          <div className="img_text_">
            <img className="product_img" src={menu2} alt="product image" />
            <p className="product_title">Avocado Tuna</p>
            <div className="rate_price_div">
              <div className="price">$12.40</div>
              <div className="rating">
                {ratings.menu2}
                <StarRating
                  rating={ratings.menu3}
                  onChange={rating => handleRatingChange("menu3", rating)}
                />
              </div>
            </div>
            <span className="favourite_product_heart">
              {likedProducts.menu3 ? (
                <img
                  className="favourite_product_heart"
                  src={heart_2}
                  onClick={() => handleFavoriteChange("menu3")}
                />
              ) : (
                <img
                  className="favourite_product_heart"
                  src={heart_1}
                  onClick={() => handleFavoriteChange("menu3")}
                />
              )}
            </span>
          </div>
        </div>
        <div className="section_container" id="Menu-D">
          <div className="img_text_">
            <img className="product_img" src={menu4} alt="product image" />
            <p className="product_title">Barley Porridge</p>
            <div className="rate_price_div">
              <div className="price">$18.30</div>
              <div className="rating">
                {ratings.menu4}
                <StarRating
                  rating={ratings.menu4}
                  onChange={rating => handleRatingChange("menu4", rating)}
                />
              </div>
            </div>
            <span className="favourite_product_heart">
              {likedProducts.menu4 ? (
                <img
                  className="favourite_product_heart"
                  src={heart_2}
                  onClick={() => handleFavoriteChange("menu4")}
                />
              ) : (
                <img
                  className="favourite_product_heart"
                  src={heart_1}
                  onClick={() => handleFavoriteChange("menu4")}
                />
              )}
            </span>
          </div>
        </div>
        <div className="section_container" id="Menu-E">
          <div className="img_text_">
            <img className="product_img" src={menu5} alt="product image" />
            <p className="product_title">Shrimps Tomato</p>
            <div className="rate_price_div">
              <div className="price">$18.30</div>
              <div className="rating">
                {ratings.menu5}
                <StarRating
                  rating={ratings.menu5}
                  onChange={rating => handleRatingChange("menu5", rating)}
                />
              </div>
            </div>
            <span className="favourite_product_heart">
              {likedProducts.menu5 ? (
                <img
                  className="favourite_product_heart"
                  src={heart_2}
                  onClick={() => handleFavoriteChange("menu5")}
                />
              ) : (
                <img
                  className="favourite_product_heart"
                  src={heart_1}
                  onClick={() => handleFavoriteChange("menu5")}
                />
              )}
            </span>
          </div>
        </div>
        <div className="section_container" id="Menu-F">
          <div className="img_text_">
            <img className="product_img" src={menu6} alt="product image" />
            <p className="product_title">Avocado Tuna</p>
            <div className="rate_price_div">
              <div className="price">$18.30</div>
              <div className="rating">
                {ratings.menu6}
                <StarRating
                  rating={ratings.menu6}
                  onChange={rating => handleRatingChange("menu6", rating)}
                />
              </div>
            </div>
            <span className="favourite_product_heart">
              {likedProducts.menu6 ? (
                <img
                  className="favourite_product_heart"
                  src={heart_2}
                  onClick={() => handleFavoriteChange("menu6")}
                />
              ) : (
                <img
                  className="favourite_product_heart"
                  src={heart_1}
                  onClick={() => handleFavoriteChange("menu6")}
                />
              )}
            </span>
          </div>
        </div>
        <div className="section_container" id="Menu-G">
          <div className="img_text_">
            <img className="product_img" src={menu7} alt="product image" />
            <p className="product_title">Sald Salmon</p>
            <div className="rate_price_div">
              <div className="price">$18.30</div>
              <div className="rating">
                {ratings.menu7}
                <StarRating
                  rating={ratings.menu7}
                  onChange={rating => handleRatingChange("menu7", rating)}
                />
              </div>
            </div>
            <span className="favourite_product_heart">
              {likedProducts.menu7 ? (
                <img
                  className="favourite_product_heart"
                  src={heart_2}
                  onClick={() => handleFavoriteChange("menu7")}
                />
              ) : (
                <img
                  className="favourite_product_heart"
                  src={heart_1}
                  onClick={() => handleFavoriteChange("menu7")}
                />
              )}
            </span>
          </div>
        </div>
        <div className="section_container" id="Menu-H">
          <div className="img_text_">
            <img className="product_img" src={menu8} alt="product image" />
            <p className="product_title">Barley Porridge</p>
            <div className="rate_price_div">
              <div className="price">$16.30</div>
              <div className="rating">
                {ratings.menu8}
                <StarRating
                  rating={ratings.menu8}
                  onChange={rating => handleRatingChange("menu8", rating)}
                />
              </div>
            </div>
            <span className="favourite_product_heart">
              {likedProducts.menu8 ? (
                <img
                  className="favourite_product_heart"
                  src={heart_2}
                  onClick={() => handleFavoriteChange("menu8")}
                />
              ) : (
                <img
                  className="favourite_product_heart"
                  src={heart_1}
                  onClick={() => handleFavoriteChange("menu8")}
                />
              )}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecentlyAdded;
