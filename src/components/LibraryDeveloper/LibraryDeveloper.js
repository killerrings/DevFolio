import React from "react";

const LibraryDeveloper = ({ dev, setCurrentDev }) => {
  const developerSelectHandler = () => {
    setCurrentDev(dev);
  };
  return (
    <div onClick={developerSelectHandler} className="library-dev">
      <div className="dev-description">
        <h5>{dev.title}</h5>
        <img alt={dev.name} src={dev.cover}></img>
        <h3>{dev.name}</h3>
        <h4>{dev.skills}</h4>
      </div>
    </div>
  );
};

export default LibraryDeveloper;
