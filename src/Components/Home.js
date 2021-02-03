import React from "react";
import styled from "styled-components";

const HomeDiv = styled.div`
  /* min-height: 100vh; */
`;

const Title = styled.div`
  h1 {
    font-size: 7rem;
    line-height: 7.6rem;
    color: black;
    -webkit-text-stroke: 0.1px rgb(0, 0, 0);
    margin: 30px 0 20px 50px;
    width: 600px;
    transition: all 0.3s ease;
  }

  h1:hover {
    color: transparent;
  }

  h2 {
    font-size: 2rem;
    line-height: 3rem;
    margin: 0px 0px 0px 50px;
  }

  hr {
    border: 1px solid black;
    width: 600px;
    margin-left: 50px;
    margin-bottom: 20px;
  }
`;

function Home() {
  return (
    <HomeDiv>
      <Title>
        <h1>{"Gun Karlsson".toUpperCase()}</h1>
        <hr />
        <h2>Front-end developer</h2>
        <h2>Portfolio 2021</h2>
      </Title>
    </HomeDiv>
  );
}

export default Home;
