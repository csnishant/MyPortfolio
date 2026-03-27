import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Import pages
import Home from "./pages/Home";

import Header from "./components/Header";


const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <Router>
      {/* Optional Header here if needed globally */}
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      
      
      </Routes>
    </Router>
  );
};

export default App;
