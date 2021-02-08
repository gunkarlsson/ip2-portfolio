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
      max-width: 100%;
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
  const { name, description, homepage, created_at, updated_at } = repo;
  console.log({ name }, { homepage });
  return (
    <RepoDiv>
      <div className="repo-title">
        <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
      </div>

      <div className="repo-image">
        <img
          src="https://images.unsplash.com/photo-1552865703-8168fcd8d541?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt=""
        />
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
