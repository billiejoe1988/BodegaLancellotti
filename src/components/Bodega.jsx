import React from 'react';
import './bodega.css';
import imagen3 from '/bodega3.jpg';
import imagen4 from '/bodega4.jpg';

const Bodega = () => {
  return (
    <div className="container">
      <section className="text-container seccion-con-fondo">
        <h2>Bodega Lancellotti</h2>
        <p>
          La historia de Bodega Lancellotti inicia en la línea del tiempo de vides y parrales en el año 2005, cuando Rodolfo y María Urbana eligieron hacer realidad el sueño de una 
          copa de vino, un sueño que germinó en el seno de una familia, unida por los aromas del amor y del esfuerzo.
          José Rodolfo Lancellotti, descendiente de italianos, se caracterizó por su espíritu inquieto y creativo, su conducta ordenada, su mente arriesgada y emprendedora. 
          Desde muy joven decidió dejar de estudiar para comenzar a trabajar y así mejorar su estilo de vida. Transitó por diferentes actividades y comercios. Se enamora y se casa 
          con María Urbana Quiroga, con quien forma una hermosa familia integrada por tres hijos: Rodolfo, Claudio y Lorena. Durante muchos años emprendieron diferentes actividades 
          hasta concretar el sueño de tener sus primeras hectáreas de vides. Por el esfuerzo realizado de toda la familia se logra en el año 2012 dar inicio a la construcción de la 
          bodega. En el año 2019-2020 se concluye la primera etapa del establecimiento, denominado “Bodega Lancellotti” y se realiza la primera vendimia en la que participa toda la 
          familia.
        </p>
      </section>
      <section className="img-container py-10">
        <img src={imagen3} alt="Imagen 3" className="bodega-img" />
        <img src={imagen4} alt="Imagen 4" className="bodega-img" />
      </section>
      <section className="text-container seccion-con-fondo-1">
        <h2>proceso de fabricación del vino</h2>
        <p>
          En la finca se utiliza el sistema de conducción de espaldero alto de 1,80 metros y parral. Puede verse cómo los granos de uva, protegidos por el sol, 
          cuelgan de ese techo verde como campanas. El riego se realiza a través de un sistema denominado “a manto”; el agua, que proviene del deshielo de la 
          Cordillera de Los Andes, corre por diferentes acequias o hijuelas. Las personas que allí viven, los cosechadores, son quienes con sus manos laboriosas cuidan 
          día a día que esta red de vides sea una de las mejores vistas para el turista, quien puede admirar el esfuerzo mientras realiza el recorrido por la finca. 
          Además, la bodega está equipada con tanques de acero inoxidable y tecnología de última generación con la finalidad de elaborar vinos de alta calidad que conquisten 
          el paladar de consumidores exigentes y de aquellos que pretenden incursionar en el camino del vino.
        </p>
      </section>
      <section className="img-container">

      </section>
    </div>
  );
}

export default Bodega;
