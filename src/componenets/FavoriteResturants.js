import React, { useContext, useState, useEffect } from "react";
import { MyProductsContext } from "../context/Myproduct-context";
import StarRating from "./Star_rating";
import trend from "../images/trend.png"; // Import the trend image for favorites
import ResturantsData from "./ResturantsData";


import heart_1 from "../images/heart1.png";
import heart_2 from "../images/heart2.png";

function FavoriteResturants() {
  const { removeFromFavorite } = useContext(MyProductsContext);

  // Load favorite items from local storage when the component mounts
  const initialFavorites =
    JSON.parse(localStorage.getItem("favoriteItems")) || {};
  const [favoriteItems, setFavoriteItems] = useState(initialFavorites);

  // Convert favoriteItems object to an array of ids
  const favoriteItemsArray = Object.keys(favoriteItems);

  // Function to handle adding or removing items from favorites
  const handleFavoriteClick = id => {
    // Check if the id exists in the favoriteItems object
    const isFavorite = favoriteItems[id];

    if (isFavorite) {
      // Call the context function to remove from global favorites
      removeFromFavorite(id);
      // Remove the item from local state to update the UI
      setFavoriteItems(prevFavorites => {
        const updatedFavorites = { ...prevFavorites };
        delete updatedFavorites[id];
        return updatedFavorites;
      });
    } else {
      // Item is not in favorites, so add it
      setFavoriteItems(prevFavorites => ({
        ...prevFavorites,
        [id]: true,
      }));
      // You might want to call a context function to add to global favorites here if needed
      // e.g., addToFavorite(id);
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
          favoriteItemsArray.includes(restaurant.id.toString())
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
                {/* Check if the item is in favorites to display the appropriate heart icon */}
                <img
                  className="favourite_product_heart"
                  src={
                    favoriteItemsArray.includes(restaurant.id.toString())
                      ? heart_2
                      : heart_1
                  }
                  alt="Favorite"
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

export default FavoriteResturants;
