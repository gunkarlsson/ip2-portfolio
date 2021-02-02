import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Repo from "./Repo";

const ProjectDiv = styled.div`
  /* min-height: 100vh; */
  h1 {
    font-size: 5rem;
    line-height: 3rem;
    margin-left: 100px;
  }

  h1:last-of-type {
    margin-left: 300px;
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
`;

function Projects() {
  const API_URL = "https://api.github.com/users/gunkarlsson/repos";
  const [allRepos, setAllRepos] = useState([]);
  const [repoIndex, setRepoIndex] = useState(0); //inom parantes är vad den börjar med

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

  // useEffect(() => {
  //   async function fetchApi(API_URL) {
  //     const res = await fetch(API_URL);
  //     const data = await res.json();
  //     setAllRepos(data);
  //   }
  // }, []);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setAllRepos(data));
  }, []);

  return (
    <ProjectDiv>
      <h1>Projects</h1>
      {repoIndex < 9 ? <h1>0{repoIndex + 1}</h1> : <h1>{repoIndex + 1}</h1>}
      {allRepos.length > 0 && <Repo repo={allRepos[repoIndex]} />}
      <button onClick={decrement}>
        <i class="fas fa-arrow-left"></i>
      </button>
      <button onClick={increment}>
        <i class="fas fa-arrow-right"></i>
      </button>
    </ProjectDiv>
  );
}

export default Projects;

// {
//   movies.map(({ id, title, overview, vote_average, poster_path }) => {
//     return (
//       <MovieItem
//         title={title}
//         key={id}
//         overview={overview}
//         voteAverage={vote_average}
//         posterPath={poster_path}
//       />
//     );
//   });
// }
