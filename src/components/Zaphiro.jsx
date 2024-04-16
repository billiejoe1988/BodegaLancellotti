import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './zafiro.css';

const Zaphiro = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <section className="zaphiro-section">
      <div className="black-square">
        <div className="content-container">
          <div className="logo-container">
            <img src="/zafiro.png" alt="Logo Zaphiro Eventos" className="logo" />
          </div>
          <div className="text-container">
            <p className="white-text py-3" style={{ fontSize: '16px', fontStyle: 'italic' }}>
              En Bodega Lancellotti, ofrecemos una oportunidad única para celebrar tus eventos empresariales y festividades, inmersos en el ambiente exclusivo de nuestra moderna bodega y acompañados de nuestros exquisitos vinos. Zafiro Eventos, nuestra empresa asociada, se encarga de la organización de estos eventos tanto de día como de noche, brindando una experiencia inolvidable en un entorno único y elegante.
            </p>
            <p className="white-text py-3" style={{ fontSize: '16px', fontStyle: 'italic' }}>
              Podes contactarnos para realizar reuniones corporativas hasta celebraciones especiales, nuestro equipo en Zafiro Eventos se encarga de cada detalle para asegurarse de que tu evento sea todo un éxito. No dudes en ponerte en contacto con nosotros para reservar tu próximo evento y crear momentos memorables en Bodega Lancellotti.
            </p>
          </div>
        </div>
      <div className="carousel-container">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/z1.jpg"
              alt="First slide"
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/z2.jpg"
              alt="Second slide"
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/z3.jpg"
              alt="Third slide"
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Zaphiro;
