import React from "react";
import { Carousel } from "react-responsive-carousel";
import "../../src/components/css/BannerCarousel.css";

const BannerCarousel = () => {
  return (
    <Carousel
      className="main-carousel"
      autoPlay
      infiniteLoop
      showStatus={false}
      showThumbs={false}
      showIndicators={false}
      showArrows={false}
      interval={5000}
    >
      <div className="carousel-slide">
        <img src="../../image/code.png" alt="Image 1" />
        <div className="carousel-text">
          Créer des solutions élégantes et efficaces
        </div>
        <div className="carousel-quote">
          "La programmation n'est pas seulement de la logique, mais aussi de la
          créativité."{" "}
        </div>
      </div>
      <div className="carousel-slide">
        <img src="../../image/seocar.png" alt="Image 2" />
        <div className="carousel-text">
          Améliorer la visibilité et l'accessibilité en ligne
        </div>
        <div className="carousel-quote">
          "Dans le monde de la technologie, l'apprentissage ne s'arrête jamais."
        </div>
      </div>
      <div className="carousel-slide">
        <img src="../../image/server.png" alt="Image 3" />
        <div className="carousel-text">
          Au cœur de la transformation numérique
        </div>
        <div className="carousel-quote">
        "La technologie est l'outil qui transforme les idées en réalités tangibles."{" "}
        </div>
      </div>
    </Carousel>
  );
};

export default BannerCarousel;
