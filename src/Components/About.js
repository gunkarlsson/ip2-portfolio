import React from "react";
import styled from "styled-components";

const AboutDiv = styled.div`
  /* min-height: 100vh; */
`;

function About(props) {
  return (
    <AboutDiv id="about">
      This is about {props.name}
      <p>
        My creative career began in the early nineties, when a happy young Gun
        drew an absolute garbage drawing that my kindergarten teacher praised
        like the Mona Lisa. It was taped onto the refrigerator and my fate
        seemed sealed. 20 years and two post-graduate educations later, I did
        become an illustrator and animator. In 2015, I started freelancing
        full-time. After a few years, I realised that I wanted to work in a team
        and with something more technical and problem solving. Finding code felt
        like the last puzzle piece. In August 2020, I started studying full-time
        to become a front-end developer. When I’m not glued to my computer, I
        build wonky furniture and carve spoons.
      </p>
    </AboutDiv>
  );
}

export default About;
