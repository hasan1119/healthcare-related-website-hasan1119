import React, { useState } from "react";
import {  Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../hooks/useAuth.js";
import "./../assets/css/header.css";

const Header = () => {
  const [navbar, setNavbar] = useState(true);

  function changeBackground() {
    if (window.scrollY >= 100) {
      setNavbar(false);
    } else {
      setNavbar(true);
    }
  }
  window.addEventListener("scroll", changeBackground);

  const { allAuthInfo } = useAuth();
  const { logOut, user } = allAuthInfo;
  const { displayName, photoURL, email } = user;
  console.log(allAuthInfo.user.photoURL);
  return (
    <div>
      <Navbar
        variant="dark"
        className={navbar ? "navBar activeNav small-device" : "navBar"}
        expand="lg"
      >
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

              <Nav.Link as={NavLink} to="/doctors" className="text-white">
                Doctors
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#services" className="text-white">
                Services
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
                    <img width="100px" src={photoURL} alt="" />
                    <h6 className="mt-3">{displayName}</h6>
                    <p className="m-0 email mb-2">{email}</p>
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
