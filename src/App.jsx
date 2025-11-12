import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}

export default App;