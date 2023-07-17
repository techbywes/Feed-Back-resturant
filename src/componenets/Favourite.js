import React, { useContext } from "react";
import { PRODUCTS } from "./Products";
import { MyProductsContext } from "../context/Myproduct-context";
import { MyFavouriteItems } from "./MyFavouriteItems";

import NoFavourites from "./NoFavourites";

function Favourite() {
  const { FavoriteItems } = useContext(MyProductsContext);
  const hasFavoriteItem = PRODUCTS.some(
    product => FavoriteItems[product.id] >= 1
  );

  return (
    <div className="favourite_div__">
      <div className="ur_fav_items">Your Favorite Menu</div>
      <div className="general_menu_div">
        {PRODUCTS.map(product => {
          if (FavoriteItems[product.id] >= 1) {
            return <MyFavouriteItems data={product} />;
          }
          return null; // Return null for products that are not favorites
        })}
        {!hasFavoriteItem && <NoFavourites />}{" "}
        {/* Render NoFavourites only when there are no favorite items */}
      </div>
    </div>
  );
}

export default Favourite;
