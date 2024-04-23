import React from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Imagenes = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <section className='py-5 px-5'>
      <div >
        <h2>Imagenes</h2>
      </div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded img-fluid"
            src="/i0.jpg"
            alt="First slide"
            style={{ maxHeight: '500px', objectFit: 'cover' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded img-fluid"
            src="/i7.jpg"
            alt="Second slide"
            style={{ maxHeight: '500px', objectFit: 'cover' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded img-fluid"
            src="/i00.jpg"
            alt="Third slide"
            style={{ maxHeight: '500px', objectFit: 'cover' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded img-fluid"
            src="/i4.jpg"
            alt="Third slide"
            style={{ maxHeight: '500px', objectFit: 'cover' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded img-fluid"
            src="/i000.jpg"
            alt="Third slide"
            style={{ maxHeight: '500px', objectFit: 'cover' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded img-fluid"
            src="/i8.jpg"
            alt="Third slide"
            style={{ maxHeight: '500px', objectFit: 'cover' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded img-fluid"
            src="/im3.jpg"
            alt="Third slide"
            style={{ maxHeight: '500px', objectFit: 'cover' }}
          />
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Imagenes;
