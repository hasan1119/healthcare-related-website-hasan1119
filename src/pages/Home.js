import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./../assets/css/home.css";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
import Service from "../components/Service.js";

const Home = () => {
  return (
    <div>
      {/* Hero area */}
      <Slide left>
        <div className="vh-100 d-flex align-items-center hero-area">
          <Container>
            <Row className="">
              <Col className="container-column">
                <Slide left>
                  <Zoom right cascade>
                    <h6 className="greeting">Welcome to HealthCare</h6>
                  </Zoom>
                  <Zoom right cascade>
                    <h1 className="title">We are here for your Care</h1>
                  </Zoom>
                  <Zoom right cascade>
                    <p className="desc">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove.
                    </p>
                  </Zoom>
                  <Zoom>
                    <button className="btn btn-primary appointment rounded-pill">
                      Make a appointment
                    </button>
                  </Zoom>
                </Slide>
              </Col>
              <Col className="blank"></Col>
            </Row>
          </Container>
        </div>
      </Slide>
      <Container>
        <h2 className="text-center">Our Services</h2>
        <p className="text-center">In this section you can find all of our featured health care related services</p>

        
       <Service/>
      
      </Container>
    </div>
  );
};

export default Home;
