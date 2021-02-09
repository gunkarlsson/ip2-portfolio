import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";

const HomeDiv = styled.div`
  overflow: hidden;
  border: 2px solid yellow;
  height: 98vh;

  button {
    margin-top: 260px;
    margin-left: 50px;
    outline: none;
    border: 1px solid black;
    background-color: transparent;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    cursor: pointer;
  }
  button:hover {
    transition: transform 0.4s ease;
    transform: scale(1.2);
    border: 2px solid black;
  }
`;

const Title = styled.section`
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
    <HomeDiv id="home">
      <Title>
        <h1>{"Gun Karlsson".toUpperCase()}</h1>
        <hr />
        <h2>Front-end developer</h2>
        <h2>Portfolio 2021</h2>
      </Title>

      <button onClick={() => scroll.scrollToBottom()}>
        <i class="fas fa-arrow-down"></i>
      </button>
    </HomeDiv>
  );
}

export default Home;
