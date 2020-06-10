import React, { useState, useEffect } from "react";

const About = (props) => {
  const [name, setName] = useState("");
  useEffect(() => {
    setName(props.name);
  }, [props.name]);

  return (
    <div
      className="container-fluid"
      style={{ height: "100vh", backgroundColor: "#f4f4f4" }}
      id="about"
    >
      <div className=" h-100 row" style={{ paddingTop: "10%" }}>
        <div className="col-sm-6 col-md-6 col-lg-6">
          <img
            src="https://i.imgur.com/4PrCrOS.jpg"
            alt=""
            style={{ width: "45%", marginLeft: "50%", borderRadius: "15px" }}
          />
        </div>
        <div className="col-lg-6">
          <h1>About</h1>
          <hr
            className="col-md-2 text-left"
            style={{
              borderTop: "2px solid #a0c1b8",
              width: "5%",
              textAlign: "left",
              marginLeft: 0,
            }}
          ></hr>
          <h3
            style={{
              marginTop: "15px",
              fontSize: "1.5rem",
              width: "50%",
              textAlign: "left",
              letterSpacing: "1px",
              marginBottom: "15px",
            }}
          >
            Hello, {name === "" ? "Guest" : name}.{" "}
          </h3>
          <p style={{ fontSize: "1.2rem", width: "45%" }}>
            I've been coding/learning everyday since I started my developer
            journey and I'm loving every single moment of it. I'm always open
            minded when it comes to learning new skills or technology and also
            joining a new team with great developers and move forward with my
            development journey.
          </p>
          <br />
          <ul>
            <li>Location: Downey, CA</li>
            <li>U.S. Army Reserve</li>
            <li>Korean-American</li>
            <li>Favorite Code editor: VS Code</li>
            <li>Hobbies: Games, Gym</li>
            <li>Love solving puzzles</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
