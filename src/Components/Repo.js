import React, { useState, useEffect } from "react";
import styled from "styled-components";

const RepoDiv = styled.div`
  border: 1px solid blue;
  display: flex;

  .info-titles {
    font-family: "Kaftan Serif";
    border: 1px solid orange;
    width: 300px;
    margin: 10px 0 0 50px;
  }
  .info-text {
    border: 1px solid teal;
    width: 300px;
    margin: 0px 0 0 50px;
  }
  .image {
    border: 1px solid coral;

    img {
      z-index: -1;
      max-width: 600px;
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
        <h3>Name: </h3>
        <h3>Description: </h3>
        <h3>Github link: </h3>
        <h3>Created at: </h3>
        <h3>Last updated: </h3>
      </div>

      <div className="info-text">
        <p>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
        <p>{description}</p>
        <a href="{html_url}">{name}</a>
        <p>{created_at.slice(0, -10)}</p>
        <p>{updated_at.slice(0, -10)}</p>
      </div>
      <div className="image">
        <img
          src="https://images.unsplash.com/photo-1552865703-8168fcd8d541?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt=""
        />
      </div>
    </RepoDiv>
  );
};

export default Repo;
