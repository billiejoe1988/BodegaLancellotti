import React from "react";
import fondoFooter from "/footer.png";
import './footer.css'

const Footer = () => {
    return (
        <footer id="footer" className="footer-container" style={{ backgroundImage: `url(${fondoFooter})`, backgroundSize: 'cover' }}>
            <div className="tarjeta seccion-con-fondo-1" style={{ backgroundColor: '#EADFCD ', borderRadius: '10px', fontFamily: 'Libre Baskerville'}}>
                <div className="contacto pt-5" style={{ fontFamily: 'Libre Baskerville' }}>
                    <h1 style={{fontSize: '40px', fontWeight: 'bold'}}>Contacto</h1>
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
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254236.32652667025!2d-68.49739841359757!3d-33.15078949328633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e5b2ee09ddead%3A0x68c9346e7d305a97!2sBodega%20Lancellotti%20-%20Salon%20Zafiro!5e0!3m2!1ses!2sar!4v1713280206278!5m2!1ses!2sar"
                            width="100%"
                            height="335"
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


