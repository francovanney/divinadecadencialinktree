import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Contact from './pages/Contact/Contact';
import ParticleBackground from './components/ParticlesBackground';

const App = props => {
  return (
    <div>
      <ParticleBackground/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
