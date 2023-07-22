import React from "react";
import HeroSection from "./HeroSection";
import Bestoftheday from "./Bestoftheday";
import Besttest from "./Besttest";
import TestimonialCarousel from "./Testimonial";
import { Recently } from "./Recently";
import FavoriteResturants from "./FavoriteResturants";




function Home() {
  return (
    <div className="Home_page_div_">
      <HeroSection />
      <Recently />
      <FavoriteResturants/>
      <Bestoftheday />
      <TestimonialCarousel />
      <Besttest />
    </div>
  );
}

export default Home;
