import { useState } from "react";
import {
  ArrowButton,
  ToggleSwitchWrapper,
  PrimarySection,
} from "../style/StyledComponents";
import { useDarkmodeContext } from "../style/DarkmodeContext";

function Home() {
  const { themeToggler } = useDarkmodeContext();

  const [isToggled, setIsToggled] = useState(false);

  return (
    <PrimarySection id="home">
      <section className="title">
        <h1>{"Gun Karlsson".toUpperCase()}</h1>
        <hr />
        <h2>Front-end developer</h2>
        <h2>Portfolio 2021</h2>
      </section>
      <ToggleSwitchWrapper isToggled={isToggled}>
        <label className="switch ">
          <input
            type="checkbox"
            checked={isToggled}
            onChange={() => {
              themeToggler();
              setIsToggled((prev) => !prev);
            }}
          />
          <span className="slider rounded" />
        </label>
      </ToggleSwitchWrapper>
      <ArrowButton>
        <i className="fas fa-arrow-down"></i>
      </ArrowButton>
    </PrimarySection>
  );
}

export default Home;
