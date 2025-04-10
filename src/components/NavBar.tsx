import React, { useState, useContext } from "react";

import {
  Nav,
  Navbar,
  NavDropdown,
  Dropdown,
  Button,
  Container,
} from "react-bootstrap";
import GymLogo from "../assets/gymlogo.jpg";
import Image from "react-bootstrap/Image";
import { FaUserAlt } from "react-icons/fa";

import { Link } from "react-router-dom";
import gymLocations from "../utils/locations";
import SignUpModal from "./SignUp";
import LoginModal from "./Login";

function NavBar() {
  const [modalState, setModalState] = useState({ login: false, signup: false });

  const openModal = (modal: "login" | "signup") => {
    setModalState((prevState) => ({ ...prevState, [modal]: true }));
  };

  const closeModal = (modal: "login" | "signup") => {
    setModalState((prevState) => ({ ...prevState, [modal]: false }));
  };

  return (
    <>
      <Navbar
        className="shadow-sm"
        fixed="top"
        collapseOnSelect
        expand="lg"
        bg="black"
        variant="dark"
      >
        <Container className="text-uppercase ">
          <Navbar.Brand as={Link} to="/home" className="d-flex flex-column">
            <Image
              src={GymLogo}
              alt="Gym Logo"
              height="50"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>

              <NavDropdown title="Gallery" id="collasible-nav-dropdown">
                {gymLocations.map(({ name, galleryPath }, index) => (
                  <NavDropdown.Item
                    as={Link}
                    to={galleryPath}
                    className="btn-clicked"
                    key={index}
                  >
                    {name}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>

              <Nav.Link as={Link} to="/smart_fitness_tracker">
                Smart Fitness Tracker
              </Nav.Link>

              <NavDropdown
                title="Classes & Schedules"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item
                  as={Link}
                  to="/classes"
                  className="btn-clicked"
                >
                  Classes
                </NavDropdown.Item>
                <Dropdown.Menu show>
                  <Dropdown.Header>Schedules</Dropdown.Header>

                  {gymLocations.map(({ name, schedulePath }, index) => (
                    <Dropdown.Item
                      as={Link}
                      to={schedulePath}
                      className="btn-clicked"
                      key={index}
                    >
                      {name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </NavDropdown>

              <Nav.Link as={Link} to="/services">
                Services
              </Nav.Link>
            </Nav>

            <Nav>
              <Dropdown align="end">
                <Dropdown.Toggle
                  variant="dark btn-clicked-link"
                  id="user-dropdown"
                >
                  <FaUserAlt className="text-white fs-5" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    className="btn-clicked"
                    onClick={() => openModal("login")}
                  >
                    Log In
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="btn-clicked"
                    onClick={() => openModal("signup")}
                  >
                    Sign Up
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <LoginModal
        showModal={modalState.login}
        closeModal={() => closeModal("login")}
      />
      <SignUpModal
        showModal={modalState.signup}
        closeModal={() => closeModal("signup")}
      />
    </>
  );
}

export default NavBar;
