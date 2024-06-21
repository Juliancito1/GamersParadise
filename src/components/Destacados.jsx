import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const Destacados = () => {
  return (
    <Row>
        <div className="d-flex horizontal-scroll destacados my-5">
      <Col className="mb-md-4" md={9} lg={4}>
        <Card className="cardDestacado p-2">
            <Card.Header>
            <Card.Img src="../src/img/Carousel2.jpg"></Card.Img>
            </Card.Header>
            <Card.Body>
                <Card.Text>Apex Legends</Card.Text>
            </Card.Body>
        </Card>
      </Col>
      <Col md={9} lg={4}>
        <Card className="cardDestacado p-2 mx-4 mx-md-0">
            <Card.Header>
            <Card.Img  src="../src/img/Carousel2.jpg"></Card.Img>
            </Card.Header>
            <Card.Body>
        <Card.Text>Apex Legends</Card.Text>
            </Card.Body>
        </Card>
      </Col>
      <Col md={9} lg={4}>
        <Card className="cardDestacado p-2 me-4 me-md-0">
            <Card.Header>
            <Card.Img  src="../src/img/Carousel2.jpg"></Card.Img>
            </Card.Header>
            <Card.Body>
        <Card.Text>Apex Legends</Card.Text>
            </Card.Body>
        </Card>
      </Col>
      <Col md={9} lg={4}>
        <Card className="cardDestacado p-2">
            <Card.Header>
            <Card.Img  src="../src/img/Carousel2.jpg"></Card.Img>
            </Card.Header>
            <Card.Body>
        <Card.Text>Apex Legends</Card.Text>
            </Card.Body>
        </Card>
      </Col>
      
        </div>
    </Row>
  );
};

export default Destacados;
