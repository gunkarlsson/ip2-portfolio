import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  display: inline-block;
  font-size: 5rem;
  color: black;

  -webkit-text-stroke: 0.1px rgb(0, 0, 0);

  :hover {
    color: transparent;
  }
`;

function Home() {
  return (
    <div>
      <Title>Gun Karlsson</Title>
      <h3>Front end portfolio</h3>
    </div>
  );
}

export default Home;
