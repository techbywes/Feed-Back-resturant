import "./App.css";
import Nav from "./componenets/Nav";
import HeroSection from "./componenets/HeroSection";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
        <HeroSection/>
      </header>
    </div>
  );
}

export default App;
