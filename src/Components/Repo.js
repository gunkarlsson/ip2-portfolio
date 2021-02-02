import React, { useState, useEffect } from "react";
import styled from "styled-components";

const RepoDiv = styled.div`
  overflow: hidden;
  top: 0;
  right: 0;
  width: 70vw;
  height: 60vh;
  border: 2px solid red;

  p {
    font-family: "Helvetica";
  }

  img {
    width: 300px;
  }
`;

const Repo = ({ repo }) => {
  const COMMITS_URL =
    "https://api.github.com/repos/gunkarlsson/ip2-portfolio/commits";
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    fetch(COMMITS_URL)
      .then((response) => response.json())
      .then((data) => setCommits(data));
    console.log(commits);
  }, []);

  return (
    <RepoDiv>
      <p>
        Project name: {repo.name.charAt(0).toUpperCase() + repo.name.slice(1)}
      </p>
      <p>Description: {repo.description}</p>
      <p>
        Github link: <a href="{repo.html_url}">{repo.name}</a>
      </p>
      <p>Created at: {repo.created_at}</p>
      <p>Updated at: {repo.updated_at.slice(0, -10)}</p>
      <img
        src="https://images.unsplash.com/photo-1552865703-8168fcd8d541?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        alt=""
      />
      {/* <p>`https://api.github.com/repos/gunkarlsson/${repo.name}/commits`</p> */}
    </RepoDiv>
  );
};

export default Repo;
