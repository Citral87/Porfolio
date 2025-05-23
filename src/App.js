import React, { useState, useEffect } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Loader from './components/Loader';
import ReactGA from "react-ga4";

ReactGA.initialize("G-8PLP9NM6ED");

ReactGA.send("pageview");

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
        <Skills />
        <Projects />
        <ContactForm />
      </div>
    </ParallaxProvider>
  );
}

export default App;
