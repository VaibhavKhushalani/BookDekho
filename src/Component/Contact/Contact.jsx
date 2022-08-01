import React,{useState,useEffect} from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {PostContact} from "../Axios/apis"
const Signup = () => {
    const navigate =useNavigate();
    const [input,setInput] = useState({
      email:"",name:"",message:"",
    });
    const handleSubmit = async (event) => {
      event.preventDefault();
      if (input.email &&input.name&&input.message) {
        try {
          let formdata={name:input.name,message:input.message,email:input.email}
          const { data } = await PostContact(formdata);
         console.log(data)
         alert("Message sent")
         navigate('/home')
         
        } catch (error) {
          const { response } = error;
          console.log(response?.data);
          alert(response?.data);
        }
      } else{
        alert("error in fields")
      }
    };
  return (
    <div className="signin-main">
      <Form>
        <h1>Contact US</h1>
        <Form.Group className="mb-3" value={input.name} onChange={(e)=>setInput({...input,name:e.target.value})}>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3" value={input.email} onChange={(e)=>setInput({...input,email:e.target.value})}>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3"value={input.message} onChange={(e)=>setInput({...input,message:e.target.value})}>
          <Form.Label>Message</Form.Label>
          <Form.Control type="text" placeholder="Password" />
          
        </Form.Group>
        <span className="d-flex justify-content-center">
        <Button variant="success" type="button" onClick={handleSubmit} >
          Submit
          </Button>
        </span>
      </Form>
    </div>
  );
};

export default Signup;
