import React from "react"; // React library to build components
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // React Router components for routing
import Navbar from "./components/Navbar"; 
import Home from "./pages/Home"; 
import About from "./pages/About"; 
import Contact from "./pages/Contact"; 


const App = () => {
  return (
    // Router component for client-side routing
    <Router>
      <Navbar />
      <Routes>
        {/* Route for the Home page */}
        <Route path="/" element={<Home />} />
        
        {/* Route for the About page */}
        <Route path="/about" element={<About />} />
        
        {/* Route for the Contact page */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App; 
