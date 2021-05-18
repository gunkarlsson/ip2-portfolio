import styled from "styled-components";

export const Wrapper = styled.main`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  /* cursor: none; */
  background-color: ${(props) => props.theme.bgColor2};
  border: 30px solid ${(props) => props.theme.bgColor1};
  color: ${(props) => props.theme.fontColor1};
  a {
    color: ${(props) => props.theme.fontColor1};
  }
  a:hover {
    background-color: ${(props) => props.theme.bgColor1};
  }
`;

//---------------------------------- SECTIONS --------------------------------
export const PrimarySection = styled.section`
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .title {
    width: 55vw;
    h1 {
      font-size: 8rem;
      line-height: 7.7rem;
      margin: 0 0 20px 60px;
    }
    h2 {
      font-size: 2.2rem;
      line-height: 3rem;
      margin: 0px 0px 0px 62px;
    }
    hr {
      border: 2px solid black;
      width: 50vw;
      margin-left: 62px;
      margin-bottom: 20px;
    }
  }

  i {
    display: inline-block;
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
  height: 80vh;
  max-width: 95vw;
  display: flex;
  justify-content: space-between;

  .section-title {
    width: 30vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${(props) => props.theme.bgColor1};

    h1:first-of-type {
      line-height: 3rem;
      margin: 0px 10px 0 60px;
    }
    h1 {
      font-size: 4.6rem;
      margin: 20px 30px 0 120px;
    }
  }

  article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 60vw;
    padding: 50px;
    font-size: 1.2rem;
    font-weight: 500;
  }

  .about-text {
    p {
      max-width: 90%;
      margin-bottom: 20px;
    }
    span {
      text-decoration: underline;
    }
    span:hover {
      background-color: ${(props) => props.theme.bgColor1};
    }
    img {
      opacity: 0;
      width: 200px;
      height: 200px;
      border: 10px solid ${(props) => props.theme.bgColor1};
      position: absolute;
      display: block;
    }
    img:first-of-type {
      margin-left: 5vw;
    }
    img:last-of-type {
      margin-left: 20vw;
    }
    .hover-text1:hover ~ img:first-of-type {
      opacity: 1;
      transform: translateY(20px) translateX(-10px);
      transition: 0.6s cubic-bezier(0.33, 0.01, 0.38, 1.01);
    }
    .hover-text2:hover ~ img:last-of-type {
      opacity: 1;
      transform: translateY(20px) translateX(30px);
      transition: 0.6s cubic-bezier(0.33, 0.01, 0.38, 1.01);
    }
  }

  .contact-text {
    margin-bottom: 30px;
    p {
      margin-left: 50px;
      width: 80%;
    }

    a {
      margin-right: 20px;
    }
    hr {
      border: 1px solid ${(props) => props.theme.fontColor1};
      margin: 50px 0 50px 50px;
      width: 75%;
    }
  }
`;

export const ProjectsSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 60vw;
  padding: 30px;

  button {
    outline: none;
    border: none;
    background-color: rgba(255, 255, 255, 0.6);
    font-size: 1.2rem;
    width: 80px;
    height: 60px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  button:hover {
    background-color: rgba(255, 255, 255, 1);
  }
  .left-btn {
    border-radius: 50px 0 0 50px;
  }
  .left-btn i {
    transform: translateX(20%);
  }
  .right-btn {
    border-radius: 0 50px 50px 0;
  }
  .right-btn i {
    transform: translateX(-20%);
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
    margin-top: 10px;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.3rem;
  }

  .repo-image {
    max-width: 1280px;
    img {
      width: 100%;
      outline: 6px solid white;
      outline-offset: -3px;
    }
  }
`;

//---------------------------------- BUTTONS --------------------------------

export const DarkmodeButton = styled.div`
  z-index: 5;
  position: fixed;
  top: 55px;
  right: 130px;
  display: flex;
  align-items: center;

  span {
    opacity: 0;
    margin-right: 10px;
    transition: opacity 0.4s ease;
    font-weight: 500;
  }
  .full {
    border: 2px solid ${(props) => props.theme.fontColor1};
    height: 32px;
    width: 32px;
    border-radius: 50%;
    background-color: none;
    cursor: pointer;
    transition: transform 0.4s ease;
  }
  .half {
    display: inline-block;
    background-color: ${(props) => props.theme.fontColor1};
    height: 30px;
    width: 15px;
    border-radius: 40px 0 0 40px;
    transform: rotate(0deg);
    transform: translateX(-2%);
    transition: transform 0.3s ease;
  }
  .full:hover {
    transform: rotate(180deg) scale(1.03);
  }

  :hover span {
    opacity: 1;
  }
`;

// export const ToggleSwitchWrapper = styled.div`
//   .switch {
//     position: relative;
//     display: inline-block;
//     width: 60px;
//     height: 34px;
//   }
//   .switch input {
//     opacity: 0;
//     width: 0;
//     height: 0;
//   }
//   .slider {
//     background-color: ${(props) => props.theme.bgColor1};
//     //BACKGROUND WHEN OFF
//     position: absolute;
//     cursor: pointer;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//   }
//   .slider:before {
//     background-color: white;
//     position: absolute;
//     content: "";
//     height: 26px;
//     width: 26px;
//     left: 4px;
//     bottom: 4px;
//     transition: all 0.3s ease-in-out;
//   }
//   input:checked + .slider {
//     background-color: ${(props) => props.theme.bgColor1};
//     //BACKGROUND WHEN ON
//   }
//   input:checked + .slider:before {
//     transform: translateX(26px);
//   }
//   .slider.rounded {
//     border-radius: 34px;
//   }
//   .slider.rounded:before {
//     border-radius: 50%;
//   }
//
// `;

// // export const ArrowButton = styled.button`;
//   border: 1px solid ${(props) => props.theme.fontColor1};
//   color: ${(props) => props.theme.fontColor1};
//   background-color: transparent;
//   outline: none;
//   border-radius: 50%;
//   width: 55px;
//   height: 55px;
//   cursor: pointer;

//   :hover {
//     transition: transform 0.4s ease;
//     transform: scale(1.3);
//     border: 2px solid ${(props) => props.theme.fontColor1};
//   }
// `;
