import { Col, Row } from "react-bootstrap";
import "./product-styles.scss";
import { productType } from "../../types/product-type";

type productPropsType = {
  item: productType;
  isLike: Boolean;
  isCategory: Boolean;
  isDesc: Boolean;
};
export const Product = (props: productPropsType) => {
  const { item, isLike, isCategory, isDesc = true } = props;
  return (
    <div id="product-styles">
      <div
        className="product-img"
        style={{ backgroundImage: `url(${item.image})` }}
      >
        {isLike && (
          <div className="container-icon">
            <img src="assets/svg/heart.svg" />
          </div>
        )}
      </div>

      <br />
      {isCategory && (
        <Row>
          <Col className="d-flex justify-content-center align-items-center">
            <div className="h5 category">{item.category}</div>
          </Col>
        </Row>
      )}

      <Row>
        <Col className="d-flex justify-content-center align-items-center ">
          <div className="h3 title ellipsis">{item.title}</div>
        </Col>
      </Row>
      {isDesc && (
        <Row>
          <Col className="d-flex justify-content-center align-items-center ">
            <div className="h6 title ellipsis">{item.description}</div>
          </Col>
        </Row>
      )}
      <Row>
        <Col className="d-flex justify-content-center align-items-center ">
          <div className="h3 price">${item.price}</div>
        </Col>
      </Row>
    </div>
  );
};
