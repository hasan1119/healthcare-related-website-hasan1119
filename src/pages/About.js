import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import sectionBg from "./../assets/images/about.webp";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import NormalHeader from "./../components/header/NormalHeader.js";
import Footer from "../components/footer/Footer.js";
import "./../assets/css/about.css";

const About = () => {
  return (
    <>
      <NormalHeader></NormalHeader>
      <div className="">
        <Container>
          <Row>
            <Col
              style={{
                background: `url(${sectionBg})`,
              }}
              className="aboutSection mt-5"
              lg={5}
            ></Col>
            <Col className="bg-white px-md-5 px-sm-2 py-5 about" lg={7}>
              <h1 className="about-title">
                We Are <span className="text-primary">Mediplus</span> A Medical
                Clinic
              </h1>
              <p className="about-desc">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth. It is a
                paradisematic country, in which roasted parts of sentences fly
                into your mouth.
              </p>
              <div>
                <button className="btn py-md-3 mb-md-0 appointment-btn px-md-4 rounded-2 me-4 btn-primary">
                  Make an appointment
                </button>
                <button className="btn text-white py-md-3 px-md-4 rounded-2 me-4 btn-warning">
                  Contact us
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer></Footer>
    </>
  );
};

export default About;
