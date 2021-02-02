import React from "react";
import "./Grid.css";

function AppGrid() {
  return (
    <div className="grid-container">
      <div className="logo">
        <div className="items">LOGO</div>
        <div className="items">Business name</div>
        <div className="items">Est. 2021</div>
      </div>
      <div className="header">header</div>
      <div className="nav">nav</div>
      <div className="content">content</div>
      <div className="footer">footer</div>
    </div>
  );
}

export default AppGrid;
