import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./componenets/Home";
import Faq from "./componenets/FAQ";
import About from "./componenets/About";
import Contact from "./componenets/Contact";
import WriteReviews from "./componenets/WriteReviews";
import Favourite from "./componenets/Favourite";
import PremiumPage from "./componenets/PremiumPage";
import { MyproductContextProvider } from "./context/Myproduct-context";
import { Recently } from "./componenets/Recently";


import Nav from "./componenets/Nav";
import Footer from "./componenets/Footer";

function App() {
  return (
    <div className="App">
      <MyproductContextProvider>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Faq" element={<Faq />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/WriteReviews" element={<WriteReviews />} />
            <Route path="/Favourite" element={<Favourite />} />
            <Route path="/Recently" element={<Recently />} />
            <Route path="/PremiumPage" element={<PremiumPage />} />
          </Routes>
          <Footer />
        </Router>
      </MyproductContextProvider>
    </div>
  );
}

export default App;
