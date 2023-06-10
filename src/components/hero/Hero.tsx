import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import './Hero.scss'
export const Hero = () => {
  return (
    
        <Row>
          <Col xs={3} className="here">
            <div>
              <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Shop</Breadcrumb.Item>
              </Breadcrumb>
              <h1> Shop</h1>
            </div>
          
        
          </Col>

          <Col xs={9}>
            <img src="https://picsum.photos/1000/400"></img>
          </Col>
        </Row>
    
  );
};
