import React from 'react';
import './home.css';
import homeImage from '/home.jpg';
import Visitas from '../components/visitas'; 
import Nosotros from './../components/nosotros';
import Perspicaz from '../components/perspicaz';

const Home = () => {
  return (
    <>
      <main className="">
        <section className="banner"> 
          <img src={homeImage} alt="Banner principal" className="banner-image" /> 
        </section>
        <section id="familia"> <Nosotros /> </section>
        <section id="perspicaz"> <Perspicaz /> </section>
        <section id="visitas"> <Visitas /> </section>
        <section id="zaphiro-eventos">Contenido de la sección Zaphiro Eventos</section>
      </main>
    </>
  );
}

export default Home;
