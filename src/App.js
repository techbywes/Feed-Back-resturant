import "./App.css";
import Nav from "./componenets/Nav";
import HeroSection from "./componenets/HeroSection";
import Bestoftheday from "./componenets/Bestoftheday";
import Ourbestmeal from "./componenets/Ourbestmeal";
import Besttest from "./componenets/Besttest";
import TestimonialCarousel from "./componenets/Testimonial";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
        <HeroSection/>
        <Bestoftheday/>
        <Ourbestmeal/>
        <Besttest/>
        <TestimonialCarousel/>
      </header>
    </div>
  );
}

export default App;
