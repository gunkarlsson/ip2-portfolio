import React, { useRef, useEffect } from "react";
import { useWindowSize } from "./hooks/useWindowSize";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Burger from "./Components/Nav/Burger";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./style/Themes";
import { Wrapper } from "./style/StyledComponents";
import { useDarkmodeContext } from "./style/DarkmodeContext";

function App() {
  const { theme, lightTheme, darkTheme } = useDarkmodeContext();
  //HOOK
  const size = useWindowSize();
  //REF
  const app = useRef();
  const scrollContainer = useRef();
  const skewConfigs = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  useEffect(() => {
    //when using refs, you need to write .current when referencing html/jsx tags
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`;
  }, [size.height]);

  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);

  const skewScrolling = () => {
    skewConfigs.current = window.scrollY;
    skewConfigs.previous +=
      (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease;
    skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100;

    //VARIABLES
    const difference = skewConfigs.current - skewConfigs.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 7.5;

    // scrollContainer.current.style.transform = `translate3d(0,-${skewConfigs.rounded}px, 0) skewY(${skew}deg)`;
    scrollContainer.current.style.transform = `translate3d(0,-${skewConfigs.rounded}px, 0)`;

    requestAnimationFrame(() => skewScrolling());
  };

  return (
    <Router>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Wrapper ref={app} className="App">
          <section ref={scrollContainer} className="scroll">
            <Burger />
            <Home className="home" />
            <Projects className="projects" />
            <About className="about" name="Gun" />
            <Contact className="contact" />
          </section>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
}

export default App;
