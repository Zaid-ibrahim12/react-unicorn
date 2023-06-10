import { Row, Col, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export const Footer = () => {
  return (
    <div id="footer">
      <Container>
        <Row>
          <Navbar.Brand href="#home">
            <img
              src="assets/svg/logo-footer.svg"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Row>
        <br/>
        <Row>
          <Col lg={5}>
            OurStudio is a digital agency UI / UX Design and Website Development
            located in Ohio, United States of America
          </Col>
          <Col lg={1} />
          <Col lg={3}>
            <Navbar.Text >Our Social Media</Navbar.Text>
            <Nav.Link >Facebook</Nav.Link>
            <Nav.Link>Twitter</Nav.Link>
            <Nav.Link>Instagram</Nav.Link>
            <Nav.Link>Youtube</Nav.Link>
          </Col>
          <Col lg={3}>
            <Navbar.Text>Contact</Navbar.Text>
            <Navbar>
              
            <Nav.Link >  <img
                  src="assets/svg/point.svg"
                  height="20px"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                /> 8819 Ohio St. South Gate, California 90280
           
        
            </Nav.Link>
            </Navbar>
            <Navbar>
            <Nav.Link > <img
                  src="assets/svg/email.svg"
                  height="18px"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />  ourstudio@hello.com
              </Nav.Link>
              </Navbar>
              <Navbar>
            <Nav.Link > <img
                  src="assets/svg/phone.svg"
                  height="18px"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                /> +271 386-647-3637</Nav.Link>
                </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
