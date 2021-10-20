import React from "react";
import { Col, Card, Container, Row } from "react-bootstrap";
import "./../assets/css/home.css";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
import Service from "../components/Service.js";
import BG from "./../assets/images/loginandsignupbg.png";
import "./../assets/css/home.css";
import useAuth from "../hooks/useAuth.js";

const Home = () => {
  const { blogs } = useAuth();
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
      <div id="services" style={{ background: `url(${BG})` }}>
        <Container style={{ padding: "80px 15px" }}>
          <h2 className="text-center text-white">Our Services</h2>
          <p className="text-center text-muted mb-4">
            In this section you can find all of our featured health care related
            services
          </p>

          <Service />
        </Container>
      </div>
      <div className="priority">
        <Container className=" d-flex justify-content-center align-items-center">
          <div className="text-center">
            <h1 className="fs-1 text-primary fw-bold">
              Your Health is Our Priority
            </h1>
            <p className="text-white">
              We can manage your dream building A small river named Duden flows
              by their place
            </p>
            <button className="btn btn-primary py-2 px-4 appointment rounded-pill">
              Make a appointment
            </button>
          </div>
        </Container>
      </div>
      <Container className="my-2 my-lg-5 py-4">
        <h1 className="text-center fs-1">Gets Every Single Updates Here</h1>
        <p className="text-center">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </p>
        <div>
          <Row>
            {blogs?.map((blog) => {
              const { key, title, article, img } = blog;
              return (
                <Col key={key} className="my-3" md={6} lg={4}>
                  <Zoom>
                    <Card>
                      <Card.Img variant="top" src={img} />
                      <Card.Body>
                        <Card.Title>
                          <h4>{title}</h4>
                        </Card.Title>
                        <Card.Title>
                          <h6
                            className="text-muted"
                            style={{ minHeight: "60px" }}
                          >
                            {article.slice(0,100)}
                          </h6>
                        </Card.Title>
                        <button className="w-100 btn btn-primary">
                          Read More
                        </button>
                      </Card.Body>
                    </Card>
                  </Zoom>
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Home;
