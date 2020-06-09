import React from "react";

const Projects = () => {
  return (
    <div
      className="container-fluid"
      style={{ height: "100vh", backgroundColor: "#efee9d" }}
      id="projects"
    >
      <div className=" h-100 row">
        <div
          className="col-md-12"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <div className="col-md-3 project_qs">
            <div className="card text-center p-4 project_card">
              <img
                className="card-img-top"
                src="https://i.imgur.com/lZsx4xF.png"
                alt="Quarter Scheduling"
              />
              <div className="card-body">
                <h4 className="card-title">Quarter Scheduling</h4>
                <p className="card-text text-left">
                  Our mission in Quarter Scheduling is to provide staffing
                  software that is efficient and affordable. No more going
                  through spreadsheets and making calls. No more last minute
                  call outs to your staff.
                </p>
                <a
                  href="https://quarterscheduling.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Quarter Scheduling
                </a>
              </div>
              <span
                className="text-right text-white"
                style={{ fontFamily: "Lobster, cursive" }}
              >
                Mar 2020 - Present
              </span>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card text-center p-4 project_card">
              <img
                className="card-img-top"
                src="https://business.lacity.org/sites/g/files/wph521/themes/site/logo.png"
                alt="Pathways"
              />
              <div className="card-body mt-4">
                <h4 className="card-title">LA Pathways</h4>
                <p className="card-text">
                  LA Pathways is a platform created for the city of Los Angeles
                  to connect business owners and resource providers. User(s) are
                  taken through an initial assessment that runs through an
                  algorithm that allows entrepreneurs the opportunity to seek
                  services and information.
                </p>
                <a
                  href="https://business.lacity.org/pathways"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LA Pathways
                </a>
              </div>
              <span
                className="text-right text-white"
                style={{ fontFamily: "Lobster, cursive" }}
              >
                Aug 2019 - Dec 2019
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
