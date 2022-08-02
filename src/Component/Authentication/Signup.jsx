import React, { useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FetchSignup } from "../Axios/apis";
const Signup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    email: "",
    password: "",
    name: "",
    cpassword: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      input.email &&
      input.password &&
      input.name &&
      input.cpassword === input.password
    ) {
      setLoading(true);
      try {
        let formdata = {
          name: input.name,
          password: input.password,
          email: input.email,
        };
        await FetchSignup(formdata);
        alert("account created successfully");
        navigate("/");
      } catch (error) {
        const { response } = error;
        alert(response?.data);
        setLoading(false);
      }
    } else {
      alert("error in sign up fields");
      setLoading(false);
    }
  };
  return (
    <div className="signin-main">
      <Form>
        <h1>Sign Up</h1>
        <Form.Group
          className="mb-3"
          value={input.name}
          onChange={(e) => setInput({ ...input, name: e.target.value })}
        >
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group
          className="mb-3"
          value={input.email}
          onChange={(e) => setInput({ ...input, email: e.target.value })}
        >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group
          className="mb-3"
          value={input.password}
          onChange={(e) => setInput({ ...input, password: e.target.value })}
        >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group
          className="mb-3"
          value={input.cpassword}
          onChange={(e) => setInput({ ...input, cpassword: e.target.value })}
        >
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <span>
          <Button
            variant="success"
            type="button"
            disabled={loading ? true : false}
            className="w-100"
            onClick={handleSubmit}
          >
            {loading ? <Spinner animation="border" /> : "Sign Up"}
          </Button>
        </span>
      </Form>
    </div>
  );
};

export default Signup;
