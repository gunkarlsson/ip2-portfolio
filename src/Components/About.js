import React, { useState, useEffect } from "react";
import styled from "styled-components";

const AboutSection = styled.section`
  overflow: hidden;
  border: 2px solid blue;
  display: grid;
  grid-template: 1fr 6fr 1fr / 6fr 1fr 9fr 1fr;

  .about-title {
    grid-row: 1 / -1;
    grid-column: 1;
    background-color: var(--primary-color);

    h1 {
      font-size: 5rem;
      line-height: 3rem;
      margin: 300px 20px 0 50px;
    }
    h1:last-of-type {
      margin: 40px 0 0 120px;
    }
  }

  .about-text {
    max-width: 52vw;
    grid-row: 2 / 3;
    grid-column: 3;
    padding: 30px;

    p {
      font-size: 1.2rem;
    }
  }

  img {
    display: none;
  }

  .hover-text:hover {
    cursor: pointer;
    background-color: var(--primary-color);
  }
  .hover-text:hover ~ img {
    display: block;
    width: 150px;
    height: 150px;
    transform: translateY(20px) translateX(50px);
    z-index: -1;
  }
`;

function About(props) {
  return (
    <AboutSection id="about">
      <div className="about-title">
        <h1>About</h1>
        <h1>{props.name}</h1>
      </div>
      <article className="about-text">
        <p>
          My creative career began in the early nineties, when a happy young Gun
          drew an absolute garbage drawing that my kindergarten teacher praised
          like the Mona Lisa. It was taped onto the refrigerator and my fate
          seemed sealed. {"\n"}
          {"\n"}
          20 years and two post-graduate educations later, I did become an
          illustrator and animator. In 2015, I started freelancing full-time.
          After a few years, I realised that I wanted to work in a team and with
          something more technical and problem solving. Finding code felt like
          the last puzzle piece. {"\n"}
          {"\n"}
          In August 2020, I started studying full-time to become a front-end
          developer. When I’m not glued to my computer, I build{" "}
          <span className="hover-text">wonky furniture</span> and carve spoons.{" "}
          <img
            src={"img/pall3.jpg"}
            className="hover-text hidden-image"
            alt="stool"
          />
        </p>
      </article>
    </AboutSection>
  );
}

export default About;
