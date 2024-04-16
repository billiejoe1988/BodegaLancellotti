import React from "react";
import { Accordion, Card, Button } from 'react-bootstrap';
import './visitas.css';

const Visitas = () => {
    return (
        <>
            <section className="visitas-section">
                <div className="container nosotros-content nosotros">
                    <div className="nosotros-content">
                        <div className="nosotros">
                            <h2>Visitas</h2>
                            <p>
                                Bodega Lancellotti es una empresa familiar apasionada por el vino. Por ello queremos compartir con nuestros clientes la experiencia de conocernos y degustar los mejores vinos de la región.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <section className="accordion-section">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Visitas a la Bodega</Accordion.Header>
                                <Accordion.Body>
                                    <div className="accordion-content">
                                        <div className="accordion-image">
                                            <Card variant="primary">
                                                <img src="/salud.jpg" alt="hospedaje" className="img-fluid" />
                                            </Card>
                                        </div>
                                        <div className="accordion-text">
                                            <p>
                                                Bodega Lancellotti ofrece una experiencia única para los visitantes. Un espacio donde se puede disfrutar de la naturaleza, de la gastronomía y de la cultura. Podrás hacer una visita guiada por el viñedo, los procesos de elaboración de los vinos y degustar los mismos junto a comidas que maridan perfectamente con las diferentes cepas de vino.
                                            </p>
                                            <Button>
                                                <a href="#footer">Contacto</a>
                                            </Button>
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Hospedaje La Cautiva</Accordion.Header>
                                <Accordion.Body>
                                    <div className="accordion-content">
                                        <div className="accordion-image">
                                            <Card variant="primary">
                                                <img src="/cautiva.jpg" alt="hospedaje" className="img-fluid" />
                                            </Card>
                                        </div>
                                        <div className="accordion-text">
                                            <p>
                                                “La Cautiva” es otro de los espacios de este emprendimiento familiar. Un hospedaje diseñado para el descanso y el disfrute del turismo que nos visita. Su nombre tiene la fuerza de la montaña, del sol, del aire del este mendocino. Su arquitectura protege lo tradicional, como la galería custodiada por verdes enredaderas en ciertas estaciones del año.
                                            </p>
                                            <Button>
                                                <a href="https://www.example.com" target="_blank">La Cautiva</a>
                                            </Button>
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </section >
                </div>
            </section>
        </>
    );
};

export default Visitas;
