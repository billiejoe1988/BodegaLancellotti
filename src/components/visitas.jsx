import React from "react"
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Accordion, Card, Button } from 'react-bootstrap';
import './visitas.css'


const visitas = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <>
            <section style={{ backgroundColor: '#EADFCD', textAlign: 'center', margin: '20px 50px', paddingTop: '30px', paddingBottom: '30px' }}>
                <div className="container nosotros-content nosotros ">
                    <div className="nosotros-content">
                        <div className="nosotros">
                            <h2>Visitas</h2>
                            <p style={{ paddingRight: '200px', paddingLeft: '210px', flexDirection: 'column' }}>
                                Bodega Lancellotti es una empresa familiar apasionada por el vino. Por ello queremos compartir con nuestros clientes la experiencia de conocer y degustar los mejores vinos de la región y ademas de poder recorrer nuestros viñedos.

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
                                                style={{ maxHeight: '340px', maxWidth: '1000px', objectFit: 'contain' }}
                                            />
                                            <Carousel.Caption>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src="/img/visita.jpg"
                                                alt="Second slide"
                                                style={{ maxHeight: '340px', maxWidth: '1000px', objectFit: 'contain' }}
                                            />
                                            <Carousel.Caption>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src="/img/visita3.jpg"
                                                alt="Third slide"
                                                style={{ maxHeight: '340px', maxWidth: '1000px', objectFit: 'contain' }}
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
                        <section style={{ color: '#EADFCD' }}  >
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Visitas a la Bodega</Accordion.Header>
                                    <Accordion.Body>
                                        <Card variant="primary">
                                            <img src="/img/c3.jpg" alt="hospedaje" className="img-fluid" />
                                        </Card>
                                        Bodega Lancellotti ofrece una experiencia única para los visitantes. Un espacio donde se puede disfrutar de la naturaleza, de la gastronomía y de la cultura. Podras hacer una visita guiada por el viñedo, conocer la historia de la bodega, los procesos de elaboración de los vinos y degustar los mismos junto a comidas que maridan perfectamente con las diferentes cepas de vino.
                                        <Button>
                                            <a href="#footer">Contacto</a>
                                        </Button>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Hospedaje La Cautiva</Accordion.Header>
                                    <Accordion.Body>
                                        <Card variant="primary">
                                            <img src="/cautiva.jpg" alt="hospedaje" className="img-fluid" />
                                        </Card>
                                        “La Cautiva” es otro de los espacios de este emprendimiento familiar. Un hospedaje diseñado para el descanso y el disfrute del turismo que nos visita. Su nombre tiene la fuerza de la montaña, del sol, del aire del este mendocino. Su arquitectura protege lo tradicional, como la galería custodiada por verdes enredaderas en ciertas estaciones del año.
                                        <div>
                                        <Button>
                                      <a href="https://www.example.com" target="_blank">La Cautiva</a>
                                        </Button>
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


export default visitas