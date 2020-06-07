import React from "react";
import { Link } from "react-scroll";

const Navbar = () => (
  <nav className="navbar navbar-expand-md navbar-dark default-color sticky-top">
    <div className=" navbar-collapse ">
      <ul className="navbar-nav m-auto">
        <li className="nav-item">
          <Link
            className="nav-link"
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
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
);

export default Navbar;
