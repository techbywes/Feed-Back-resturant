import React, { useState, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

library.add(fasStar, farStar);

const StarRating2 = ({ rating, onChange }) => {
  const [selectedRating, setSelectedRating] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleStarClick = selectedRating => {
    setSelectedRating(selectedRating);
    if (onChange) {
      onChange(selectedRating);
    }
  };

  const getStarColor = starIndex => {
    if (starIndex <= selectedRating) {
      switch (starIndex) {
        case 1:
          return "#ffffff";
        case 2:
          return "#ffffff"; 
        case 3:
          return "#ffffff";
        case 4:
          return "#ffffff"; 
        case 5:
          return "#ffffff"; 
        default:
          return "white"; // Default color
      }
    }
    return "white"; // Default color
  };

  const getStarFill = starIndex => {
    if (starIndex <= selectedRating) {
      return "#ffffff"; // White fill color for selected stars
    }
    return "transparent"; // Transparent fill color for unselected stars
  };

  const getStarText = starIndex => {
    if (starIndex <= selectedRating) {
      switch (starIndex) {
        case 1:
          return "Poor";
        case 2:
          return "Better";
        case 3:
          return "OK";
        case 4:
          return "Good";
        case 5:
          return "Great";
        default:
          return "";
      }
    }
    return ""; // Default text
  };

  const starSize = windowWidth <= 600 ? "1.2rem" : "1.4rem";

  const starIcons = [];

  for (let i = 1; i <= 5; i++) {
    const starIcon = (
      <FontAwesomeIcon
        icon={i <= selectedRating ? fasStar : farStar}
        key={i}
        style={{ fill: getStarFill(i), color: "#ffffff", fontSize: starSize }}
      />
    );

    starIcons.push(
      <div
        key={i}
        onClick={() => handleStarClick(i)}
        style={{
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 0.5rem",
          position: "relative",
        }}
      >
        {starIcon}
        <div
          style={{
            color: getStarColor(i),
            transition: "color 0.2s",
            fontWeight: "bold",
            visibility: selectedRating === i ? "visible" : "hidden",
            marginTop: "0.5rem",
          }}
        >
          {getStarText(i)}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="gneral_reveiw_div">
        <div className="starIcons2">{starIcons}</div>
      </div>
    </>
  );
};

export default StarRating2;
