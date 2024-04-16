import React from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Nosotros = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container">
      <section className="nosotros" style={{ paddingTop: '50px', paddingBottom: '50px'}}> 
        <div className="nosotros-content">
          <h4>Conocé</h4>
          <h2>Nuestra historia</h2>
          <p className='py-5 px-5'>
            Por el esfuerzo realizado de toda la familia se logra en el año 2012 dar inicio a la construcción de la bodega. En el año 2019-2020 se concluye la primera
            etapa del establecimiento, denominado “Bodega Lancellotti” y se realiza la primera vendimia en la que participa toda la familia.
          </p>
        </div>
        <div className="carousel-container">
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img
                className="d-block w-100 rounded"
                src="/img/c3.jpg"
                alt="First slide"
                style={{ maxHeight: '400px', objectFit: 'cover' }}
              />
              <Carousel.Caption>
                <h3>Visita Nuestra Bodega</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 rounded"
                src="/img/c2.jpg"
                alt="Second slide"
                style={{ maxHeight: '400px', objectFit: 'cover' }}
              />
              <Carousel.Caption>
                <h3>Disfruta de Día</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 rounded"
                src="/img/c1.jpg"
                alt="Third slide"
                style={{ maxHeight: '400px', objectFit: 'cover' }}
              />
              <Carousel.Caption>
                <h3>También de Noche</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
    </div>
  );
}

export default Nosotros;
