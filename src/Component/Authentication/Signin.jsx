import React from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../styles/auth.css";
const Signin = () => {
  const navigate =useNavigate();
  return (
    <div className="signin-main">
      <Form>
        <h1>Sign In</h1>
        <p>It's not long before you embark on this journey! </p>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Keep me sign in" />
        </Form.Group>
        <span className="d-flex justify-content-center">
          <Button variant="success"  onClick={()=>navigate("/home")} >
          Submit
          </Button>
        </span>
      </Form>
    </div>
  );
};

export default Signin;
