import React, { useState } from "react";
import Modal from "react-modal";
import "../../src/components/css/Skills.css";
import "../../src/components/css/Modal.css";

Modal.setAppElement("#root");

function Skills() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState({});

  const skills = [
    {
      name: "HTML5",
      logo: "../../logo/HTML5_logo_and_wordmark.svg.png",
      text: "HTML5 - Structure de page web",
      description:
        "J ai utilisé HTML5 pour structurer le contenu de manière sémantique, en garantissant l accessibilité et la compatibilité avec les différents navigateurs.",
    },
    {
      name: "CSS3",
      logo: "../../logo/CSS3_logo_and_wordmark.svg.png",
      text: "CSS3 - Style visuel",
      description:
        "Jai appliqué CSS3 pour styliser et mettre en forme les sites web, en utilisant des techniques modernes comme Flexbox et Grid.",
    },
    {
      name: "JS",
      logo: "../../logo/Javascript_badge.svg",
      text: "JavaScript - Interactivité",
      description:
        "J ai intégré JavaScript pour ajouter de l interactivité aux sites web, en créant des fonctionnalités dynamiques et réactives.",
    },
    {
      name: "React",
      logo: "../../logo/react-logo.png",
      text: "React - Bibliothèque UI",
      description:
        "J ai développé des interfaces utilisateur dynamiques avec React, en optimisant la performance et en créant une expérience utilisateur fluide.",
    },
    {
      name: "Redux",
      logo: "../../logo/Redux.png",
      text: "Redux - Gestion d'état",
      description:
        "J ai utilisé Redux pour gérer l état global d applications React, en assurant un flux de données cohérent et prévisible.",
    },
    {
      name: "Saas",
      logo: "../../logo/saas-technology-icon-logo.webp",
      text: "Sass - Préprocesseur CSS",
      description:
        "J ai employé Sass pour écrire un CSS plus organisé et maintenable, en utilisant des variables, des mixins et des fonctions.",
    },
    {
      name: "SEO",
      logo: "../../logo/seologo.png",
      text: "Optimisation SEO",
      description:
        "J ai optimisé les sites web pour les moteurs de recherche, en améliorant leur accessibilité et leur visibilité.",
    },
  ];

  function openModal(skill) {
    setSelectedSkill(skill);
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <section id="skills">
      <h2>Mes compétences :</h2>
      <div className="skill-set">
        {skills.map((skill, index) => (
          <div
            className={`skill-logo ${
              skill.name === "Redux" ? "redux-specific-class" : ""
            }`}
            key={index}
            onClick={() => openModal(skill)}
          >
            <img src={skill.logo} alt={skill.text} />
            <div className="skill-description">{skill.text}</div>
          </div>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Détail compétence"
        className="Modal"
        overlayClassName="Overlay"
      >
        <div className="modal-close-button" onClick={closeModal}>
          &times;
        </div>
        <h2>{selectedSkill.text}</h2>
        <img src={selectedSkill.logo} alt={selectedSkill.text} />
        <p>{selectedSkill.description}</p>
      </Modal>
    </section>
  );
}

export default Skills;
