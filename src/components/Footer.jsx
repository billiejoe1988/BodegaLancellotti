import React from "react";
import fondoFooter from "/footer.png";
import logo from "/logoP.png";
import './footer.css'

const Footer = () => {
    return (
        <footer id="footer" className="footer-container" style={{ backgroundImage: `url(${fondoFooter})`, backgroundSize: 'cover' }}>
            <div className="tarjeta seccion-con-fondo-1" style={{ backgroundColor: '#EADFCD ', borderRadius: '10px', fontFamily: 'Libre Baskerville'}}>
                <div className="contacto" style={{ fontFamily: 'Libre Baskerville' }}>
                    <h1>CONTACTO</h1>
                </div>
                <div className="footer-container">
                    <div className="contact-container card" style={{ backgroundColor: '#EADFCD' }} >
                        <div className="contact-item"  >
                            <p>
                                <span>
                                    <i className="fa fa-map-marker"></i> Dirección:
                                </span>
                                Cuitiño 991 esquina, RN7, M5570 San Martín, Mendoza
                            </p>
                        </div>
                        <div className="contact-item" style={{ backgroundColor: '#EADFCD' }} >
                            <p>
                                <span>
                                    <i className="fa fa-whatsapp"></i> WhatsApp:
                                </span>
                                <a href="https://wa.me/+542634419048">+54 2634419048</a>
                            </p>
                        </div>
                        <div className="contact-item" style={{ backgroundColor: '#EADFCD' }}>
                            <p>
                                <span>
                                    <i className="fa fa-envelope-o"></i> Email:
                                </span>
                                <a href="mailto:bodega@zafiro.com">bodega@zafiro.com</a>
                            </p>
                        </div>
                        <div className="copyright">
                            <p className="copyright">&copy; 2024 Bodega Lancellotti - Mendoza, Argentina. Todos los derechos reservados. Beber con moderación, prohibida su venta a menores de 18 años.</p>
                        </div>
                    </div>
                    <section className="map-containercard">
                        <h2 style={{ color: '#31190D' }}>Ubicación</h2>
                        <iframe
                            title="Bodega lancellotti"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22484.304922252453!2d-68.37531794509552!3d-33.100882474332025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e5aca74cc9151%3A0x89d3017090764f11!2sLa%20Cautiva%20-%20Turismo%20Rural!5e0!3m2!1ses!2sar!4v1713104683886!5m2!1ses!2sar"
                            width="100%"
                            height="300"
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </section>
                </div>

            </div>
        </footer>
    );
};

export default Footer;


