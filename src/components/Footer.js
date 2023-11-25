import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../../src/components/css/Footer.css'; 

function Footer() {
  return (
    <footer>
      <div className="footer-item">
        <FontAwesomeIcon icon={faPhone} />
        <span>+33 7 77 93 91 31</span>
      </div>
      <div className="footer-item">
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        <span>Limoges, France</span>
      </div>
      <a href="mailto:thierry.salzedas@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} />
        <span className="sr-only">Envoyer un email</span>
      </a>
      <div className="footer-item">
        <a href="https://www.linkedin.com/in/thierry-salzedas-b19121272/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
          <span className="sr-only">Voir le profil LinkedIn</span>
        </a>
      </div>
      <div className="footer-item">
        <a href="https://github.com/Citral87" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
          <span className="sr-only">Voir le profil GitHub</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;