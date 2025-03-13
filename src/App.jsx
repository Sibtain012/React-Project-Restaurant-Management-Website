import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/NavBar'; 
import Home from './pages/Home';
import Menu from './pages/Menu';
import Footer from './components/Footer';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Gallery from './pages/Gallery';

function App() {
  if (typeof global === 'undefined') {
    window.global = window;
  }
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/menu" element={<Menu />}></Route>
      <Route path="/contact" element={<ContactUs />}></Route>
      <Route path="/about" element={<AboutUs />}></Route>
      <Route path="/gallery" element={<Gallery />}></Route>

    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
