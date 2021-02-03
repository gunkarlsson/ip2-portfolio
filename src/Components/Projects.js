import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Repo from "./Repo";

const ProjectsSection = styled.section`
  overflow: hidden;
  height: 100%;
  width: 100%;
  /* outline: 20px solid var(--primary-color);
  outline-offset: -20px; */
  display: grid;
  grid-template: 3fr 6fr 1fr / 6fr 1fr 9fr 1fr;

  .page-title {
    height: calc(100vh - 20px);
    margin-top: 20px;
    position: absolute;
    background-color: var(--secondary-color);
    transition: all 0.5s ease;
    h1 {
      font-size: 5rem;
      line-height: 3rem;
      margin: 300px 20px 0 50px;
    }
    h1:last-of-type {
      margin: 40px 0 0 280px;
    }
  }
  .page-title.active {
    background-color: var(--primary-color);
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

  .buttons {
    .right-btn {
    }
    .left-btn {
    }
  }
`;

function Projects() {
  const API_URL = "https://api.github.com/users/gunkarlsson/repos";
  const [allRepos, setAllRepos] = useState([]);
  const [repoIndex, setRepoIndex] = useState(0); //inom parantes är vad den börjar med

  const [sectionBg, setSectionBg] = useState(false);

  const changeSectionBg = () => {
    if (window.scrollY >= 500) {
      setSectionBg(true);
    } else {
      setSectionBg(false);
    }
  };
  window.addEventListener("scroll", changeSectionBg);
  // const [offsetY, setOffsetY] = useState(0);
  // const handleScroll = () => setOffsetY(window.pageYOffset);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

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

      <div className="buttons">
        <button className="left-btn" onClick={decrement}>
          <i class="fas fa-arrow-left"></i>
        </button>
        <button className="right-btn" onClick={increment}>
          <i class="fas fa-arrow-right"></i>
        </button>
      </div>
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
