import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Repo from "./Components/Repo";

const ProjectDiv = styled.div`
  /* min-height: 100vh; */
  h1 {
    font-size: 5rem;
    line-height: 3rem;
    margin-left: 100px;
  }

  h1:last-of-type {
    margin-left: 200px;
  }
`;

function Projects() {
  const API_URL = "https://api.github.com/users/gunkarlsson/repos";
  const [allRepos, setAllRepos] = useState([]);

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
  console.log(allRepos);
  allRepos.map(({ id, name }) => {
    return allRepos;
  });

  return (
    <ProjectDiv>
      <h1>Projects</h1>
      <h1 className="number">01</h1>
      <Repo />
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
