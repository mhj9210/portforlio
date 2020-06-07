import React from "react";

const Contact = (props) => {
  return (
    <div style={{ height: "100vh", backgroundColor: "#30475e" }} id="contact">
      <div className="container">
        <div className="row ">
          <div className="col-md-12">
            <h1
              className="col-md-12"
              style={{ marginTop: "12%", textAlign: "center", color: "#fff" }}
            >
              Thank You so much for taking your time to view my portforlio,{" "}
              {props.name === "" ? "Guest" : props.name}!
            </h1>
            <div className="col-md-10 m-auto text-center ">
              <h1
                style={{
                  marginTop: "10%",
                  color: "#fff",
                  fontFamily: "Architects Daughter, cursive",
                  fontSize: "55px",
                }}
              >
                Contact
              </h1>
              <hr style={{ width: "60%", borderTop: "#7ebdb4 solid 1px" }}></hr>
              <h3
                style={{ color: "#fff", fontSize: "50px", paddingTop: "20px" }}
              >
                <span>
                  <i class="fas fa-phone-volume"></i>
                </span>{" "}
                213-703-0915
              </h3>
              <h3
                style={{ color: "#fff", fontSize: "50px", paddingTop: "20px" }}
              >
                <span>
                  <i class="fab fa-linkedin"></i>
                </span>{" "}
                <a
                  href="https://www.linkedin.com/in/joshuahmin/"
                  target="_blank"
                >
                  Joshua Min
                </a>
              </h3>
              <h3
                style={{ color: "#fff", fontSize: "50px", paddingTop: "20px" }}
              >
                <span>
                  <i class="fas fa-at"></i>
                </span>{" "}
                Mhj9210@gmail.com
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
