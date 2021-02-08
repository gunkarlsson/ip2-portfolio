import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Repo from "./Repo";

const ProjectsSection = styled.section`
  overflow: hidden;
  border: 2px solid green;
  display: grid;
  grid-template: 1fr 6fr 1fr / 6fr 1fr 9fr 1fr;

  .page-title {
    grid-row: 1 / -1;
    grid-column: 1;
    background-color: var(--secondary-color);
    transition: all 0.6s ease;

    h1 {
      font-size: 5rem;
      line-height: 3rem;
      margin: 300px 20px 0 50px;
    }
    h1:last-of-type {
      margin: 40px 0 0 260px;
    }
  }
  .page-title.active {
    background-color: var(--primary-color);
  }

  .repo-div {
    max-width: 52vw;
    grid-row: 2;
    grid-column: 3;
  }

  button {
    outline: none;
    border: none;
    background-color: rgba(255, 255, 255, 0.4);
    font-size: 1rem;
    width: 40px;
    height: 45px;
    cursor: pointer;
    transition: all 0.4s ease;
  }
  button:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }
  .left-btn {
    grid-row: 2;
    grid-column: 2;
    align-self: center;
    justify-self: right;
  }
  .right-btn {
    grid-row: 2;
    grid-column: 4;
    align-self: center;
    justify-self: left;
  }
`;

function Projects() {
  const API_URL = "https://api.github.com/users/gunkarlsson/repos";
  const [allRepos, setAllRepos] = useState([]);
  const [repoIndex, setRepoIndex] = useState(0); //inom parantes är vad den börjar med

  const [sectionBg, setSectionBg] = useState(false);

  const changeSectionBg = () => {
    if (window.scrollY >= 400) {
      setSectionBg(true);
    } else {
      setSectionBg(false);
    }
  };
  window.addEventListener("scroll", changeSectionBg);

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
    <ProjectsSection id="projects">
      <div
        className={sectionBg ? "page-title active" : "page-title"}
        // style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      >
        <h1>Projects</h1>
        {repoIndex < 9 ? <h1>0{repoIndex + 1}</h1> : <h1>{repoIndex + 1}</h1>}
      </div>
      <div className="repo-div">
        {allRepos.length > 0 && (
          <Repo
            id="repo"
            repo={allRepos[repoIndex]}
            // style={{ transform: `translateY(${offsetY * 0.9}px)` }}
          />
        )}
      </div>
      <button className="left-btn" onClick={decrement}>
        <i class="fas fa-angle-left"></i>
      </button>
      <button className="right-btn" onClick={increment}>
        <i class="fas fa-angle-right"></i>
      </button>
    </ProjectsSection>
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
