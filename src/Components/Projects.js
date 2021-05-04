import React, { useState, useEffect } from "react";
import Repo from "./Repo";
import { selectedRepos } from "./SelectedRepos";
import { ProjectsSection, SecondarySection } from "../style/StyledComponents";

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
    <SecondarySection>
      <ProjectsSection id="projects">
        <div className="page-title">
          <h1>Project</h1>
          {repoIndex < 9 ? <h1>0{repoIndex + 1}</h1> : <h1>{repoIndex + 1}</h1>}
        </div>
        <div className="repo-div">
          {allRepos.length > 0 && <Repo id="repo" repo={allRepos[repoIndex]} />}
        </div>
        <button className="left-btn" onClick={decrement}>
          <i className="fas fa-angle-left"></i>
        </button>
        <button className="right-btn" onClick={increment}>
          <i className="fas fa-angle-right"></i>
        </button>
      </ProjectsSection>
    </SecondarySection>
  );
}

export default Projects;
