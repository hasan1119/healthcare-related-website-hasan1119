import React, { useState } from "react";
import { Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import logo from "./../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";
import "./NormalHeader.css";

const Header = () => {
  const { logOut, displayName, photoURL, email } = useAuth();
  return (
    <div>
      <Navbar variant="dark" className="navBar" expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} className="text-white" to="/home">
            <span className="fw-bold fs-4">HealthCare</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link as={NavLink} to="/home" className="text-white">
                Home
              </Nav.Link>

              <Nav.Link as={NavLink} to="/about" className="text-white">
                About
              </Nav.Link>

              <Nav.Link as={NavLink} to="/department" className="text-white">
                Department
              </Nav.Link>
              <Nav.Link as={NavLink} to="/doctors" className="text-white">
                Doctors
              </Nav.Link>
              <Nav.Link as={NavLink} to="/blog" className="text-white">
                Blog
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/contact"
                className="text-white contact"
              >
                Contact
              </Nav.Link>
              {!displayName ? (
                <>
                  <Nav.Link
                    className="text-white mb-lg-0 mb-3 login"
                    as={NavLink}
                    to="/login"
                  >
                    Login
                  </Nav.Link>

                  <Nav.Link
                    className="text-white register"
                    as={NavLink}
                    to="/signup"
                  >
                    Register
                  </Nav.Link>
                </>
              ) : (
                <NavDropdown
                  title={
                    <img
                      style={{
                        width: "45px",
                        borderRadius: "50%",
                      }}
                      src={photoURL}
                      alt=""
                    />
                  }
                >
                  <div className="text-center">
                    <h6>{displayName}</h6>
                    <p className="m-0 mb-2">{email}</p>
                    <button onClick={logOut} className="btn btn-primary">
                      Sign Out
                    </button>
                  </div>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
