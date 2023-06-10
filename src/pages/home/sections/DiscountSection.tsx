import React from "react";
import "./Discount.scss";
import { Col, Container, Row } from "react-bootstrap";
export const DiscountSection = () => {
  return (
    <Container>
      <div className="section">
        <div className="ss"> March Discount </div>
        <div className="zz"> Up to 70% off </div>
        <button className="bb"> Get </button>
      </div>
    </Container>
  );
};
