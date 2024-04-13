import React from 'react';

const Perspicaz = () => {
  return (
    <section className="container">
      <div className="row">
        <section className="col-lg-6">
          <div className="card">
            <img src="ruta_de_la_imagen1.png" className="card-img-top" alt="Vino 1" />
            <div className="card-body">
              <h5 className="card-title">Título del Vino 1</h5>
              <p className="card-text">Texto descriptivo del Vino 1.</p>
            </div>
          </div>
        </section>
        <div className="col-lg-6">
          <div className="card">
            <img src="ruta_de_la_imagen2.png" className="card-img-top" alt="Vino 2" />
            <div className="card-body">
              <h5 className="card-title">Título del Vino 2</h5>
              <p className="card-text">Texto descriptivo del Vino 2.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Perspicaz;
