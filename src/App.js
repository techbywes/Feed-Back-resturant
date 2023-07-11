import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./componenets/Home";
import Faq from "./componenets/FAQ";
import About from "./componenets/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
