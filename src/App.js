import "./App.css";
import Nav from "./componenets/Nav";
import HeroSection from "./componenets/HeroSection";
import Bestoftheday from "./componenets/Bestoftheday";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
        <HeroSection/>
        <Bestoftheday/>
      </header>
    </div>
  );
}

export default App;
