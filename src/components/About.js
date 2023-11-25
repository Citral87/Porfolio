import React, { useState, useEffect } from "react";
import { Parallax } from "react-scroll-parallax";
import "../../src/components/css/About.css";

function About() {
  const [text, setText] = useState("");
  const phrase = "Bonjour, je suis Thierry Salzedas.";

  useEffect(() => {
    const typeWriter = (index = 0) => {
      if (index < phrase.length) {
        setText(phrase.substring(0, index + 1));
        setTimeout(() => typeWriter(index + 1), 150);
      }
    };

    typeWriter();
  }, []);

  return (
    <section id="about">
      <Parallax className="custom-class" y={[10, -30]}>
        <img src={"../../image/photoprofile2.webp"} alt="Salzedas Thierry" />
      </Parallax>
      <div>
        <div className="console-container">
          <span>{text}</span>
        </div>
        <Parallax className="custom-class" y={[-20, 20]}>
          <p>
            Développeur Front-end passionné par l'univers du digital, j'ai
            toujours été attiré par les nouvelles technologies et la manière
            dont elles façonnent notre avenir.
          </p>
          <p>
            {" "}
            Chaque ligne de code que j'écris est le reflet de ma curiosité et de
            mon désir de créer des expériences web fluides et mémorables.
          </p>
          <p>
            {" "}
            La programmation, pour moi, n'est pas qu'une compétence, c'est une
            véritable aventure où chaque projet est une nouvelle opportunité
            d'apprendre et de grandir en tant que développeur.
          </p>
        </Parallax>
      </div>
    </section>
  );
}

export default About;
