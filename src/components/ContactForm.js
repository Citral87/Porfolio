import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt , faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../../src/components/css/ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    window.open(`mailto:thierry.salzedas@gmail.com?subject=Message de ${name}&body=${message} Email: ${email}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section id="contact">
      <div className="contact-wrapper">
        <div className="contact-info">
          <h3>Mes Coordonnées</h3>
          <div className="contact-item">
            <FontAwesomeIcon icon={faPhone} />
            <span>+33 7 77 93 91 31</span>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <span>Limoges, France</span>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>thierry.salzedas@gmail.com</span>
          </div>
          <h3>Mes Réseaux</h3>
          <div className="contact-item">
            <a href="https://www.linkedin.com/in/thierry-salzedas-b19121272/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
              <span>LinkedIn</span>
            </a>
          </div>
          <div className="contact-item">
            <a href="https://github.com/Citral87" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Contactez Moi !</h2>
         <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nom:</label>
        <input 
          type="text" 
          id="name"
          name="name" 
          placeholder="Votre nom" 
          required 
          value={formData.name} 
          onChange={handleChange} 
        />

        <label htmlFor="email">Adresse Mail:</label>
        <input 
          type="email" 
          id="email"
          name="email" 
          placeholder="Votre adresse mail" 
          required 
          value={formData.email} 
          onChange={handleChange} 
        />

        <label htmlFor="message">Message:</label>
        <textarea 
          id="message"
          name="message" 
          placeholder="Votre message" 
          required 
          value={formData.message} 
          onChange={handleChange}
        ></textarea>

        <button type="submit">Me contacter</button>
      </form>

        </div>
      </div>
    </section>
  );
}

export default ContactForm;
