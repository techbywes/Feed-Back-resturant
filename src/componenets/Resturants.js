import React, { useContext, useState, useEffect } from "react";
import { MyProductsContext } from "../context/Myproduct-context";
import StarRating from "./Star_rating";
import heart_1 from "../images/heart1.png";
import heart_2 from "../images/heart2.png";
import trend from "../images/trend.png"; // Import the trend image for favorites
import ResturantsData from "./ResturantsData";
import FavoriteResturants from "./FavoriteResturants"; // Import the FavoriteResturants component

function Resturants() {
  const { removeFromFavorite } = useContext(MyProductsContext);

  // Create state to keep track of favorite status for each restaurant item
  const [favoriteItems, setFavoriteItems] = useState([]);

  // Function to handle adding or removing items from favorites
  const handleFavoriteClick = id => {
    if (favoriteItems.includes(id)) {
      // Item is already in favorites, so remove it
      setFavoriteItems(favoriteItems.filter(itemId => itemId !== id));
      removeFromFavorite(id); // Call the context function to remove from global favorites
    } else {
      // Item is not in favorites, so add it
      setFavoriteItems([...favoriteItems, id]);
      // You might want to call a context function to add to global favorites here if needed
      // e.g., addToFavorite(id);
    }
  };

  // Save favorite items to local storage whenever the favoriteItems state changes
  useEffect(() => {
    localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
  }, [favoriteItems]);

  // Load favorite items from local storage when the component mounts
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favoriteItems"));
    if (storedFavorites && Array.isArray(storedFavorites)) {
      setFavoriteItems(storedFavorites);
    }
  }, []);

  return (
    <div>
      <div className="resturnat_div">
        {ResturantsData.map(restaurant => (
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
                    favoriteItems.includes(restaurant.id) ? heart_2 : heart_1
                  }
                  alt="Favorite"
                  onClick={() => handleFavoriteClick(restaurant.id)}
                />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Display the favorite items on a separate page/component */}
    </div>
  );

  // ORGINAL USE THIS
}

export default Resturants;
