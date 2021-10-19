import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import sectionBg from "./../assets/images/about.webp";
import Fade from "react-reveal/Fade";
import Footer from "../components/Footer.js";
import NormalHeader from "./../components/NormalHeader.js";
import "./../assets/css/about.css";

const About = () => {
  return (
    <>
      <NormalHeader></NormalHeader>
      <div className="">
        <Container>
          <Row>
            <Col lg={5}>
              <Fade left cascade>
                <div
                  style={{
                    background: `url(${sectionBg})`,
                  }}
                  className="aboutSection mt-lg-5"
                ></div>
              </Fade>
            </Col>
            <Col className="about" lg={7}>
              <Fade right cascade>
                <div className="bg-white px-md-5 px-sm-2 py-5 ">
                  <h1 className="about-title">
                    We Are <span className="text-primary">Mediplus</span> A
                    Medical Clinic
                  </h1>
                  <p className="about-desc">
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences fly into your
                    mouth. It is a paradisematic country, in which roasted parts
                    of sentences fly into your mouth.
                  </p>
                  <div>
                    <button className="btn py-md-3 mb-md-0 my-button appointment-btn px-md-4 rounded-2 me-4 btn-primary">
                      Make an appointment
                    </button>
                    <button className="btn text-white my-button py-md-3 px-md-4 rounded-2 me-4 btn-warning">
                      Contact us
                    </button>
                  </div>
                </div>
              </Fade>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer></Footer>
    </>
  );
};

export default About;
