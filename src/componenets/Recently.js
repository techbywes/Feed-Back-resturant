import React from "react";
import { PRODUCTS } from "./Products";
import Myproducts from "./Myproducts";

export const Recently = () => {
  return (
    <section className="ourbestmeal_div RecentlyAdded">
      <h2 className="ourbest_meal_title_text">Recently Added</h2>
      <p className="bestmeal_para_text">
        All in good taste elementum integer enim neque volutpat ac.
      </p>

      <div className="general_menu_div">
        {PRODUCTS.map(product => (
          <Myproducts key={product.id}  data={product} />
        ))}
      </div>
    </section>
  );
};
