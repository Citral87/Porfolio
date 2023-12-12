import React from 'react';
import { Link } from 'react-scroll';
import '../../src/components/css/Navbar.css';

function Navbar() {
  return (
    <nav>
      <div className="navbar-brand">
        <img src="logo/tslogo.png" alt="Logo" className="navbar-logo" />
      </div>
      <div className="navbar-links">
        <Link to="home" smooth={true} aria-label="Aller à la section Accueil">Accueil</Link>
        <Link to="about" smooth={true} aria-label="Aller à la section À propos">À propos</Link>
        <Link to="projects" smooth={true} aria-label="Aller à la section Projets">Projets</Link>
        <Link to="contact" smooth={true} aria-label="Aller à la section Contact">Contact</Link>
        <a href= "cv.pdf" download="CV_Thierry_Salzedas.pdf">Télécharger CV</a>
      </div>
    </nav>
  );
}


export default Navbar;


