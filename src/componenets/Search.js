import React, { useState } from "react";
import search from "../images/search.png";
import ResturantsData from "./ResturantsData";
import SearchResult from "./SearchResult";

function Search({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (event) => {
    const userInput = event.target.value;
    setSearchQuery(userInput);

    // Generate suggestions based on the first character of the user's input
    const filteredSuggestions = ResturantsData.filter((restaurant) =>
      restaurant.rname.toLowerCase().startsWith(userInput.toLowerCase())
    );

    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion.rname);
    setSuggestions([]); // Clear suggestions after selecting one
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    onSearch(searchQuery);
    setSearchQuery(""); // Clear the searchQuery after search is performed
  };

  return (
    <div className="search_general_div">
      <div className="input_btn_div">
        <input
          className="input_"
          type="text"
          placeholder="Search restaurants nearby "
          value={searchQuery}
          onInput={handleInputChange} // Handle input changes
          onKeyPress={handleKeyPress} // Handle Enter key press
        />
        <datalist id="suggestions">
          {suggestions.map((suggestion) => (
            <option
              key={suggestion.id}
              value={suggestion.rname}
              onClick={() => handleSuggestionClick(suggestion)}
            />
          ))}
        </datalist>
        <button className="submit_btn" onClick={handleSearch}>
          <img className="search_icon" src={search} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Search;