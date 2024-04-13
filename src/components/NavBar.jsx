import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
            <NavDropdown title="Home" id="basic-nav-dropdown">
              <NavDropdown.Item href="#familia">Familia</NavDropdown.Item>
              <NavDropdown.Item href="#perspicazz">Perspicaz</NavDropdown.Item>
              <NavDropdown.Item href="#visitas">Visitas</NavDropdown.Item>
              <NavDropdown.Item href="#zaphiro-eventos">Zaphiro Eventos</NavDropdown.Item>
              <NavDropdown.Item href="#footer">Contacto</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/bodega" className="nav-link pr-5">Bodega</Nav.Link>
            <Nav.Link href="https://google.com" target="_blank" rel="noopener noreferrer">La Cautiva</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

