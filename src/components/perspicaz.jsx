import React from 'react';
import './perspicaz.css'; 

const Perspicaz = () => {
  return (
    <section className="container perspicaz-container">
      <h2 className="section-title">Vinos</h2>
      <div className="row">
        <div className="col-lg-6">
          <div className="card perspicaz-card">
            <img src="/p1.png" className="card-img-top" alt="Vino 1" />
            <div className="card-body">
              <h5 className="card-title">Perspicaz - Bonarda 2024</h5>
              <p className="card-text">Vino joven, fresco y frutado que invita a seguir bebiendo.
                                       Alcohol 13% v/v | Acidez 6,5 gr/l
                                       Viñedo propio | Alto Verde San Martín, Mendoza
                                       Suelo franco-arenoso rico con minerales
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card perspicaz-card">
            <img src="/p2.png" className="card-img-top" alt="Vino 2" />
            <div className="card-body">
              <h5 className="card-title">Perspicaz - Bonarda 2024</h5>
              <p className="card-text">Notas de Degustación:
                                     Color rojo intenso con matices violáceos | Aromas frutales, se destacan frutos rojos y ciruelas negras
                                     Equilibrado con presencia de taninos dulces y baja acidez.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h4 className="dedication">Dedicado a nuestro padre Don Rodolfo José Lancellotti, un hombre capaz de percatarse de cosas que pasan inadvertidas para los demás. ¡Salud!</h4>
    </section>
  );
}

export default Perspicaz;

