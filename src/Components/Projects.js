import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Repo from "./Repo";
import { selectedRepos } from "./SelectedRepos";

const ProjectsSection = styled.section`
  height: 100vh;
  display: grid;
  grid-template: 1fr 6fr 1fr / 5fr 1fr 9fr 1fr;

  .page-title {
    grid-row: 1 / -1;
    grid-column: 1;
    background-color: var(--primary-color);

    h1 {
      font-size: 5rem;
      line-height: 3rem;
      margin: 250px 20px 0 90px;
    }
    h1:last-of-type {
      margin: 40px 20px 0 260px;
    }
  }

  .repo-div {
    grid-row: 2;
    grid-column: 3;
  }

  button {
    outline: none;
    border: none;
    background-color: rgba(255, 255, 255, 0.5);
    font-size: 1.2rem;
    width: 45px;
    height: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
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

  /* MEDIA QUERIES */
  @media (max-width: 400px) {
    display: grid;
    grid-template: 1fr 1fr 8fr / 1fr;
    .page-title {
      grid-row: 1;
      grid-column: 1;
      h1 {
        font-size: 3.5rem;
        line-height: 3.5rem;
        margin: 40px 0 0 25px;
      }
      h1:last-of-type {
        margin: 0 0 20px 130px;
      }
    }
    .repo-div {
      grid-row: 3;
      grid-column: 1;
      width: 86vw;
    }
    .repo-div img {
      width: 100%;
    }
    .left-btn {
      grid-column: 1;
      justify-self: center;
      margin-right: 50px;
    }
    .right-btn {
      grid-column: 1;
      justify-self: center;
      margin-left: 50px;
    }
  }
`;

function Projects() {
  const API_URL = "https://api.github.com/users/gunkarlsson/repos";
  const [allRepos, setAllRepos] = useState([]);
  const [repoIndex, setRepoIndex] = useState(0);

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
      .then((data) =>
        setAllRepos(data.filter((repo) => selectedRepos.includes(repo.id)))
      );
  }, []);

  return (
    <ProjectsSection id="projects">
      <div className="page-title">
        <h1>Project</h1>
        {repoIndex < 9 ? <h1>0{repoIndex + 1}</h1> : <h1>{repoIndex + 1}</h1>}
      </div>
      <div className="repo-div">
        {allRepos.length > 0 && <Repo id="repo" repo={allRepos[repoIndex]} />}
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
