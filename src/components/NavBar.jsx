import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';
import Logo from '/logo.png'; 
import './navbar.css'

export const NavBar = () => {
    return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
      <Navbar.Brand href="/" style={{ fontFamily: 'Libre Baskerville' }}>
        <Image src={Logo} alt="Logo" width="120" height="50" style={{ paddingLeft: '10px', boxShadow: 'none' }} />
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto" style={{ fontFamily: 'Libre Baskerville' }}>
            <Nav.Link href="#familia">Familia</Nav.Link>
            <Nav.Link href="#perspicazz">Perspicaz</Nav.Link>
            <Nav.Link href="#bodega">Bodega</Nav.Link>
            <Nav.Link href="#visitas">Visitas</Nav.Link>
            <Nav.Link href="#zafiro-eventos">Zafiro Eventos</Nav.Link>
            <Nav.Link href="#imagenes">Imágenes</Nav.Link>
            <Nav.Link href="#footer">Contacto</Nav.Link>
          </Nav>
          <Nav style={{ fontFamily: 'Libre Baskerville' }}>
            <Nav.Link href="https://www.lacautivaturismo.com/" target="_blank" rel="noopener noreferrer">La Cautiva</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
