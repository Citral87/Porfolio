import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMapMarkerAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "../../src/components/css/ContactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    message: "",
  });
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xefxkrr",
        "template_ogip1fu",
        e.target,
        "YO1-QkFXPLUAEI0xF"
      )
      .then(
        (result) => {
          console.log("Email successfully sent!");
          setFormData({ from_name: "", email: "", message: "" });
          setIsEmailSent(true);
          setTimeout(() => setIsEmailSent(false), 5000);
        },
        (error) => {
          console.log("Failed to send email:", error);
          setIsEmailSent(false);
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (isEmailSent) setIsEmailSent(false);
  };

  return (
    <section id="contact">
      <div className="contact-wrapper">
        <div className="contact-info">
          <h3>Mes coordonnées :</h3>
          <div className="contact-item">
            <FontAwesomeIcon icon={faPhone} />
            <a href="tel:+33777939131">
              <span>+33 7 77 93 91 31</span>
            </a>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <span>Limoges, France</span>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>thierry.salzedas@gmail.com</span>
          </div>
          <h3>Mes réseaux :</h3>
          <div className="contact-item">
            <a
              href="https://www.linkedin.com/in/thierry-salzedas-b19121272/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
              <span>LinkedIn</span>
            </a>
          </div>
          <div className="contact-item">
            <a
              href="https://github.com/Citral87"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
        <div className="contact-form-container">
          <h2>Contactez moi !</h2>
          {isEmailSent && (
            <div className="email-send-confirmation">
              Votre message a été envoyé avec succès !
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <label htmlFor="from_name">Votre nom:</label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              placeholder="Votre nom"
              required
              value={formData.from_name}
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
            <label htmlFor="message">Votre message:</label>
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
