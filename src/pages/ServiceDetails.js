import React from "react";
import NormalHeader from "./../components/NormalHeader.js";
import { useParams } from "react-router";
import Footer from "../components/Footer.js";
import BG from "../assets/images/loginandsignupbg.png";
import useAuth from "../hooks/useAuth.js";
import { Col, Container, Row } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";


const ServiceDetails = () => {
  const { key } = useParams();
  const { services } = useAuth();
  const selectedService = services.find(
    (service) => service.key === Number(key)
  );
  const { img, title, desc, article } = selectedService;
  return (
    <>
      <NormalHeader />
      
        <div
          style={{
            minHeight: "80vh",
            background: `url(${BG})`,
            backgroundAttachment: "fixed",
        }}
        className='pb-5'
        >
        <Zoom>
          <Container className="mt-lg-5 pt-lg-5 pt-2">
            <Row
              style={{ background: "black" }}
              className="mt-5 border d-flex align-items-center"
            >
              <Col lg className="m-0 p-0">
                <img width="100%" src={img} alt="" />
              </Col>
              <Col lg>
                <h1 className="mt-2 text-primary">{title}</h1>
                <h3 className="text-white">{desc}</h3>
                <p className="text-muted">{article}</p>
              </Col>
            </Row>
          </Container>
        </Zoom>
        </div>
    
      <Footer></Footer>
    </>
  );
};

export default ServiceDetails;
