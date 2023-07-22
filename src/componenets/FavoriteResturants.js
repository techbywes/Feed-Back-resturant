import React, { useContext, useState, useEffect } from "react";
import { MyProductsContext } from "../context/Myproduct-context";
import StarRating from "./Star_rating";
import trend from "../images/trend.png"; // Import the trend image for favorites
import ResturantsData from "./ResturantsData";

function FavoriteResturants() {
  const { removeFromFavorite } = useContext(MyProductsContext);

  // Load favorite items from local storage when the component mounts
  const initialFavorites =
    JSON.parse(localStorage.getItem("favoriteItems")) || [];
  const [favoriteItems, setFavoriteItems] = useState(initialFavorites);

  // Function to handle removing items from favorites
  const handleFavoriteClick = id => {
    if (favoriteItems.includes(id)) {
      // Call the context function to remove from global favorites
      removeFromFavorite(id);
      // Remove the item from local state to update the UI
      setFavoriteItems(prevFavorites =>
        prevFavorites.filter(itemId => itemId !== id)
      );
    }
  };

  // Save favorite items to local storage whenever the favoriteItems state changes
  useEffect(() => {
    localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
  }, [favoriteItems]);

  return (
    <div className="resaturant_fav_div">
        <p className="Fav_rest__text__">Your Favourite Restaurants</p>
      <div className="resturnat_div2">
        {ResturantsData.filter(restaurant =>
          favoriteItems.includes(restaurant.id)
        ).map(restaurant => (
          <div key={restaurant.id} className="section_container">
            <div className="img_text_">
              <img
                className="product_img2"
                src={restaurant.imgdata}
                alt="Product"
              />
              <h1 className="product_title tytle">{restaurant.rname}</h1>
              <div className="rate_price_div">
                <div className="price">{restaurant.price}</div>
                <div className="rating">
                  {restaurant.rating}
                  <StarRating rating={restaurant.rating} />
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
                <div>
                  <p className="street__rest">{restaurant.address}</p>
                </div>
              </div>
              <p className="orderz_count__">{restaurant.somedata}</p>
              <span className="favourite_product_heart">
                <img
                  className="favourite_product_heart"
                  src={trend}
                  alt="Trend"
                  onClick={() => handleFavoriteClick(restaurant.id)}
                />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
// ORGINAL INITIAL

export default FavoriteResturants;
