import { useState } from "react";
import {
  PrimarySection,
  DarkmodeButton as DarkmodeButton,
} from "../style/StyledComponents";
import { useDarkmodeContext } from "../style/DarkmodeContext";

function Home() {
  const { themeToggler } = useDarkmodeContext();

  const [isToggled, setIsToggled] = useState(false);

  return (
    <>
      <PrimarySection id="home">
        <section className="title">
          <h1>{"Gun Karlsson".toUpperCase()}</h1>
          <hr />
          <h2>Front-end developer</h2>
          <h2>Portfolio 2021</h2>
        </section>
        <DarkmodeButton
          onClick={() => {
            themeToggler();
            setIsToggled((prev) => !prev);
          }}
        >
          <div className="full">
            <div className="half" isToggled={isToggled} />
          </div>
          <span>Dark mode</span>
        </DarkmodeButton>
      </PrimarySection>
    </>
  );
}

export default Home;
