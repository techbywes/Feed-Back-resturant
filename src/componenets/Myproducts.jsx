import React from "react";

export const Myproducts = props => {
  const { data: { id, productName, price, productImage } = {} } = props;
  return (
    <div>
      <div className="section_container">
        <div className="img_text_">
          <img className="product_img" src={productImage} alt="Product" />
          <h1 className="product_title">{productName}</h1>
          <div className="rate_price_div">
            <p>Price: ${price}</p>
            <div className="price"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
