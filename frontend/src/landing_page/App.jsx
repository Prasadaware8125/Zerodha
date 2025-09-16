import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import Layout and Page Components
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home/Home';
import AuthPage from './pages/AuthPage'; // <-- Import the new page

function App() {
  return (
    <div className="landing-page">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<AuthPage />} /> {/* <-- Use AuthPage here */}
          
          {/* Add routes for your other pages here */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/products" element={<Products />} /> */}
          {/* ... etc */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;