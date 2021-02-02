import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Home from "./Components/Home";
import Burger from "./Components/Nav/Burger";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";

// const BGWrapper = styled.div`
//   background-color: var(--primary-color);
//   min-height: 100vh;
//   min-width: 100vw;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   .bg-fill {
//     background-color: var(--secondary-color);
//     height: 95vh;
//     width: 95vw;
//   }
// `;

function App() {
  return (
    <Router>
      <Switch>
        <div className="bg-wrapper">
          <div className="bg-fill">
            <Burger />

            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/about">
              <About name="Gun" />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
          </div>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
