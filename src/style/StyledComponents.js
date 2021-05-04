import styled from "styled-components";

export const Wrapper = styled.main`
  background-color: ${(props) => props.theme.bgColor2};
  border: 30px solid ${(props) => props.theme.bgColor1};
  color: ${(props) => props.theme.fontColor1};
  a {
    color: ${(props) => props.theme.fontColor1};
  }
  a:hover {
    background-color: ${(props) => props.theme.bgColor1};
  }
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  .scroll {
  }
`;

//---------------------------------- SECTIONS --------------------------------
export const PrimarySection = styled.section`
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .title {
    width: 60vw;
    h1 {
      font-size: 8rem;
      line-height: 7.7rem;
      margin: 60px 0 20px 60px;
    }
    h2 {
      font-size: 2.2rem;
      line-height: 3rem;
      margin: 0px 0px 0px 60px;
    }
    hr {
      border: 1px solid black;
      width: 48vw;
      margin-left: 60px;
      margin-bottom: 20px;
    }
  }

  /* MEDIA QUERIES */
  /* @media (max-width: 400px) {
    .title {
      width: 86vw;
      h1 {
        margin: 80px 0 10px 25px;
        word-wrap: break-word;
        font-size: 6.4rem;
        line-height: 6.5rem;
      }
      h2 {
        font-size: 1.7rem;
        line-height: 2.2rem;
        margin: 0px 0px 0px 25px;
      }
      hr {
        width: 85%;
        margin: 30px 0 30px 25px;
      }
    }
    button {
      margin-top: 20vh;
      margin-left: 25px;
      border: 2px solid black;
      padding: 15px 5px;
      font-size: 1.1rem;
    }
  } */
`;
export const SecondarySection = styled.section`
  height: 95vh;
  max-width: 95vw;
  display: flex;
  justify-content: space-around;
  border: 2px solid yellow;

  h1 {
    font-size: 5rem;
    line-height: 3rem;
    margin: 100px 0 0 90px;
  }
  h1:last-of-type {
    margin: 40px 30px 0 190px;
  }
`;

export const ProjectsSection = styled.section`
  display: grid;
  grid-template: 1fr 6fr 1fr / 5fr 1fr 9fr 1fr;

  .page-title {
    grid-row: 1 / -1;
    grid-column: 1;
    background-color: var(--primary-color);
  }

  .repo-div {
    grid-row: 2;
    grid-column: 3;
  }

  button {
    outline: none;
    border: none;
    background-color: rgba(255, 255, 255, 0.5);
    font-size: 1.5rem;
    width: 50px;
    height: 60px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  button:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }
  .left-btn {
    grid-row: 2;
    grid-column: 2;
    align-self: center;
    justify-self: right;
  }
  .right-btn {
    grid-row: 2;
    grid-column: 4;
    align-self: center;
    justify-self: left;
  }
`;

export const RepoDiv = styled.div`
  .repo-title {
    h3 {
      font-size: 3.2rem;
      margin: 5px 0 10px 0;
    }
  }
  .info-text {
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1rem;
  }

  .repo-image {
    img {
      width: 100%;
      outline: 6px solid white;
      outline-offset: -3px;
    }
  }
`;

export const AboutSection = styled.section`
  .about-text {
    max-width: 52vw;
    padding: 20px;
    margin-top: 50px;
    p {
      font-size: 1.2rem;
      margin-bottom: 20px;
      font-weight: 500;
    }
    span {
      text-decoration: underline;
    }
  }

  img {
    opacity: 0;
    width: 200px;
    height: 200px;
    margin-right: 90px;
    border: 15px solid var(--primary-color);
  }

  a {
    text-decoration: underline;
    cursor: pointer;
  }

  .hover-text1:hover ~ img:first-of-type {
    opacity: 1;
    transform: translateY(30px) translateX(-0px);
    transition: 0.6s cubic-bezier(0.33, 0.01, 0.38, 1.01);
  }
  .hover-text2:hover ~ img:last-of-type {
    opacity: 1;
    transform: translateY(20px) translateX(70px);
    transition: 0.6s cubic-bezier(0.33, 0.01, 0.38, 1.01);
  }
`;

export const ContactSection = styled.section`
  .contact-text {
    margin-top: 90px;
    max-width: 52vw;
    padding: 50px;
    font-size: 1.2rem;
    font-weight: 500;

    .contact-links {
      margin-top: 10px;
    }
    a {
      margin-right: 10px;
    }
    p:last-of-type {
      margin-top: 90px;
      font-style: italic;
    }
  }
  hr {
    border: 1px solid black;
    margin-top: 50px;
    width: 100%;
  }
`;

//---------------------------------- BUTTONS --------------------------------
export const ToggleSwitchWrapper = styled.div`
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .slider {
    background-color: ${(props) => props.theme.bgColor1};
    //BACKGROUND WHEN OFF
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .slider:before {
    background-color: white;
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    transition: all 0.3s ease-in-out;
  }
  input:checked + .slider {
    background-color: ${(props) => props.theme.bgColor1};
    //BACKGROUND WHEN ON
  }
  input:checked + .slider:before {
    transform: translateX(26px);
  }
  .slider.rounded {
    border-radius: 34px;
  }
  .slider.rounded:before {
    border-radius: 50%;
  }
`;

export const ArrowButton = styled.button`
    margin-top: 150px;
    margin-left: 60px;
    font-size: 0.9rem;
    outline: none;
    border: 1px solid ${(props) => props.theme.fontColor1};
    color: ${(props) => props.theme.fontColor1};
    background-color: transparent;
    border-radius: 50%;
    width: 55px;
    height: 55px;
    cursor: pointer;
  }
  button:hover {
    transition: transform 0.4s ease;
    transform: scale(1.3);
    border: 2px solid ${(props) => props.theme.fontColor1};
  }
`;
