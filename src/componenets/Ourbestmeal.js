import React from "react";
import menu1 from "../images/menu-1.png";
import StarRating from "./Star_rating";

function Ourbestmeal() {
  return (
    <section className="ourbestmeal_div">
      <h2 className="ourbest_meal_title_text">Our Best Menu</h2>
      <p className="bestmeal_para_text">
        All in good taste elementum integer enim neque volutpat ac.
      </p>
      <div className="general_menu_div">
        <div className="section_container">
          <div className="img_text_">
            <img className="product_img" src={menu1} alt="product image" />
            <p className="product_title">Shrimps Tomato</p>
            <div className="rate_price_div">
              <div className="price">$18.30</div>
              <div className="rating">
                4.6
                <StarRating rating={4} />
              </div>
            </div>
          </div>
        </div>
        <div className="section_container">
          <div className="img_text_">
            <img className="product_img" src={menu1} alt="product image" />
            <p className="product_title">Avocado Tuna</p>
            <div className="rate_price_div">
              <div className="price">$12.40</div>
              <div className="rating">
                4.8
                <StarRating rating={5} />
              </div>
            </div>
          </div>
        </div>
        <div className="section_container">
          <div className="img_text_">
            <img className="product_img" src={menu1} alt="product image" />
            <p className="product_title">Sald Salmon</p>
            <div className="rate_price_div">
              <div className="price">$11.00</div>
              <div className="rating">
                4.4
                <StarRating rating={4.4} />
              </div>
            </div>
          </div>
        </div>
        <div className="section_container">
          <div className="img_text_">
            <img className="product_img" src={menu1} alt="product image" />
            <p className="product_title">Barley Porridge</p>
            <div className="rate_price_div">
              <div className="price">$18.30</div>
              <div className="rating">
                4.7
                <StarRating rating={4.7} />
              </div>
            </div>
          </div>
        </div>
        <div className="section_container">
          <div className="img_text_">
            <img className="product_img" src={menu1} alt="product image" />
            <p className="product_title">Shrimps Tomato</p>
            <div className="rate_price_div">
              <div className="price">$18.30</div>
              <div className="rating">
                4.6
                <StarRating rating={4.6} />
              </div>
            </div>
          </div>
        </div>
        <div className="section_container">
          <div className="img_text_">
            <img className="product_img" src={menu1} alt="product image" />
            <p className="product_title">Avocado Tuna</p>
            <div className="rate_price_div">
              <div className="price">$18.30</div>
              <div className="rating">
                4.8
                <StarRating rating={5} />
              </div>
            </div>
          </div>
        </div>
        <div className="section_container">
          <div className="img_text_">
            <img className="product_img" src={menu1} alt="product image" />
            <p className="product_title">Sald Salmon</p>
            <div className="rate_price_div">
              <div className="price">$18.30</div>
              <div className="rating">
                4.4
                <StarRating rating={4.4} />
              </div>
            </div>
          </div>
        </div>
        <div className="section_container">
          <div className="img_text_">
            <img className="product_img" src={menu1} alt="product image" />
            <p className="product_title">Barley Porridge</p>
            <div className="rate_price_div">
              <div className="price">$16.30</div>
              <div className="rating">
                4.7
                <StarRating rating={4.7} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ourbestmeal;
