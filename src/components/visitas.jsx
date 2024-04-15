import React from "react";
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Accordion, Card, Button } from 'react-bootstrap';
import './visitas.css';

const Visitas = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <section style={{ backgroundColor: '#EADFCD', textAlign: 'center', margin: '20px auto', padding: '30px', borderRadius: '20px', maxWidth: '70%' }}>
                <div className="container nosotros-content nosotros ">
                    <div className="nosotros-content">
                        <div className="nosotros">
                            <h2>Visitas</h2>
                            <p style={{ paddingRight: '20px', paddingLeft: '20px', flexDirection: 'column' }}>
                                Bodega Lancellotti es una empresa familiar apasionada por el vino. Por ello queremos compartir con nuestros clientes la experiencia de conocernos y degustar los mejores vinos de la región.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="img-container py-10">
                    <div className="container">
                        <section className="nosotros">
                            <div className="nosotros-content">
                                <div className="carousel-container">
                                    <Carousel activeIndex={index} onSelect={handleSelect}>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src="/uva.png"
                                                alt="First slide"
                                                style={{ maxHeight: '300px', objectFit: 'cover' }}
                                            />
                                            <Carousel.Caption>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src="/img/visita.jpg"
                                                alt="Second slide"
                                                style={{ maxHeight: '300px', objectFit: 'cover' }}
                                            />
                                            <Carousel.Caption>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src="/img/visita3.jpg"
                                                alt="Third slide"
                                                style={{ maxHeight: '300px', objectFit: 'cover' }}
                                            />
                                            <Carousel.Caption>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="container">
                        <section style={{ color: '#31190D' }}  >
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header style={{ backgroundColor: '#D6B28D', color: '#31190D', fontFamily: 'Libre Baskerville', fontSize: '20px'}}>Visitas a la Bodega</Accordion.Header>
                                    <Accordion.Body style={{ color: '#31190D', fontFamily: 'Libre Baskerville', borderRadius: '20px' }}>
                                        <div className="accordion-content">
                                            <div className="accordion-image">
                                                <Card variant="primary">
                                                    <img src="/img/c3.jpg" alt="hospedaje" className="img-fluid" style={{ maxWidth: '500px', maxHeight: '150px', margin: 'auto', objectFit: 'cover', display: 'block', border: 'none' }} />
                                                </Card>
                                            </div>
                                            <div className="accordion-text">
                                            <p style={{ fontFamily: 'Libre Baskerville', fontSize: '12px', border: 'none' }}>Bodega Lancellotti ofrece una experiencia única para los visitantes. Un espacio donde se puede disfrutar de la naturaleza, de la gastronomía y de la cultura. Podrás hacer una visita guiada por el viñedo, los procesos de elaboración de los vinos y degustar los mismos junto a comidas que maridan perfectamente con las diferentes cepas de vino.</p>
                                                <Button style={{ backgroundColor: '#6E493A', color: '#F3E9DF', fontFamily: 'Libre Baskerville', fontSize: '14px', border: 'none' }}>
                                                    <a href="#footer" style={{ textDecoration: 'none', color: '#F3E9DF' }}>Contacto</a>
                                                </Button>
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header style={{ backgroundColor: '#D6B28D', color: '#31190D', fontFamily: 'Libre Baskerville', fontSize: '20px'}}>Hospedaje La Cautiva</Accordion.Header>
                                    <Accordion.Body style={{  color: '#31190D', fontFamily: 'Libre Baskerville', borderRadius: '20px' }}>
                                        <div className="accordion-content">
                                            <div className="accordion-image">
                                                <Card variant="primary">
                                                    <img src="/cautiva.jpg" alt="hospedaje" className="img-fluid" style={{ maxWidth: '500px', maxHeight: '150px', margin: 'auto', objectFit: 'cover',  display: 'block', border: 'none' }} />
                                                </Card>
                                            </div>
                                            <div className="accordion-text">
                                                <p style={{ fontFamily: 'Libre Baskerville', fontSize: '12px', border: 'none' }}>“La Cautiva” es otro de los espacios de este emprendimiento familiar. Un hospedaje diseñado para el descanso y el disfrute del turismo que nos visita. Su nombre tiene la fuerza de la montaña, del sol, del aire del este mendocino. Su arquitectura protege lo tradicional, como la galería custodiada por verdes enredaderas en ciertas estaciones del año.</p>
                                                <Button style={{ backgroundColor: '#6E493A', color: '#F3E9DF', fontFamily: 'Libre Baskerville', fontSize: '14px', border: 'none' }}>
                                                    <a href="https://www.example.com" target="_blank" style={{ textDecoration: 'none', color: '#F3E9DF' }}>La Cautiva</a>
                                                </Button>
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </section >
                    </div>
                </div>
            </section>
        </>
    )
};

export default Visitas;
