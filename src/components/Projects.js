import React from "react";

const Projects = () => {
  return (
    <div style={{ height: "100vh", backgroundColor: "#efee9d" }} id="projects">
      <div className="row">
        <div className="col-md-12 d-flex justify-content-around">
          <div class="col-md-3 project_qs">
            <div class="card text-center p-4 project_card">
              <img
                className="card-img-top"
                src="/image/qs.png"
                alt="Card image cap"
              />
              <div class="card-body">
                <h4 class="card-title">Quarter Scheduling</h4>
                <p class="card-text text-left">
                  Our mission in Quarter Scheduling is to provide staffing
                  software that is efficient and affordable. No more going
                  through spreadsheets and making calls. No more last minute
                  call outs to your staff.
                </p>
                <a href="https://quarterscheduling.com/" target="_blank">
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

          <div class="col-md-3">
            <div class="card text-center p-4 project_card">
              <img
                class="card-img-top"
                src="/image/pathways.png"
                alt="Card image cap"
              />
              <div class="card-body mt-4">
                <h4 class="card-title">LA Pathways</h4>
                <p class="card-text">
                  LA Pathways is a platform created for the city of Los Angeles
                  to connect business owners and resource providers. User(s) are
                  taken through an initial assessment that runs through an
                  algorithm that allows entrepreneurs the opportunity to seek
                  services and information.
                </p>
                <a href="https://business.lacity.org/pathways" target="_blank">
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

{
  /* <a href="https://quarterscheduling.com/" target="_blank">
  Quarter Scheduling
</a> */
}
