import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Data Analyst",
          "Data Scientist",
          "Machine Learning Engineer",
          "AI Engineering Enthusiast",
          "Full Stack Developer",
          "Frontend Engineer",
          "Backend Developer",
          "Informatics Engineering Student",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
