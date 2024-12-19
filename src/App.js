import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import About from './Components/About/About';
import ImageGrid from './Components/ImageGrid/ImageGrid';
import ContactSection from './Components/ContactForm/ContactForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const appStyles = {
  padding: '0',
  backgroundColor: '#f4f4f4',
};

const App = () => {
  return (
    <div style={appStyles}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ImageGrid />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
    </div>
  );
};

export default App;
