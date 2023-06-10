import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Col, Container, Row } from "react-bootstrap";
import "./Carousel.scss";
export const CarouselSectionHome = () => {
  return (
    <Container className="pb-5">
      <Carousel>
        <Carousel.Item>
          <div className="">
            <Row className="justify-content-center my-5">
              <Col lg={8} className="b">
                {/* <Row className="justify-content-center ">
                  <Col lg={2} style={{position:"relative"}}>
                    <div className="avatar-small">
                    <img
                      className="avatar-img rounded-circle"
                      src="https://picsum.photos/200/300"
                      alt="First slide"
                    />
                    </div>
                  </Col>
                </Row> */}
                <Row className="justify-content-center py-5">
                  <Col lg={6} className="text-center b">
                    <p>
                      Tanahair is the friendliest and most efficient company I
                      have ever used. The whole thing takes time to introduce
                      the product and as a result puts forward only the best
                      opportunities that really suit you. they help from start
                      to finish to create a great product identity for your
                      company
                    </p>
                  </Col>
                </Row>
                <Row className="justify-content-center">
                  <Col className="text-center" lg={6}>
                    <h1>
                      {" "}
                      <p>Shalima Hayden</p>
                    </h1>
                    <p>Product Designer</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          {/* <img
            className="d-block w-100"
            src="https://picsum.photos/200/300"
            alt="First slide"
          /> */}
        </Carousel.Item>
        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item> */}
        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </Container>
  );
};
