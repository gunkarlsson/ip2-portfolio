import React, { useState, useRef, useEffect } from "react";
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
import { CustomCursor } from "./Components/CustomCursor";
import { DarkmodeButton } from "./style/StyledComponents";

function App() {
  const { theme, lightTheme, darkTheme } = useDarkmodeContext();
  const { themeToggler } = useDarkmodeContext();
  const [isToggled, setIsToggled] = useState(false);

  //SMOOTH SCROLL
  const size = useWindowSize();
  const scrollContainer = useRef();
  const scrollConfigs = {
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
    requestAnimationFrame(() => smoothScrolling());
  }, []);

  const smoothScrolling = () => {
    scrollConfigs.current = window.scrollY;
    scrollConfigs.previous +=
      (scrollConfigs.current - scrollConfigs.previous) * scrollConfigs.ease;
    scrollConfigs.rounded = Math.round(scrollConfigs.previous * 100) / 100;
    scrollContainer.current.style.transform = `translate3d(0,-${scrollConfigs.rounded}px, 0) `;
    requestAnimationFrame(() => smoothScrolling());
  };

  return (
    <Router>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Wrapper>
          {/* <CustomCursor /> */}
          <Burger />
          <DarkmodeButton>
            <span>Dark mode</span>
            <div
              className="full"
              onClick={() => {
                themeToggler();
                setIsToggled((prev) => !prev);
              }}
            >
              <div className="half" isToggled={isToggled} />
            </div>
          </DarkmodeButton>
          <section ref={scrollContainer} className="scroll">
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
