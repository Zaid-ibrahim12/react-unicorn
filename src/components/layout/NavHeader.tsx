import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { endroutes } from '../../constant/endroutes';

export const NavHeader = () => {
  return (
    <Navbar collapseOnSelect expand="lg" >
    <Container>
      <Navbar.Brand href={endroutes.home}>Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href={endroutes.shop}>Shop</Nav.Link>
        
        </Nav>
        <Nav>
        <Navbar.Brand href="#home">
                <img
                  src="assets/img/love.png"
                  height="24"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
                </Navbar.Brand>

                <Navbar.Brand href="#home">
                <img
                  src="assets/svg/user.svg"
                  height="24"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
              <Navbar.Brand href="#home">
                <img
                  src="assets/img/cart.png"
                  height="24"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand> 
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
