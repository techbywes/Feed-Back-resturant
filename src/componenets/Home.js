import React from "react";
import Nav from "./Nav";
import HeroSection from "./HeroSection";
import RecentlyAdded from "./Ourbestmeal";
import Bestoftheday from "./Bestoftheday";
import Ourbestmeal from "./Ourbestmeal";
import Besttest from "./Besttest";
import TestimonialCarousel from "./Testimonial";

import Footer from "./Footer";

function Home() {
  return (
    <div className="Home_page_div_">
      <Nav />
      <HeroSection />
      <RecentlyAdded />
      <Bestoftheday />
      <Ourbestmeal />
      <Besttest />
      <TestimonialCarousel />
      <Footer />
    </div>
  );
}

export default Home;
