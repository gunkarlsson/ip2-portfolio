import React from "react";
import styled from "styled-components";

// const Users = () => {
//   const database = [
//     {
//       name: "Gun",
//       age: "28",
//       location: "Sthlm",
//     },
//     {
//       name: "Gunnar",
//       age: "38",
//       location: "Nacka",
//     },
//     {
//       name: "Gunnel",
//       age: "48",
//       location: "Eslöv",
//     },
//   ];
// };

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
  return (
    <ProjectDiv>
      <h1>Projects</h1>
      <h1 className="number">01</h1>
      {/* {users.map((user) => {
        {
          user.name;
        }
      })} */}
    </ProjectDiv>
  );
}

export default Projects;
