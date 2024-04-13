import React from 'react';
import './home.css';
import homeImage from '/home.jpg';
import Visitas from '../components/visitas'; 
import Nosotros from './../components/nosotros';
import Perspicaz from '../components/perspicaz';
import Bodega from '../components/Bodega';
import Zaphiro from '../components/Zaphiro'
import Imagenes from '../components/Imagenes'

const Home = () => {
  return (
    <>
      <main>
        <section className="banner"> 
          <img src={homeImage} alt="Banner principal" className="banner-image" /> 
        </section>
        <section id="familia"> <Nosotros /> </section>
        <section id="perspicazz"> <Perspicaz /> </section>
        <section id="bodega"> <Bodega /> </section>
        <section id="visitas"> <Visitas /> </section>
        <section id="zaphiro-eventos"><Zaphiro /></section>
        <section id="imagenes"> <Imagenes /> </section>
      </main>
    </>
  );
}

export default Home;
