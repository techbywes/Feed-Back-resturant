import React, { createContext, useState } from "react";
import { PRODUCTS } from "../componenets/Products";
export const MyProductsContext = createContext(null);

const getFavoriteItems = () => {
  let Favourite = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    Favourite[i] = 0;
  }
  return Favourite;
};

export const MyproductContextProvider = props => {
  const [FavoriteItems, setFavoriteItems] = useState(getFavoriteItems());

  const addToFavorite = itemId => {
    setFavoriteItems(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromFavorite = itemId => {
    setFavoriteItems(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contextValue = { FavoriteItems, addToFavorite, removeFromFavorite };
  console.log(FavoriteItems);
  return (
    <MyProductsContext.Provider value={contextValue}>
      {props.children}
    </MyProductsContext.Provider>
  );
};
