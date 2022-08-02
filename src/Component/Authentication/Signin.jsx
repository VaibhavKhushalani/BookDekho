import React, { useState, useEffect } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FetchSignin } from "../Axios/apis";
import Cookies from "js-cookie";
import "../../styles/auth.css";
const Signin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (input.email && input.password) {
      setLoading(true);
      try {
        const { data } = await FetchSignin(input);
        Cookies.set("BooksDekho", data);
        navigate("/home");
        window.location.reload();
      } catch (error) {
        const { response } = error;
        alert(response?.data);
        setLoading(false);
      }
    } else {
      alert("input cannot be empty");
      setLoading(false);
    }
  };
  useEffect(() => {
    if (Cookies.get("BooksDekho")) {
      navigate("/home");
    }
  }, []);

  return (
    <div className="signin-main">
      <Form>
        <h1>Sign In</h1>
        <p>It's not long before you embark on this journey! </p>
        <Form.Group
          className="mb-3"
          value={input.email}
          onChange={(e) => setInput({ ...input, email: e.target.value })}
          controlId="formBasicEmail"
        >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={input.password}
            onChange={(e) => setInput({ ...input, password: e.target.value })}
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Keep me sign in" />
        </Form.Group>
        <span>
          <Button
            variant="success"
            type="button"
            disabled={loading ? true : false}
            className="w-100"
            onClick={handleSubmit}
          >
            {loading ? <Spinner animation="border" /> : "Sign in"}
          </Button>
        </span>
      </Form>
    </div>
  );
};

export default Signin;
