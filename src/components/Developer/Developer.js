import React from "react";

const Developer = ({ currentDev }) => {
  return (
    //TODO: Add the developer work with me button which should badically render a form

    <div className="dev-container">
      <img alt="cover-img" src={currentDev.cover}></img>
      <h2>{currentDev.name}</h2>
      <h3>{currentDev.skills}</h3>
      <p>{currentDev.text}</p>
    </div>
  );
};

export default Developer;
