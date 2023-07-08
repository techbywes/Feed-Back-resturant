import React from "react";
import StarRating from "./Star_rating";
import menu1 from "../images/menu-1.png";
import menu2 from "../images/menu-2.png";
import menu3 from "../images/menu-3.png";
import menu4 from "../images/menu-4.png";
import menu5 from "../images/menu-5.png";
import menu6 from "../images/menu-6.png";
import menu7 from "../images/menu-7.png";
import menu8 from "../images/menu-8.png";



function RecentlyAdded() {
  return (
    <section className="ourbestmeal_div RecentlyAdded">
      <h2 className="ourbest_meal_title_text">Recently Added</h2>
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
            <img className="product_img" src={menu2} alt="product image" />
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
            <img className="product_img" src={menu3} alt="product image" />
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
            <img className="product_img" src={menu4} alt="product image" />
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
            <img className="product_img" src={menu5} alt="product image" />
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
            <img className="product_img" src={menu6} alt="product image" />
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
            <img className="product_img" src={menu7} alt="product image" />
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
            <img className="product_img" src={menu8} alt="product image" />
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

export default RecentlyAdded;
