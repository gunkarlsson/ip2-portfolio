import React from "react";
import styled from "styled-components";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { HashLink as Link } from "react-router-hash-link";
import { Link, animateScroll as scroll } from "react-scroll";
// import { animateScroll as scroll } from "react-scroll";
import Projects from "../Projects";

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
  height: 240px;
  width: 100px;
  padding-top: 90px;
  padding-right: 60px;
  text-align: right;
  transition: transform 0.4s ease;
  font-size: 1.5rem;
  z-index: 10;

  li {
    padding: 6px 0px;
  }
  a {
    text-decoration: none;
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
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-20}
          duration={700}
          path="/home"
          href="/home"
        >
          {/* <Link to="home" onClick={() => scroll.scrollToTop()}> */}
          Home
        </Link>
      </li>
      <li>
        {/* <Link to="#projects" smooth={true} duration={1200}> */}
        <a href="/projects">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={700}
            href="/projects"
          >
            Projects
          </Link>
        </a>
      </li>
      <li>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={700}
        >
          {/* <Link to="#about" smooth={true} duration={1200}> */}
          About
        </Link>
      </li>
      <li>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={10}
          duration={700}
        >
          {/* <Link to="#contact" onClick={() => scroll.scrollToBottom()}> */}
          Contact
        </Link>
      </li>
    </Ul>
  );
}

export default MenuList;
