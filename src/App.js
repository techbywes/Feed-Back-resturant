import "./App.css";
import Nav from "./componenets/Nav";
import HeroSection from "./componenets/HeroSection";
import Bestoftheday from "./componenets/Bestoftheday";
import Ourbestmeal from "./componenets/Ourbestmeal";
import Besttest from "./componenets/Besttest";
import TestimonialCarousel from "./componenets/Testimonial";
import RecentlyAdded from "./componenets/Recently";
import Footer from "./componenets/Footer";
import Register from "./componenets/Register";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <HeroSection />
        <RecentlyAdded />
        <Bestoftheday />
        <Ourbestmeal />
        <Besttest />
        <TestimonialCarousel />
        <Footer/>
        {/* <Register/> */}
      </header>
    </div>
  );
}

export default App;
