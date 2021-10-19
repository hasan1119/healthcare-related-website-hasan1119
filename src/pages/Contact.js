import React from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import SectionBg from "./../assets/images/loginandsignupbg.png";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
import Footer from "../components/Footer.js";
import NormalHeader from "../components/NormalHeader.js";

const Contact = () => {
  return (
    <>
      <NormalHeader></NormalHeader>
      <div
        className="mt-lg-5"
        style={{
          background: `url(${SectionBg})`,
          backgroundAttachment: "fixed",
        }}
      >
        <ContactForm />
      </div>
      <Footer />
    </>
  );
};

const formStyle = { background: "transparent", color: "white" };

function ContactForm() {
  return (
    <div style={{ padding: "58px 0 40px" }}>
      <Zoom left cascade>
        <h2 className="text-center text-white">Contact Us</h2>
      </Zoom>

      <Zoom right cascade>
        <p
          style={{ maxWidth: "630px" }}
          className="text-center mx-auto text-muted mb-4"
        >
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </p>
      </Zoom>
      <div>
        <Container>
          <Zoom>
            <Form>
              <Row>
                <Col sm>
                  <Form.Group
                    className="mb-3 text-white"
                    controlId="formBasicText"
                  >
                    <Form.Label>Your Name </Form.Label>
                    <Form.Control
                      className="bg-white"
                      style={formStyle}
                      type="text"
                      placeholder="Enter Your Name"
                    />
                  </Form.Group>
                </Col>
                <Col sm>
                  <Form.Group
                    className="mb-3 text-white"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>Your Email </Form.Label>
                    <Form.Control
                      className="bg-white"
                      style={formStyle}
                      type="email"
                      placeholder="Enter Your Email"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Control
                className="bg-white my-3"
                style={formStyle}
                type="text"
                placeholder="Write Your Subject..."
              />
              <Form.Group
                className="mb-3 text-white"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Your Messages</Form.Label>
                <Form.Control
                  className="bg-white"
                  style={formStyle}
                  placeholder="Write you message..."
                  as="textarea"
                  rows={3}
                />
              </Form.Group>
              <Button className="mb-5 px-4" variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Zoom>
        </Container>
      </div>
    </div>
  );
}

export default Contact;
