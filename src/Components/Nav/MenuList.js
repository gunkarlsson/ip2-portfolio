import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: column nowrap;
  background-color: var(--primary-color);
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  margin: 0;
  top: 0;
  right: 0;
  height: 35vh;
  width: 200px;
  padding-top: 90px;
  padding-right: 60px;
  text-align: right;
  transition: transform 0.4s ease;
  font-size: 1.5rem;

  li {
    padding: 6px 0px;
    /* opacity: ${({ open }) => (open ? 1 : 0)};
    transition: opacity 1.2s linear; */
  }

  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (max-width: 400px) {
    width: 50vw;
    height: 50vh;
    padding-right: 50px;
  }
`;

function MenuList({ open }) {
  return (
    <Ul open={open}>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </Ul>
  );
}

export default MenuList;
