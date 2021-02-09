import React, { useState, useEffect } from "react";
import styled from "styled-components";

const RepoDiv = styled.div`
  .repo-title {
    h3 {
      font-size: 3rem;
      margin: 10px 0;
    }
  }
  .info-text {
    font-size: 1.2rem;
    line-height: 1rem;
  }
  .repo-image {
    img {
      max-width: 98%;
      /* box-shadow: 3px 6px 10px rgba(0, 0, 0, 0.1); */
      border: 6px solid white;
    }
  }
  a {
    font-family: "Helvetica Neue";
    color: black;
  }
  a:hover {
    color: darkgrey;
  }
`;

const Repo = ({ repo }) => {
  const { name, description, homepage, created_at, updated_at, id } = repo;

  return (
    <RepoDiv>
      <div className="repo-title">
        <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
      </div>

      <div className="repo-image">
        <img src={"img/" + id + ".png"} alt="Project preview image" />
      </div>

      <div className="info-text">
        <p>{description}</p>
        <p>
          Link to <a href={homepage}>demo</a>
        </p>
        <p>Created at: {created_at.slice(0, -10)}</p>
        <p>Last updated: {updated_at.slice(0, -10)}</p>
      </div>
    </RepoDiv>
  );
};

export default Repo;
