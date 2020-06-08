import React from "react";

const Skills = () => {
  return (
    <div
      className="container-fluid"
      style={{ height: "100vh", backgroundColor: "#4f98ca" }}
      id="skills"
    >
      <div className="row">
        <div
          className="col-md-12"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <div className="col-md-4 col-lg-4">
            <div className="card">
              <ul className="list-group list-group-flush">
                <li className="list-group-item text-center">
                  <span className="skill_title">Front-End</span>
                </li>
                <li className="list-group-item">
                  <span className="skill_list">HTML</span>
                  <span role="img" className="rating">
                    {" "}
                    &#11088;&#11088;&#11088;&#11088;&#10032;
                  </span>
                </li>
                <li className="list-group-item">
                  <span role="img" className="skill_list">
                    CSS
                  </span>
                  <span role="img" className="rating">
                    {" "}
                    &#11088;&#11088;&#11088;&#11088;&#10032;
                  </span>
                </li>
                <li className="list-group-item">
                  <span className="skill_list">Javascript</span>
                  <span role="img" aria-label="star" className="rating">
                    &#11088;&#11088;&#11088;&#11088;&#10032;
                  </span>
                </li>
                <li className="list-group-item">
                  <span className="skill_list">jQuery</span>
                  <span role="img" className="rating">
                    {" "}
                    &#11088;&#11088;&#11088;&#10032;&#10032;
                  </span>
                </li>
                <li className="list-group-item">
                  <span className="skill_list">React.JS</span>
                  <span role="img" className="rating">
                    {" "}
                    &#11088;&#11088;&#11088;&#11088;&#10032;
                  </span>
                </li>
                <li className="list-group-item">
                  <span className="skill_list">Redux</span>
                  <span role="img" className="rating">
                    {" "}
                    &#11088;&#11088;&#10032;&#10032;&#10032;
                  </span>
                </li>
                <li className="list-group-item">
                  <span className="skill_list">React Hooks</span>
                  <span role="img" className="rating">
                    {" "}
                    &#11088;&#11088;&#11088;&#11088;&#10032;
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4 col-lg-4">
            <div className="card">
              <ul className="list-group list-group-flush">
                <li className="list-group-item text-center">
                  <span className="skill_title">Back-End</span>
                </li>
                <li className="list-group-item">
                  <span className="skill_list">C#</span>
                  <span role="img" className="rating">
                    {" "}
                    &#11088;&#11088;&#10032;&#10032;&#10032;
                  </span>
                </li>
                <li className="list-group-item">
                  <span className="skill_list">ASP.NET</span>
                  <span role="img" className="rating">
                    {" "}
                    &#11088;&#11088;&#10032;&#10032;&#10032;
                  </span>
                </li>
                <li className="list-group-item">
                  <span className="skill_list">.Net Core</span>
                  <span role="img" className="rating">
                    {" "}
                    &#11088;&#11088;&#10032;&#10032;&#10032;
                  </span>
                </li>
                <li className="list-group-item">
                  <span className="skill_list">MS SQL</span>
                  <span role="img" className="rating">
                    {" "}
                    &#11088;&#11088;&#10032;&#10032;&#10032;
                  </span>
                </li>
                <li className="list-group-item">
                  <span className="skill_list">T-SQL</span>
                  <span role="img" className="rating">
                    {" "}
                    &#11088;&#11088;&#10032;&#10032;&#10032;
                  </span>
                </li>
                <li className="list-group-item">
                  <span className="skill_list">Node.JS</span>
                  <span role="img" className="rating">
                    {" "}
                    &#11088;&#11088;&#10032;&#10032;&#10032;
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
