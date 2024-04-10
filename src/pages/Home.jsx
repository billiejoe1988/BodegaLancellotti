import React from 'react';
import './home.css';
import homeImage from '/home.jpg';
import Visitas from '../components/visitas'; 
import Nosotros from './../components/nosotros';

const Home = () => {
  return (
    <>
      <main className="">
        <section className="banner"> 
          <img src={homeImage} alt="Banner principal" className="banner-image" /> 
        </section>
        <section id="perspicaz">Contenido de la sección Perspicaz</section>
        <section id="familia"><Nosotros /></section>
        <section id="visitas"><Visitas /></section>
        <section id="la-cautiva">Contenido de la sección La Cautiva</section>
        <section id="zaphiro-eventos">Contenido de la sección Zaphiro Eventos</section>
        <section id="contacto">Contenido de la sección Contacto</section>
      </main>
    </>
  );
}

export default Home;
