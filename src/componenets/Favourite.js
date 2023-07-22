import React, { useContext } from "react";
import { PRODUCTS } from "./Products";
import { MyProductsContext } from "../context/Myproduct-context";
import { MyFavouriteItems } from "./MyFavouriteItems";
import FavoriteResturants from "./FavoriteResturants";

import NoFavourites from "./NoFavourites";

function Favourite() {
  const { FavoriteItems } = useContext(MyProductsContext);
  const hasFavoriteItem = PRODUCTS.some(
    product => FavoriteItems[product.id] >= 1
  );

  return (
    <>
    <div className="favourite_div__">
      <div className="general_menu_div">
        {PRODUCTS.map(product => {
          if (FavoriteItems[product.id] >= 1) {
            return <MyFavouriteItems data={product} />;
            <div className="ur_fav_items">
              <p>Your Favorite Menu</p>
            </div>;
          }
          return null;
        })}
        {!hasFavoriteItem && <NoFavourites />}{" "}
        <FavoriteResturants/>
      </div>
    </div>
    </>
  );
}

export default Favourite;
