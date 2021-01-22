import React from "react";
import styled from "styled-components";

const HomeDiv = styled.div`
  /* min-height: 100vh; */
`;

const Title = styled.div`
  h1 {
    display: inline-block;
    font-size: 5rem;
    color: black;
    -webkit-text-stroke: 0.1px rgb(0, 0, 0);
    margin-top: 120px;
    margin-left: 50px;
  }

  h1:hover {
    color: transparent;
  }
`;

function Home() {
  return (
    <HomeDiv>
      <Title>
        <h1>Gun Karlsson</h1>
        <h3>Front end portfolio</h3>
      </Title>
    </HomeDiv>
  );
}

export default Home;
