import React from "react";
import HeroSection from "./HeroSection";
import Bestoftheday from "./Bestoftheday";
import Besttest from "./Besttest";
import TestimonialCarousel from "./Testimonial";
import { Recently } from "./Recently";
import Resturants from "./Resturants";



function Home() {
  return (
    <div className="Home_page_div_">
      <HeroSection />
      <Recently />
      <Resturants/>
      <Bestoftheday />
      <TestimonialCarousel />
      <Besttest />
    </div>
  );
}

export default Home;
