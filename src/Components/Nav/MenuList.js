import React from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

const Ul = styled.ul`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-flow: column nowrap;
  list-style: none;
  background-color: var(--primary-color);
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.4s ease;
  margin: 0;
  padding: 100px 60px 55px 65px;

  a {
    font-size: 1.6rem;
    text-align: right;
    text-decoration: none;
    padding-top: 15px;
  }
  a:hover {
    text-decoration: underline;
  }
  @media (max-width: 400px) {
    width: 95%;
    padding: 40px 0 30px 0;
    a {
      margin-left: 20px;
      text-align: left;
    }
  }
`;

function MenuList({ open }) {
  return (
    <Ul open={open}>
      <Link to="#" smooth={true}>
        Home
      </Link>
      <Link to="#projects" smooth={true}>
        Projects
      </Link>
      <Link to="#about" smooth={true}>
        About
      </Link>
      <Link to="#contact" smooth={true}>
        Contact
      </Link>
    </Ul>
  );
}

export default MenuList;
