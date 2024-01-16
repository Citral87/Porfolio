import React, { useState } from "react";
import Modal from "react-modal";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../src/components/css/Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

Modal.setAppElement("#root");

const skillsData = {
  HTML5: "../../logo/HTML5_logo_and_wordmark.svg.png",
  CSS3: "../../logo/CSS3_logo_and_wordmark.svg.png",
  JavaScript: "../../logo/Javascript_badge.svg",
  React: "../../logo/react-logo.png",
  Redux: "../../logo/Redux.png",
  Sass: "../../logo/saas-technology-icon-logo.webp",
  SEO: "../../logo/seologo.png",
};

const arrowStyles = {
  position: "absolute",
  zIndex: 2,
  top: "calc(50% - 15px)",
  width: 30,
  height: 30,
  cursor: "pointer",
  backgroundColor: "#071639",
  color: "white",
  border: "none",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 0,
};

function Projects() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});

  const projects = [
    {
      mainImage: "../../image/redux1.webp",
      title: "ArgentBank",
      description:
        "Implémenter le front-end d’une application bancaire avec React.",
      fullDescription:
        "J ai développé le tableau de bord utilisateur pour Argent Bank, en créant une interface responsive avec React et en gérant l état avec Redux. Les principales fonctionnalités implémentées comprenaient l authentification, la gestion de profil, et la préparation à l intégration de transactions. Le projet a été conduit avec un accent sur le code optimisé et la réutilisabilité des composants.",
      skills: ["React", "Redux"],
      images: [
        "../../image/redux1.webp",
        "../../image/redux 2.webp",
        "../../image/redux 3.webp",
      ],
    },
    {
      mainImage: "../../image/react1.webp",
      title: "Kasa",
      description:
        "Création d’une application web de location immobilière avec React.",
      fullDescription:
        "Pour la refonte de la plateforme web de Kasa, j ai mis en œuvre une application React en suivant des maquettes Figma précises. Ce projet a nécessité une approche front-end moderne avec React Router pour le routage et un JSON statique en guise de back-end temporaire. J ai développé des fonctionnalités interactives telles que la galerie d images avec navigation et les collapses dynamiques, en m assurant que l UI reste fidèle aux prototypes fournis et optimisée pour une expérience utilisateur responsive et intuitive.",
      skills: ["React"],
      images: [
        "../../image/react1.webp",
        "../../image/react 2.webp",
        "../../image/react 3.webp",
      ],
    },
    {
      mainImage: "../../image/html css.webp",
      title: "Booki",
      description:
        "Création de la page d’accueil d’une agence de voyage avec HTML & CSS.",
      fullDescription:
        "J ai intégré l interface d un site de réservation : Booki, en convertissant les maquettes fournies en un code HTML et CSS propre et responsive. J ai collaboré étroitement avec l équipe technique pour respecter les spécifications et les contraintes techniques, en créant une structure de fichiers cohérente et en développant des éléments d interface conformes aux designs pour desktop, tablette et mobile. Ce projet a renforcé mes compétences en intégration web précise et en adaptation aux différentes tailles d écran, tout en évitant l utilisation de code prégénéré pour garantir la qualité et la maintenabilité du site.",
      skills: ["HTML5", "CSS3"],
      images: ["../../image/html css.webp", "../../image/html css 2.webp"],
    },
    {
      mainImage: "../../image/html saas 1.webp",
      title: "Ohmyfood",
      description:
        "Développement d’un site proposant le menu de restaurants avec des animations CSS avancées.",
      fullDescription:
        "J ai pris en charge le développement d un site mobile first pour les menus de restaurants, en utilisant Sass pour une écriture CSS plus efficace et organisée. J ai rigoureusement suivi les maquettes mobiles et desktop, intégrant des animations sophistiquées pour une expérience utilisateur optimale. Ce projet a non seulement renforcé mes compétences en intégration responsive, mais a également mis en valeur ma capacité à implémenter des fonctionnalités interactives avancées, assurant ainsi une préparation rapide des plats dès l arrivée des clients.",
      skills: ["HTML5", "CSS3", "Sass"],
      images: [
        "../../image/html saas 1.webp",
        "../../image/html saas 3.webp",
        "../../image/html saas 4.webp",
      ],
    },
    {
      mainImage: "../../image/js 1.webp",
      title: "Sophie Buel",
      description: "Création d’une page web dynamique avec JavaScript.",
      fullDescription:
        "J ai été chargé de renforcer une équipe dans la création du site portfolio d une architecte d intérieur. Mon rôle était de développer en JavaScript des fonctionnalités interactives pour une page de présentation des œuvres, une page de connexion administrateur, et une modale d upload de médias, le tout en m appuyant sur les designs Figma et le code back-end fourni. Ce projet a mis en exergue ma capacité à transformer des maquettes en une interface dynamique et à implémenter des solutions de gestion de contenu efficaces.",
      skills: ["JavaScript"],
      images: ["../../image/js 1.webp"],
    },

    {
      mainImage: "./../image/seo_after.webp",
      title: "Optimisation SEO pour Nina Carducci",
      description:
        "Amélioration du référencement et de la performance du site d’une photographe professionnelle.",
      fullDescription:
        "Mis en œuvre des stratégies d’optimisation SEO pour le site de Nina Carducci. L’audit initial a révélé des opportunités d’amélioration de la vitesse de chargement et de l’accessibilité. J’ai optimisé les images, révisé le code pour la performance et l’accessibilité, et fourni un rapport détaillé des améliorations apportées, résultant en une amélioration significative des scores Lighthouse et Wave.",
      skills: ["SEO"],
      images: ["../../image/seo_before.webp", "../../image/seo_after.webp"],
    },
  ];

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 2,
    500: 1,
  };

  const openModal = (project) => {
    const projectSkills = project.skills.map((skill) => ({
      name: skill,
      logo: skillsData[skill],
    }));
    setSelectedProject({ ...project, skills: projectSkills });
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <section id="projects">
      <h2>Mes projets :</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            onClick={() => openModal(project)}
          >
            <img src={project.mainImage} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Project Details"
        className="modal"
        overlayClassName="overlay"
      >
        <div className="modal-header">
          <div className="close-button" onClick={closeModal}>
            &times;
          </div>
          <div className="modal-title-description">
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.fullDescription}</p>
          </div>
          <div className="project-skills">
            {selectedProject.skills &&
              selectedProject.skills.map((skill, index) => (
                <img key={index} src={skill.logo} alt={skill.name} />
              ))}
          </div>
        </div>
        <Carousel
          infiniteLoop
          showArrows={true}
          showStatus={false}
          showIndicators={true}
          showThumbs={false}
          renderArrowPrev={(onClickHandler, hasPrev) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                style={{ ...arrowStyles, left: 100 }}
                className="custom-left-arrow"
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                style={{ ...arrowStyles, right: 100 }}
                className="custom-right-arrow"
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            )
          }
        >
          {selectedProject.images &&
            selectedProject.images.map((image, index) => (
              <div key={index} className="carousel-slide">
                <img src={image} alt={`Slide ${index}`} />
                {selectedProject.title ===
                  "Optimisation SEO pour Nina Carducci" && (
                  <div className="carousel-caption">
                    {index === 0 ? "Avant" : index === 1 ? "Après" : ""}
                  </div>
                )}
              </div>
            ))}
        </Carousel>

        <button className="modal-button" onClick={closeModal}>
          Fermer
        </button>
      </Modal>
    </section>
  );
}

export default Projects;
