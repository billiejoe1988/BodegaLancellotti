import React from 'react';
import './perspicaz.css';

const Perspicaz = () => {
  return (
    <section className="container perspicaz-container">
      <div className="logoPerspicaz py-5">
          <img src="/Perspicaz.png" className="log-img" alt="Vino 1" />
      </div>
      <div>
        <p>Perspicaz Bonarda 2024, nuestro nuevo lanzamiento,  es una cosecha manual con uvas provenientes de nuestros viñedos, a partir de la segunda semana de marzo. 
          Obtenemos una concentración de azúcar de 23 Brix y extraemos suavemente, después de iniciar el proceso de fermentación en tanques de acero inoxidable a temperatura controlada.
        </p>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="card perspicaz-card">
            <div className="row g-0">
              <div className="col-md-5">
                <img src="/p1.png" className="card-img" alt="Vino 1" />
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <h5 className="card-title notas-degustacion">Perspicaz - Bonarda 2024</h5>
                  <p className="card-text py-2">Vino joven, fresco y frutado que invita a seguir bebiendo.<br />
                    Alcohol 13% v/v | Acidez 6,5 gr/l<br />
                    Viñedo propio | Alto Verde San Martín, Mendoza<br />
                    Suelo franco-arenoso rico con minerales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card perspicaz-card">
            <div className="row g-0">
              <div className="col-md-5">
                <img src="/p2.png" className="card-img" alt="Vino 2" />
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <h5 className="card-title notas-degustacion">Notas de Degustacion</h5>
                  <p className="card-text py-2">
                    Color rojo intenso con matices violáceos<br />
                    Aromas frutales, se destacan frutos rojos y ciruelas negras<br />
                    Equilibrado con presencia de taninos dulces y baja acidez.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h4 className="dedication">"Dedicado a nuestro padre Don Rodolfo José Lancellotti, un hombre capaz de percatarse de cosas que pasan inadvertidas para los demás. ¡Salud!"</h4>
    </section>
  );
}

export default Perspicaz;
