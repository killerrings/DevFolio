import React from "react";
import { FaBars, FaDochub } from "react-icons/fa";

const Navbar = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <nav>
      <h1>DevFolio</h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        Library
        <FaDochub className="logoBtn" />
      </button>
    </nav>
  );
};

export default Navbar;
