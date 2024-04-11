import React from "react"
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';

const visitas = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <>
            <div className="container">
                <section className="nosotros">
                    <div className="nosotros-content">
                        <h2>Visitas</h2>
                        <p>
                            Bodega Lancellotti es una empresa familiar apasionada por el vino. Por ello queremos compartir con nuestros clientes la experiencia de conocer y degustar los mejores vinos de la región y ademas de poder recorrer nuestros viñedos.

                        </p>
                    </div>
                    <div className="carousel-container">
                        <Carousel activeIndex={index} onSelect={handleSelect}>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/uva.png"
                                    alt="First slide"
                                    style={{ maxHeight: '400px', objectFit: 'cover' }}
                                />
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/img/visita1.jpg"
                                    alt="Second slide"
                                    style={{ maxHeight: '400px', objectFit: 'cover' }}
                                />
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/img/visita2.jpg"
                                    alt="Third slide"
                                    style={{ maxHeight: '400px', objectFit: 'cover' }}
                                />
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </section>
            </div>
            <div className="container">
                <section>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Visitas a la Bodega</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Visitas al Viñedo</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. 
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </section >
            </div>
        </>
    )
};


export default visitas