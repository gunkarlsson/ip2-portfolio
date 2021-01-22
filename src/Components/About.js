import React from "react";
import styled from "styled-components";

const AboutDiv = styled.div`
  /* min-height: 100vh; */
`;

function About(props) {
  return <AboutDiv>This is about {props.name}</AboutDiv>;
}

export default About;
