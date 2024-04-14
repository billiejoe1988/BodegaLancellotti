import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';
import Logo from '/logoB.png'; 
import './navbar.css'

export const NavBar = () => {
    return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
      <Navbar.Brand href="/" style={{ marginTop: '-1.5rem' }}>
        <Image src={Logo} alt="Logo" width="100" height="100" style={{ boxShadow: 'none' }} />
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#familia">Familia</Nav.Link>
            <Nav.Link href="#perspicazz">Perspicaz</Nav.Link>
            <Nav.Link href="#bodega">Bodega</Nav.Link>
            <Nav.Link href="#visitas">Visitas</Nav.Link>
            <Nav.Link href="#zafiro-eventos">Zafiro Eventos</Nav.Link>
            <Nav.Link href="#imagenes">Imagenes</Nav.Link>
            <Nav.Link href="#footer">Contacto</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://google.com" target="_blank" rel="noopener noreferrer">La Cautiva</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
