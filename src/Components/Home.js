import React from "react";
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";

const HomeDiv = styled.div`
  height: 98vh;

  .title {
    width: 60vw;
    h1 {
      font-size: 8rem;
      line-height: 7.7rem;
      -webkit-text-stroke: 0.1px black;
      margin: 60px 0 20px 60px;
      transition: all 0.3s ease;
    }

    h1:hover {
      color: var(--secondary-color);
    }

    h2 {
      font-size: 2.2rem;
      line-height: 3rem;
      margin: 0px 0px 0px 60px;
    }

    hr {
      border: 1px solid black;
      width: 48vw;
      margin-left: 60px;
      margin-bottom: 20px;
    }
  }

  button {
    margin-top: 230px;
    margin-left: 60px;
    font-size: 0.9rem;
    outline: none;
    border: 1px solid black;
    background-color: transparent;
    border-radius: 50%;
    width: 55px;
    height: 55px;
    cursor: pointer;
  }
  button:hover {
    transition: transform 0.4s ease;
    transform: scale(1.3);
    border: 2px solid black;
  }

  /* MEDIA QUERIES */
  @media (max-width: 400px) {
    .title {
      width: 86vw;
      h1 {
        margin: 80px 0 10px 25px;
        word-wrap: break-word;
        font-size: 6.4rem;
        line-height: 6.5rem;
      }
      h2 {
        font-size: 1.7rem;
        line-height: 2.2rem;
        margin: 0px 0px 0px 25px;
      }
      hr {
        width: 85%;
        margin: 30px 0 30px 25px;
      }
    }
    button {
      margin-top: 20vh;
      margin-left: 25px;
      border: 2px solid black;
      padding: 15px 5px;
      font-size: 1.1rem;
    }
  }
`;

function Home() {
  return (
    <HomeDiv id="home">
      <section className="title">
        <h1>{"Gun Karlsson".toUpperCase()}</h1>
        <hr />
        <h2>Front-end developer</h2>
        <h2>Portfolio 2021</h2>
      </section>

      <button onClick={() => scroll.scrollToBottom()}>
        <i className="fas fa-arrow-down"></i>
      </button>
    </HomeDiv>
  );
}

export default Home;
