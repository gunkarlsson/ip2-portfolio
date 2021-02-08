import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-scroll";
import styled from "styled-components";
import "./App.css";
import Home from "./Components/Home";
import Burger from "./Components/Nav/Burger";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import AppGrid from "./AppGrid";

function App() {
  return (
    <Router>
      <Switch>
        <div className="container">
          <Burger />

          <Home className="home" />

          <Projects className="projects" />

          <About className="about" name="Gun" />

          <Contact className="contact" />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
