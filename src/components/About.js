import React, { useState, useEffect } from "react";

const About = (props) => {
  const [name, setName] = useState("");
  useEffect(() => {
    setName(props.name);
  }, [props.name]);

  return (
    <div
      className="container-fluid"
      style={{ height: "100vh", backgroundColor: "#6f9a8d", color: "#fff" }}
      id="about"
    >
      <div className="h-100 row align-items-center">
        <div className="col-md-12 col-lg-12 m-auto">
          <div className="about_head col-md-6 text-left m-auto">
            <h3>Hello, {name === "" ? "Guest" : name}</h3>
            <h4>
              My name is Joshua Min and I would like for you to get to know me a
              little bit.
            </h4>
          </div>
          <div className="container my-3 py-4 z-depth-1">
            <section className="px-md-5 mx-md-5 text-center text-lg-left">
              <div className="row">
                <div className="col-md-6 mb-4 mb-md-0">
                  <div className="view">
                    <img
                      src="https://i.imgur.com/70J9vRX.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-md-6 mb-4 mb-md-0">
                  <h3 className="font-weight-bold">About Joshua...</h3>
                  <ul className="about_ul" style={{ fontSize: "1.5rem" }}>
                    <li>Location: Downey, CA</li>
                    <li>
                      U.S. Army Reserve{" "}
                      <a
                        target="_blank"
                        href="https://www.google.com/search?q=us+army+reserves&rlz=1C1CHBD_enUS898US898&oq=us+army+reserves&aqs=chrome..69i57j0l7.2687j0j8&sourceid=chrome&ie=UTF-8"
                        rel="noopener noreferrer"
                      >
                        More Info
                      </a>
                    </li>
                    <li>Korean-American</li>
                    <li>Favorite Code editor: VS Code</li>
                    <li>Hobbies: Games, Gym</li>
                    <li>Loves to learn new tech/skills</li>
                    <li>Love solving puzzles</li>
                  </ul>
                  <h3>
                    I've been coding/learning everyday since I started my
                    developer journey and I love every single moment of it. I'm
                    always open to join a team with great people and move
                    forward with my development journey.
                  </h3>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
