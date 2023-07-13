import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./componenets/Home";
import Faq from "./componenets/FAQ";
import About from "./componenets/About";
import Contact from "./componenets/Contact";
import WriteReviews from "./componenets/WriteReviews";
import Favourite from "./componenets/Favourite";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/WriteReviews" element={<WriteReviews />} />
          <Route path="/Favourite" element={<Favourite />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
