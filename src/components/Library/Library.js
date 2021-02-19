import React from "react";
import { LibraryDeveloper } from "../../components";
import { IoClose } from "react-icons/io5";

const Library = ({ devs, setCurrentDev, libraryStatus, setLibraryStatus }) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <div className="library-header">
        <h2>Developer Library</h2>
        <IoClose
          className="closeBtn"
          onClick={() => setLibraryStatus(!libraryStatus)}
        />
      </div>
      <div className="library-developers">
        {devs.map((dev) => (
          <LibraryDeveloper
            dev={dev}
            setCurrentDev={setCurrentDev}
            id={dev.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
