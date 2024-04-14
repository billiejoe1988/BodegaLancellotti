import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Imagenes = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <section className='py-5 mt-5'>
          <div className='mt-5'>
            <h2>Imagenes</h2>
          </div>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/bodega1.jpg"
                alt="First slide"
                style={{ maxHeight: '400px', objectFit: 'cover' }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/bodega2.jpg"
                alt="Second slide"
                style={{ maxHeight: '400px', objectFit: 'cover' }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/img/c1.jpg"
                alt="Third slide"
                style={{ maxHeight: '400px', objectFit: 'cover' }}
              />
            </Carousel.Item>
          </Carousel>
    </section>
  )
}

export default Imagenes