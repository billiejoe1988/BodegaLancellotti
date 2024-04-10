import React from 'react';
import './home.css';
import homeImage from '/home.svg';
import Visitas from '../components/visitas'; 

const Home = () => {
  return (
    <>
      <section className="banner"> 
        <img src={homeImage} alt="Banner principal" /> 
      </section>
      <section id="perspicaz">Contenido de la sección Perspicaz</section>
      <section id="familia">Contenido de la sección Familia</section>
      <section id="visitas"><Visitas /></section>
      <section id="la-cautiva">Contenido de la sección La Cautiva</section>
      <section id="zaphiro-eventos">Contenido de la sección Zaphiro Eventos</section>
      <section id="contacto">Contenido de la sección Contacto</section>
    </>
  );
}

export default Home;
