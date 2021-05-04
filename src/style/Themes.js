import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  bgColor1: "#f4f0df",
  bgColor2: "#f2d7cf",
  fontColor1: "black",
};

export const darkTheme = {
  bgColor1: "black",
  bgColor2: "#4C4C4C",
  fontColor1: "white",
};

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Work Sans";
}
/* SCROLLBAR */
body::-webkit-scrollbar {
  width: 0.5em;
}
body::-webkit-scrollbar-track {
  background-color: ${(props) => props.theme.bgColor1};;
}
body::-webkit-scrollbar-thumb {
  background-color: black;
}
body::-webkit-scrollbar:hover {
  background-color: black;
  cursor: grab;
}
/* Works on Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: black;
}
`;
