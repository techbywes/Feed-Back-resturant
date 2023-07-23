import React from "react";
import StarRating from "./Star_rating";
import heart_1 from "../images/heart1.png";
import heart_2 from "../images/heart2.png";

function SearchResult({ searchResults }) {
  // Check if searchResults is not defined or is not an array
  if (!searchResults || !Array.isArray(searchResults)) {
    return <div>No search results found.</div>;
  }

  return (
    <div className="search__result__">
      <div className="resturnat_div">
        {searchResults.map((restaurant) => (
          <div key={restaurant.id} className="section_container">
            <div className="img_text_">
              <img
                className="product_img2"
                src={restaurant.imgdata}
                alt="Product"
              />
              <h1 className="product_title tytle">{restaurant.rname}</h1>{" "}
              <div className="rate_price_div">
                <div className="price">{restaurant.price}</div>{" "}
                <div className="rating">
                  {restaurant.rating} <StarRating rating={restaurant.rating} />{" "}
                </div>
              </div>
              <div className="thunder_street_div">
                <div className="img_street__">
                  <img
                    className="thundeer_rate"
                    src={restaurant.arrimg}
                    alt={restaurant.arrimg}
                  />
                </div>
                <p className="street__rest">{restaurant.address}</p>{" "}
              </div>
              <p className="orderz_count__">{restaurant.somedata}</p>{" "}
              <span className="favourite_product_heart">
                <img
                  className="favourite_product_heart"
                  src={heart_1}
                  alt="heart_1"
                />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResult;