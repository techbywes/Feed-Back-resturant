import React, { useState } from "react";

import heart_1 from "../images/heart1.png";
import heart_2 from "../images/heart2.png";

import StarRating from "../componenets/Star_rating";

export const Myproducts = props => {
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

  const handleFavoriteChange = menuId => {
    setLikedProducts(prevLikedProducts => ({
      ...prevLikedProducts,
      [menuId]: !prevLikedProducts[menuId],
    }));
  };

  const { data: { id, productName, price, productImage, rating } = {} } = props;
  return (
    <div>
      <div className="section_container">
        <div className="img_text_">
          <img className="product_img" src={productImage} alt="Product" />
          <h1 className="product_title">{productName}</h1>
          <div className="rate_price_div">
            <div className="price">{price}</div>
            <div className="rating">
              {rating}
              <StarRating rating={rating} />
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
    </div>
  );
};
