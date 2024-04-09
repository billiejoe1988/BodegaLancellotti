import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';
import Logo from '/logoP.png';

export const NavBar = () => {
    return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <Image src={Logo} alt="Logo" width="100" height="50" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Bodega</Nav.Link>
            <Nav.Link href="#link">Perspicaz</Nav.Link>
            <Nav.Link href="#link">Familia</Nav.Link>
            <Nav.Link href="#link">Visitas</Nav.Link>
            <Nav.Link href="#link">La Cautiva</Nav.Link>
            <Nav.Link href="#link">Zaphiro Eventos</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;