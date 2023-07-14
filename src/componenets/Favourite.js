import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import NoFavourites from "./NoFavourites";

function Favourite() {
  return (
    <>
      <Nav />
      <div className="favourite_div__">
        <NoFavourites />
      </div>

      <Footer />
    </>
  );
}

export default Favourite;
