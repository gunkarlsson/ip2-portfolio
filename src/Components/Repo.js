import React, { useState, useEffect } from "react";
import styled from "styled-components";

const RepoDiv = styled.div`
  overflow: hidden;
  box-sizing: border-box;
  position: center center;
  width: 70vw;
  height: 60vh;
  border: 2px solid red;

  h3 {
    font-family: inherit;
  }
  p {
    font-family: "Helvetica";
  }
  a {
    font-family: "Helvetica";
    color: black;
  }
  a:hover {
    color: darkgrey;
  }

  img {
    width: 300px;
  }
`;

const Repo = ({ repo }) => {
  return (
    <RepoDiv>
      <h3>Name: </h3>
      <p>{repo.name.charAt(0).toUpperCase() + repo.name.slice(1)}</p>
      <h3>Description: </h3>
      <p>{repo.description}</p>
      <h3>Github link: </h3>
      <a href="{repo.html_url}">{repo.name}</a>
      <h3>Created at: </h3>
      <p>{repo.created_at.slice(0, -10)}</p>
      <h3>Last updated: </h3>
      <p>{repo.updated_at.slice(0, -10)}</p>
      <img
        src="https://images.unsplash.com/photo-1552865703-8168fcd8d541?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        alt=""
      />
    </RepoDiv>
  );
};

export default Repo;
