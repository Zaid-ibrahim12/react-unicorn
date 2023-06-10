import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { endroutes } from "../../../../constant/endroutes";

export const WelcomeSection = () => {
  const navigate = useNavigate();

  const handleNavigate = () => navigate(endroutes.shop);
  return (
    <>
      <div id="home-page-styles">
        <Row>
          <Col xs={8} className="left-side">
            <div>
              <p> Sort out Your</p>
              <h1> Spring Look</h1>
            </div>
            <div>
              We will help to develop every smallest thing into a big one for
              your company.
            </div>
            <div className="button" role="button" onClick={handleNavigate}>
              <span>Shop</span>
              <img src="assets/svg/arrow.svg" />
            </div>
          </Col>

          <Col xs={4} className="d-flex right-side ">
            <img src="https://picsum.photos/400/500"></img>
            <img src="https://picsum.photos/401/500"></img>
          </Col>
        </Row>
      </div>
    </>
  );
};
