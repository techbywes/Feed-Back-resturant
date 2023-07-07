import "./App.css";
import Nav from "./componenets/Nav";
import HeroSection from "./componenets/HeroSection";
import Bestoftheday from "./componenets/Bestoftheday";
import Ourbestmeal from "./componenets/Ourbestmeal";
import Besttest from "./componenets/Besttest";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
        <HeroSection/>
        <Bestoftheday/>
        <Ourbestmeal/>
        <Besttest/>
      </header>
    </div>
  );
}

export default App;
