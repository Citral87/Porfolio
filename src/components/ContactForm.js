import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
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
      <h2>Contact :</h2>
      <div className="contact-container">
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
      <div className="contact-info">
          <div className="contact-item">
            <FontAwesomeIcon icon={faPhone} />
            <span>+33 7 77 93 91 31</span>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <span>Limoges, France</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
