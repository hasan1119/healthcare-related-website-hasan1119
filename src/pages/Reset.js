import React from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import useAuth from "../hooks/useAuth.js";
import Bg from "./../assets/images/loginandsignupbg.png";

const Reset = () => {
  const { allAuthInfo } = useAuth();
  const { getEmail,email, setError, passwordReset, error } = allAuthInfo;
  const history = useHistory();
  return (
    <div
      className="w-100 vh-100 text-white"
      style={{ background: `url(${Bg})` }}
    >
      <div className="text-center form-container mx-auto pt-5">
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            passwordReset()
              .then(() => {
                history.push("./login");
                alert(`password reset email has been sent to ${email}`);
              })
              .catch((err) => {
                setError(err.message);
              });
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Email address </Form.Label>
            <p className="text-danger">{error}</p>
            <Form.Control
              onBlur={getEmail}
              type="email"
              placeholder="Enter your email"
            />
          </Form.Group>

          <Button className="py-2 px-4" variant="primary" type="submit">
            SEND
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Reset;
