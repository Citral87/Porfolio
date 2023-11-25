import React from 'react';
import '../../src/components/css/Loader.css'; 

const Loader = () => {
  return (
    <div className="loader-container">
      <img src="logo/tslogo.png" alt="Logo" className="loader-logo" />
      <p className="loader-message">Bienvenue</p>
    </div>
  );
};

export default Loader;

