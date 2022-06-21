import React from "react";
import "../App.css";

const Header = (props) => {
  return (
    <div className="header-text">
      <h1>{props.title}</h1>
    </div>
  );
};

export default Header;
