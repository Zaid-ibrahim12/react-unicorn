import { Col, Row } from "react-bootstrap";
import { galleryMock } from "../../mock/galleryMock";
import "./gallery-section-styles.scss";
export const GallerySection = () => {
  return (
    <div id="gallery-section-styles">
      <Row className="g-3">
        {galleryMock.map((item, index) => (
          <Col xs={4} key={index}>
            <div
              className="gallery-card"
              style={{ backgroundImage: `url(${item})` }}
            >
              {index == 0 ? (
                <>
                  <p className="h2">Dresses</p>
                  <span className="description h4">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </span>
                  <img src="assets/svg/arrow-button.svg" />
                </>
              ) : null}
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};
