import React from "react";
import { Link } from "react-scroll";

export default () => (
  <div className="sticky_nav">
    <nav className="navbar navbar-expand-lg navbar-dark default-color">
      <span className="badge badge-primary">Hireable</span>
      <div className="navbar-collapse ">
        <ul className="navbar-nav m-auto">
          <li className="nav-item">
            <Link
              className="nav-link"
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);
