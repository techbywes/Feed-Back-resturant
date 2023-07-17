import React, { useContext, useState } from "react";
import heart_1 from "../images/heart1.png";
import heart_2 from "../images/heart2.png";
import StarRating from "./Star_rating";
import { MyProductsContext } from "../context/Myproduct-context";

const Myproducts = props => {
  const { id, productName, price, productImage, rating } = props.data;
  const { addToFavorite } = useContext(MyProductsContext);

  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    addToFavorite(id);
  };

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
            {/* <img className="favourite_product_heart" src={heart_2} /> */}
            <img
              className="favourite_product_heart"
              src={isFavorite ? heart_2 : heart_1}
              alt="Favorite"
              onClick={handleFavoriteClick}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Myproducts;
