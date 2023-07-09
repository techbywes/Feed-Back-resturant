import React from "react";
import search from "../images/search.png"

function Search() {
  return (
    <div className="search_general_div">
      <div className="input_btn_div">
        <input
          className="input_"
          type="text"
          placeholder="Search restaurants nearby "
        />
        <button className="submit_btn"><img className="search_icon" src={search} alt="" /></button>
      </div>
    </div>
  );
}

export default Search;
