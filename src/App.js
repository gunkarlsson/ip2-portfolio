import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Burger from "./Components/Nav/Burger";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";

function App() {
  return (
    <Router>
      <main className="container">
        <Burger />
        <Home className="home" />
        <Projects className="projects" />
        <About className="about" name="Gun" />
        <Contact className="contact" />
      </main>
    </Router>
  );
}

export default App;
