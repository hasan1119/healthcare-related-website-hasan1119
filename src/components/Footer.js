import React from "react";
import "./../assets/css/footer.css";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Zoom from "react-reveal/Zoom";

import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-white">
      <div className="py-4 pt-5 gradient">
        <Container>
          <Row>
            <Col lg md={6} className="mb-sm-3">
              <Zoom>
                <div>
                <h3>HealthCare</h3>
                <p className="h-desc">
                  Far far away, behind the word mountains, far from the
                  countries.
                </p>
                <ul className="list-unstyled social-icons d-flex">
                  <li>
                    <a href="/">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <FontAwesomeIcon icon={faYoutube} />
                    </a>
                  </li>
                </ul>
                </div>
              </Zoom>
            </Col>
            <Col lg md={6} className="mb-sm-3">
              <Zoom>
                <div>
              <h3>Links</h3>
              <ul className="list-unstyled footer-link">
                <li>
                  <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About us</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact us</NavLink>
                </li>
                <li>
                  <NavLink to="/courses">Services</NavLink>
                </li>
              </ul>
              </div>
              </Zoom>
            </Col>
            <Col lg md={6} className="mb-sm-3">
              <Zoom>
                <div>
              <h3>Departments</h3>
              <ul className="list-unstyled footer-link">
                <li>
                  <NavLink to="/home">Neurology</NavLink>
                </li>
                <li>
                  <NavLink to="/about">Opthalmology</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Nuclear Magnetic</NavLink>
                </li>
                <li>
                  <NavLink to="/courses">Surgical</NavLink>
                </li>
              </ul>
              </div>
              </Zoom>
            </Col>
            <Col lg md={6}>
              <Zoom>
              <div>
              <h3>Reach Out Us?</h3>

              <ul className="list-unstyled contact-info">
                <li>
                  <Row>
                    <Col md={1}>
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </Col>
                    <Col md={10}>
                      <span className="">Naogaon,Rajshahi,Bangladesh</span>
                    </Col>
                  </Row>
                </li>
                <li>
                  <Row>
                    <Col md={1}>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </Col>
                    <Col md={10}>
                      <span className="">coding.club.pro@gmail.com</span>
                    </Col>
                  </Row>
                </li>
                <li>
                  <Row>
                    <Col md={1}>
                      <FontAwesomeIcon icon={faPhone} />
                    </Col>
                    <Col>
                      <span className="">
                        Helpline: 01763251119 (10:00AM to 10.00PM)
                      </span>
                    </Col>
                  </Row>
                </li>
              </ul>   
             </div>
            </Zoom>
            </Col>
        
          </Row>
        </Container>
      </div>
      <hr className="m-0 p-0" />
      <p className="text-center m-0 py-3 copyright">
        Copyright © All Reserved. 2021
      </p>
    </div>
  );
};

export default Footer;
