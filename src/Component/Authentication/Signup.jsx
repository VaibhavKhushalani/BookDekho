import React from "react";
import { Form, Button } from "react-bootstrap";
import "../../styles/auth.css";
import { useNavigate } from "react-router-dom";
const Signup = () => {
    const navigate =useNavigate();
  return (
    <div className="signin-main">
      <Form>
        <h1>Sign Up</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
          
        </Form.Group>
        <span className="d-flex justify-content-center">
          <Button variant="success" onClick={()=>navigate("/")} type="submit">
            Submit
          </Button>
        </span>
      </Form>
    </div>
  );
};

export default Signup;
