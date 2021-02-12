import React from "react";
import styled from "styled-components";

const RepoDiv = styled.div`
  .repo-title {
    h3 {
      font-size: 3.2rem;
      margin: 5px 0 10px 0;
    }
  }
  .info-text {
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1rem;
  }

  .repo-image {
    img {
      width: 100%;
      outline: 6px solid white;
      outline-offset: -3px;
    }
  }

  @media (max-width: 400px) {
    .repo-title {
      h3 {
        font-size: 2rem;
        margin: 10px 0 10px 25px;
      }
    }
    .info-text {
      font-size: 1.2rem;
      line-height: 1.2rem;
      margin-left: 25px;
    }

    .repo-image {
      img {
        margin-left: 4px;
        outline: 4px solid white;
        outline-offset: -1px;
      }
    }
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
        </p>{" "}
        <p>Created: {created_at.slice(0, -10)}</p>
      </div>
    </RepoDiv>
  );
};

export default Repo;
