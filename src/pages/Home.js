import React, { useState } from "react";
import { Library, Developer, Navbar } from "../components";
import data from "../data";

const Home = () => {
  const [devs, setDevs] = useState(data());
  const [currentDev, setCurrentDev] = useState(devs[0]);
  const [libraryStatus, setLibraryStatus] = useState(false);
  return (
    <>
      <Navbar
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
      />
      <Developer currentDev={currentDev} />
      <Library
        devs={devs}
        setCurrentDev={setCurrentDev}
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
      />
    </>
  );
};

export default Home;
