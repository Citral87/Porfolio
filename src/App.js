import React, { useState, useEffect } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Navbar from './components/Navbar';
import BannerCarousel from './components/BannerCarousel';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <ParallaxProvider>
      <div className="App">
        <Navbar />
        <About />
        <BannerCarousel />
        <Skills />
        <Projects />
        <ContactForm />
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default App;
