import ResturantsData from "./ResturantsData";
import StarRating from "./Star_rating";
import heart_1 from "../images/heart1.png";
import heart_2 from "../images/heart2.png";
import React, { useContext, useState } from "react";

function Resturants(props) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="resturnat_div">
      {ResturantsData.map(restaurant => (
        <div className="section_container">
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
                />{" "}
              </div>

              <div>
                <p className="street__rest">{restaurant.address}</p>
              </div>
            </div>
            <p className="orderz_count__">{restaurant.somedata}</p>
          </div>
        </div>

        // <div key={restaurant.id}>
        //   <div className="resturant_img_div" _>
        //     <img
        //       className="productz_img"
        //       src={restaurant.imgdata}
        //       alt={restaurant.rname}
        //     />
        //
        //
        //   </div>
        // </div>
      ))}
    </div>
  );
}

export default Resturants;
