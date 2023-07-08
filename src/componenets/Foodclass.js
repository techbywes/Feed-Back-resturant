import React from "react";
import fresh from "../images/fresh.png";
import healthy from "../images/healthy.png";
import natural from "../images/natural.png";
import juicy from "../images/juicy.png";
import freshca from "../images/freshca.png";

function Foodclass() {
  return (
    <div className="food_class_general_div">
      <div className="food_class_div">
        <div className="fresh_eat">
          <img className="fresh_img" src={fresh} alt="" />
        </div>
        <div className="fresh_eat">
          <img className="fresh_img" src={healthy} alt="" />
        </div>
        <div className="fresh_eat">
          <img className="fresh_img" src={natural} alt="" />
        </div>
        <div className="fresh_eat">
          <img className="fresh_img" src={juicy} alt="" />
        </div>
        <div className="fresh_eat">
          <img className="fresh_img" src={freshca} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Foodclass;
