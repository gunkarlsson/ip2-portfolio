import React from "react";
import Pall3 from "../img/pall3.jpg";
import Carving from "../img/carving1.JPG";
import { AboutSection, SecondarySection } from "../style/StyledComponents";

function About(props) {
  return (
    <SecondarySection>
      <AboutSection id="about">
        <div className="about-title">
          <h1>About</h1>
          <h1>{props.name}</h1>
        </div>
        <article className="about-text">
          <p>
            My creative career began in the early nineties, when a happy young
            Gun drew an absolute garbage drawing that my kindergarten teacher
            praised like the Mona Lisa. It was taped onto the refrigerator and
            my fate seemed sealed.
          </p>
          <p>
            20 years and two post-graduate educations later, I did become an
            illustrator and animator. In 2015, I started freelancing full-time.
            After a few years, I realised that I wanted to work in a team and
            with something more technical and problem solving. Finding code felt
            like the last puzzle piece.
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
    </SecondarySection>
  );
}

export default About;
