import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import useAuth from "../hooks/useAuth.js";
import Zoom from "react-reveal/Zoom";
import { NavLink } from "react-router-dom";

const Service = () => {
  const { services } = useAuth();
  return (
    <Row>
      {services.map((service) => {
        return <SingleService service={service} key={service.key} />;
      })}
    </Row>
  );
};

const SingleService = ({ service }) => {
  const { title, img, desc,key } = service;
  return (
    <Col className="my-3" md={6} lg={4}>
      <Zoom>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>
              <h4>{title}</h4>
            </Card.Title>
            <Card.Title>
              <h6 style={{ minHeight: "60px" }}>{desc}</h6>
            </Card.Title>
            <NavLink to={`/service/${key}`} className="w-100 btn btn-primary" >
              View Details
            </NavLink>
          </Card.Body>
        </Card>
      </Zoom>
    </Col>
  );
};

export default Service;
