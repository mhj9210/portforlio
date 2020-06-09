import React from "react";
import { Link } from "react-router-dom";

const Landingpage = () => {
  return (
    <div className="view landing_bg">
      <div className="container">
        <div className="row center">
          <div className="col-md-12 mb-4 white-text text-center">
            <h1
              className="bold landing_name animated fadeInUp slow"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Joshua H. Min
            </h1>
            <hr className=" col-sm-3 hr-light my-3 animated fadeInDown"></hr>
            <h5 className="text-uppercase animated fadeInDown slow">
              <strong
                style={{
                  fontSize: "30px",
                  fontFamily: "Playfair Display, serif",
                }}
              >
                Web Developer & Full Stack Developer
              </strong>
            </h5>
            <Link
              to="/main"
              className="btn btn-outline-white animated fadeInLeft slow my-4"
            >
              Main Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
