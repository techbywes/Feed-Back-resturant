import React from "react";
import Nav from "./Nav";
import HeroSection from "./HeroSection";
import RecentlyAdded from "./RecentlyAdded";
import Bestoftheday from "./Bestoftheday";
import Besttest from "./Besttest";
import TestimonialCarousel from "./Testimonial";
import { Recently } from "./Recently";

import Footer from "./Footer";

function Home() {
  return (
    <div className="Home_page_div_">
      <Nav />
      <HeroSection />
      <RecentlyAdded />
      <Bestoftheday />
      <Recently />
      <Besttest />
      <TestimonialCarousel />
      <Footer />
    </div>
  );
}

export default Home;
