import React, { createContext, useEffect, useState } from "react";


export const MyProductsContext = createContext(null);

const getFavoriteItems = () => {
  const storedItems = localStorage.getItem("favoriteItems");
  return storedItems ? JSON.parse(storedItems) : {};
};

export const MyproductContextProvider = (props) => {
  const [favoriteItems, setFavoriteItems] = useState(getFavoriteItems());

  useEffect(() => {
    localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
  }, [favoriteItems]);

  const addToFavorite = (itemId) => {
    setFavoriteItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
    }));
  };

  const removeFromFavorite = (itemId) => {
    setFavoriteItems((prev) => {
      const updatedItems = { ...prev };
      delete updatedItems[itemId];
      return updatedItems;
    });
  };

  const contextValue = {
    FavoriteItems: favoriteItems,
    addToFavorite,
    removeFromFavorite,
  };

  return (
    <MyProductsContext.Provider value={contextValue}>
      {props.children}
    </MyProductsContext.Provider>
  );
};
