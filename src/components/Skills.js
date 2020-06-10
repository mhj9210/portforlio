import React from "react";

const Skills = () => {
  return (
    <div
      className="container-fluid"
      id="skills"
      style={{ height: "100vh", backgroundColor: "#e8e4e1" }}
    >
      <div className="h-100 row" style={{ paddingTop: "10%" }}>
        <div className="col-md-12 d-flex justify-content-around">
          <div className="col-md-4 Card mx-auto">
            <div className="text-center">
              <i className="fas fa-code" style={{ fontSize: "50px" }}></i>
              <h1 className="mt-3">Front End</h1>
            </div>
            <ul className="list-group list-group-flush mt-4 col-md-6 mx-auto">
              <li className="list-group-item">HTML</li>
              <li className="list-group-item">CSS</li>
              <li className="list-group-item">Javascript</li>
              <li className="list-group-item">jQuery</li>
              <li className="list-group-item">React.JS (Hooks, Redux)</li>
              <li className="list-group-item"></li>
            </ul>
          </div>

          <div className="col-md-4 Card mx-auto">
            <div className="text-center">
              <i className="fas fa-database" style={{ fontSize: "50px" }}></i>
              <h1 className="mt-3">Back End</h1>
            </div>
            <ul className="list-group list-group-flush mt-4 col-md-6 mx-auto">
              <li className="list-group-item">C#</li>
              <li className="list-group-item">ASP.NET</li>
              <li className="list-group-item">.Net Core</li>
              <li className="list-group-item"> SQL Server</li>
              <li className="list-group-item">Node.JS(Express, MongoDB)</li>
              <li className="list-group-item"></li>
            </ul>
          </div>
          <div className="col-md-4 Card mx-auto">
            <div className="text-center">
              <i className="fas fa-toolbox" style={{ fontSize: "50px" }}></i>
              <h1 className="mt-3">Tools</h1>
            </div>
            <ul className="list-group list-group-flush mt-4 col-md-6 mx-auto">
              <li className="list-group-item"> VS Code</li>
              <li className="list-group-item">Git</li>
              <li className="list-group-item">Github</li>
              <li className="list-group-item">SQL Server ManagementStudio</li>
              <li className="list-group-item"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
