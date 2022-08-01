import React from "react";
import { Row, Container, Card } from "react-bootstrap";
import Slider from "./Slider";
import "../../styles/home.css";
import Books from "../../assests/books.json";
console.log(Books);

const Home = () => {
  return (
    <div className="home-main">
      <Container>
        <Row>
          <Slider />
        </Row>

        <div>
          <div className="d-flex justify-content-center">
            <h2 className="title">All Books </h2>
          </div>
          <div className="d-flex justify-content-lg-between justify-content-md-between justify-content-sm-center justify-content-center flex-wrap">
            {Books?.map((data, id) => {
              return (
                <Card key={id} className="card-main text-center my-4">
                  <Card.Img variant="top" src={data.img} alt="img" />
                  <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>{data.description}</Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
