import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import sectionBg from "./../assets/images/about.webp";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import NormalHeader from "./../components/header/NormalHeader.js";
import Footer from "../components/footer/Footer.js";
import './../assets/css/about.css'

const About = () => {
  return (
    <>
      <NormalHeader></NormalHeader>
      <div className="">
        <Container>
          <Row
            style={{
              background: `url(${sectionBg})`
            }}
            className="aboutSection"
          >
            <Col md></Col>
            <Col className='bg-white about' md>
              <h1 className='about-title'>We Are Mediplus A Medical Clinic</h1>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth. It is a
                paradisematic country, in which roasted parts of sentences fly
                into your mouth.
              </p>
              <div>
                <button className="btn btn-primary">Make an appointment</button>
                <button className="btn btn-warning">Contact us</button>
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
