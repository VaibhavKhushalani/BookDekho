import React, { useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { PostContact } from "../Axios/apis";
const Signup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    email: "",
    name: "",
    message: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (input.email && input.name && input.message) {
      setLoading(true);
      try {
        let formdata = {
          name: input.name,
          message: input.message,
          email: input.email,
        };
        await PostContact(formdata);
        alert("Message sent");
        navigate("/home");
      } catch (error) {
        const { response } = error;
        alert(response?.data);
        setLoading(false);
      }
    } else {
      alert("input fields cannot be empty");
      setLoading(false);
    }
  };
  return (
    <div className="signin-main">
      <Form>
        <h1>Contact US</h1>
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
          value={input.message}
          onChange={(e) => setInput({ ...input, message: e.target.value })}
        >
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter your message"
          />
        </Form.Group>
        <span>
          <Button
            variant="success"
            type="button"
            disabled={loading ? true : false}
            className="w-100"
            onClick={handleSubmit}
          >
            {loading ? <Spinner animation="border" /> : "Send Message"}
          </Button>
        </span>
      </Form>
    </div>
  );
};

export default Signup;
