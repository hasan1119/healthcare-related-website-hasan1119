import React from "react";
import Footer from "../components/Footer.js";
import useAuth from "../hooks/useAuth.js";
import NormalHeader from "./../components/NormalHeader.js";
import "./../assets/css/doctors.css";
import { Container, Row } from "react-bootstrap";
import Doctor from "../components/Doctor.js";
import Zoom from "react-reveal/Zoom";
import Bg from "./../assets/images/loginandsignupbg.png";

const Doctors = () => {
  const { doctors } = useAuth();
  return (
    <>
      <NormalHeader />

      <div style={{ background: `url(${Bg})` }}>
        <Container>
          <div className="mt-5 pt-5 doctor">
            <Zoom left cascade>
              <h1 className="text-center text-white doctor-title">
                Our Qualified Doctors
              </h1>
            </Zoom>
            <Zoom right cascade>
              <p className="text-center doctor-desc">
                Separated they live in. A small river named Duden flows by their
                place and supplies it with the necessary regelialia. It is a
                paradisematic country
              </p>
            </Zoom>
          </div>
          <div className="py-5 text-center">
            <Row>
              {doctors?.map((doctor) => (
                <Doctor doctor={doctor} key={doctor.key} />
              ))}
            </Row>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Doctors;
