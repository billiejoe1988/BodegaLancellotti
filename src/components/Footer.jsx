import React from "react";
import fondoFooter from "/footer.png";
import logo from "/logoP.png";
import './footer.css'

const Footer = () => {
    return (
        <footer style={{ backgroundImage: `url(${fondoFooter})`, backgroundSize: 'cover' }}>
            <div className="footer-container">
                <div className="logo-container">
                    <img src={logo} alt="Logo de la empresa" style={{ width: '200px', marginBottom: '10px' }} />
                </div>
                <div className="contact-container">
                    <div className="contact-item">
                        <p>
                            <span>
                                <i className="fa fa-map-marker"></i> Dirección
                            </span>
                            Cuitiño 991 esquina, RN7, M5570 San Martín, Mendoza
                        </p>
                    </div>
                    <div className="contact-item">
                        <p>
                            <span>
                                <i className="fa fa-whatsapp"></i> WhatsApp
                            </span>{" "}
                            <a href="https://wa.me/+542634419048">+54 2634419048</a>
                        </p>
                    </div>
                    <div className="contact-item">
                        <p>
                            <span>
                                <i className="fa fa-envelope-o"></i> Email
                            </span>{" "}
                            <a href="mailto:bodega@zafiro.com">bodega@zafiro.com</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="map-container">
                <h2>Ubicación</h2>
                <iframe
                    title="Bodega lancellotti"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15981.207401122138!2d-68.3310119765147!3d-32.68618404498298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967b0d68b2a132cf%3A0x68db9517b659d037!2sMendoza%2C%20Capital%2C%20Mendoza!5e0!3m2!1sen!2sar!4v1648971118507!5m2!1sen!2sar"
                    width="100%"
                    height="200"
                    style={{ border: 0, borderRadius: '5px' }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
            <div className="copyright">
                <p>&copy; 2024 Bodega Lancellotti. Todos los derechos reservados. Beber con moderación y prohibida su venta a menores de 18 años.</p>
            </div>
        </footer>
    );
};

export default Footer;

