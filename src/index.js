import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.css";
import { DarkmodeContextProvider } from "./style/DarkmodeContext";

ReactDOM.render(
  <React.StrictMode>
    <DarkmodeContextProvider>
      <App />
    </DarkmodeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
