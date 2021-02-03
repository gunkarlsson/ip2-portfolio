import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Repo from "./Repo";

const ProjectsDiv = styled.div`
  overflow: hidden;
  height: 100%;
  border: 2px solid yellow;
  height: 200vh;

  .page-title {
    border: 1px solid green;
    z-index: 1;
    h1 {
      font-size: 5rem;
      line-height: 3rem;
      margin: 80px 0 0 50px;
    }
    h1:last-of-type {
      margin: 50px 0 0 280px;
    }
  }
  button {
    outline: none;
    border: none;
    background-color: rgba(255, 255, 255, 0.3);
    padding: 1rem 1.5rem;
    cursor: pointer;
  }
  button:hover {
    background-color: rgba(255, 255, 255, 0.6);
  }
  button::before {
    transform: translateX(75%);
    transition: transform 1.5s cubic-bezier(0.19, 1, 0.22, 1), visibility 1.5s;
    will-change: transform;
    visibility: hidden;
  }
`;

function Projects() {
  const API_URL = "https://api.github.com/users/gunkarlsson/repos";
  const [allRepos, setAllRepos] = useState([]);
  const [repoIndex, setRepoIndex] = useState(0); //inom parantes är vad den börjar med
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const decrement = () => {
    if (repoIndex > 0) {
      setRepoIndex((last) => last - 1);
    }
  };
  const increment = () => {
    if (repoIndex < allRepos.length - 1) {
      setRepoIndex((last) => last + 1);
    }
  };

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setAllRepos(data));
  }, []);

  return (
    <ProjectsDiv>
      <div
        className="page-title"
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      >
        <h1>Projects</h1>
        {repoIndex < 9 ? <h1>0{repoIndex + 1}</h1> : <h1>{repoIndex + 1}</h1>}
      </div>
      <div className="repo-div">
        {allRepos.length > 0 && (
          <Repo
            repo={allRepos[repoIndex]}
            style={{ transform: `translateY(${offsetY * 0.9}px)` }}
          />
        )}
      </div>

      <div className="buttons">
        <button onClick={decrement}>
          <i class="fas fa-arrow-left"></i>
        </button>
        <button onClick={increment}>
          <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </ProjectsDiv>
  );
}

export default Projects;

// useEffect(() => {
//   async function fetchApi(API_URL) {
//     const res = await fetch(API_URL);
//     const data = await res.json();
//     setAllRepos(data);
//   }
// }, []);
