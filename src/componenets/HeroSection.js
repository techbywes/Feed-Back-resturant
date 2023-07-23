import React, { useState } from "react";
import buggerimage from "../images/bugger.png";
import Search from "./Search";
import SearchResult from "./SearchResult";
import ResturantsData from "./ResturantsData";

function HeroSection() {
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = query => {
    const filteredResults = ResturantsData.filter(restaurant =>
      restaurant.rname.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <section className="hero_div">
      <div className="text_btn_div">
        <div className="title_div">
          <h1 className="title_text">FEED-BACK POST ULTIMATE GUIDE</h1>
          <div className="line_tex"></div>
        </div>
        <div className="paragraphtext_div">
          <p className="paragraph_text">
            Find your next great culinary experience with <br />{" "}
            <span className="feed_back_text">FEED BACK POST</span> Guide
          </p>
        </div>
        <Search onSearch={handleSearch} />
      </div>
      <div className="img_div">
        <img className="hero_img" src={buggerimage} alt="" />
      </div>
      {searchResults.length > 0 && (
        <SearchResult searchResults={searchResults} />
      )}
    </section>
  );
}

export default HeroSection;