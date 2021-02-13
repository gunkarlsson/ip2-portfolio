import React from "react";
import styled from "styled-components";
import Pall3 from "../img/pall3.jpg";
import Carving from "../img/carving1.JPG";

const AboutSection = styled.section`
  height: 100vh;
  display: grid;
  grid-template: 1fr 6fr 1fr / 5fr 1fr 9fr 1fr;

  .about-title {
    grid-row: 1 / -1;
    grid-column: 1;
    background-color: var(--primary-color);

    h1 {
      font-size: 5rem;
      line-height: 3rem;
      margin: 250px 0 0 90px;
    }
    h1:last-of-type {
      margin: 40px 30px 0 190px;
    }
  }

  .about-text {
    max-width: 52vw;
    grid-row: 2 / 3;
    grid-column: 3;
    padding: 20px;
    margin-top: 10vh;

    p {
      font-size: 1.2rem;
      margin-bottom: 20px;
      font-weight: 500;
    }
    span {
      text-decoration: underline;
    }
  }

  img {
    opacity: 0;
    width: 200px;
    height: 200px;
    margin-right: 90px;
    border: 15px solid var(--primary-color);
  }

  a {
    text-decoration: underline;
    cursor: pointer;
  }

  .hover-text1:hover ~ img:first-of-type {
    opacity: 1;
    transform: translateY(30px) translateX(-0px);
    transition: 0.6s cubic-bezier(0.33, 0.01, 0.38, 1.01);
  }
  .hover-text2:hover ~ img:last-of-type {
    opacity: 1;
    transform: translateY(20px) translateX(70px);
    transition: 0.6s cubic-bezier(0.33, 0.01, 0.38, 1.01);
  }

  /* MEDIA QUERIES */
  @media (max-width: 400px) {
    grid-template: 1fr 1fr 8fr / 1fr;
    .about-title {
      grid-row: 1;
      h1 {
        font-size: 3.5rem;
        line-height: 3.5rem;
        margin: 40px 0 0 25px;
      }
      h1:last-of-type {
        margin: 0 0 20px 130px;
      }
    }
    .about-text {
      width: 86vw;
      grid-column: 1;
      padding: 0 20px;
      margin-top: 0;

      p {
        width: 80vw;
        font-weight: 400;
        margin-bottom: 10px;
      }
    }

    img {
      width: 120px;
      height: 120px;
      margin-right: 20px;
      border: 5px solid var(--primary-color);
    }

    .hover-text1:hover ~ img:first-of-type {
      transform: translateY(10px) translateX(-0px);
    }
    .hover-text2:hover ~ img:last-of-type {
      transform: translateY(10px) translateX(10px);
    }
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
          seemed sealed.
        </p>
        <p>
          20 years and two post-graduate educations later, I did become an
          illustrator and animator. In 2015, I started freelancing full-time.
          After a few years, I realised that I wanted to work in a team and with
          something more technical and problem solving. Finding code felt like
          the last puzzle piece.
        </p>
        <p>
          In August 2020, I started studying full-time to become a front-end
          developer. When I’m not glued to my computer, I build{" "}
          <span className="hover-text1">wonky furniture</span> and{" "}
          <span className="hover-text2">carve spoons.</span>
          <img src={Pall3} alt="stool" />
          <img src={Carving} alt="spoons" />
        </p>
      </article>
    </AboutSection>
  );
}

export default About;
