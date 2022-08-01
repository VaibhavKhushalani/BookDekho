import React from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate();
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#" onClick={() => navigate("/")}>
          {" "}
         BooksDekho.com
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}
          </Nav>

          {window.location.pathname === "/" && (
            <Button
              className="d-flex"
              variant="success"
              onClick={() => navigate("/signup")}
            >
              Create New Account
            </Button>
          )}
           {window.location.pathname === "/signup" && (
            <Button
              className="d-flex"
              variant="success"
              onClick={() => navigate("/")}
            >
              Sign-in
            </Button>
          )}
            {window.location.pathname === "/home" && (
            <Button
              className="d-flex"
              variant="success"
              onClick={() => navigate("/contact")}
            >
             Contact Us
            </Button>
          )}
           {window.location.pathname === "/contact" && (
            <Button
              className="d-flex "
              variant="success"
              onClick={() => navigate("/home")}
            >
             Home
            </Button>
          )}
           {window.location.pathname !== "/" && (
            <Button
              className="d-flex mx-5"
              variant="danger"
              onClick={() => navigate("/")}
            >
              Logout
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
