import React, { useState, useEffect } from "react";
import styled from "styled-components";

const RepoDiv = styled.div`
  border: 1px solid blue;
  margin: 20px 50px 0px 480px;
  height: calc(100vh - 40px);
  position: absolute;

  .info-titles {
    margin-top: 100px;
    h3 {
      font-size: 4rem;
      margin: 10px 0;
    }
  }

  .info-text {
    font-size: 1.5rem;
    line-height: 1rem;
    border: 1px solid teal;
    width: 500px;
  }

  .image {
    img {
      max-width: 45vw;
      max-height: 40vh;
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
  const { name, description, html_url, created_at, updated_at } = repo;

  return (
    <RepoDiv>
      <div className="info-titles">
        <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
      </div>

      <div className="image">
        <img
          src="https://images.unsplash.com/photo-1552865703-8168fcd8d541?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt=""
        />
      </div>

      <div className="info-text">
        <p>{description}</p>
        <a href="{html_url}">Github link</a>
        <p>Created at: {created_at.slice(0, -10)}</p>
        <p>Last updated: {updated_at.slice(0, -10)}</p>
      </div>
    </RepoDiv>
  );
};

export default Repo;
