import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Main = () => {
  const [value, setValue] = useState("");

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Navbar />
      <Home value={value} onChange={handleChange} />
      <About name={value} />
      <Skills />
      <Projects />
      <Contact name={value} />
    </>
  );
};

export default Main;
