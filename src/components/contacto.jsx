import { useState } from "react";
import React from "react";

const Contacto = () => {
    return (
        <main>
            <section>
                <h2>Informacion de Contacto</h2>
                <div className="contact-item">
                    <p>
                        <span>
                            <i className="fa fa-map-marker"></i> Direccion
                        </span>
                        {props.data ? props.data.direccion : "loading"}
                    </p>
                </div>
                <div className="contact-item">
                    <p>
                        <span>
                            <i className="fa fa-phone"></i> Telefono
                        </span>{" "}
                        {props.data ? props.data.telefono : "loading"}
                    </p>
                </div>
                <div className="contact-item">
                    <p>
                        <span>
                            <i className="fa fa-envelope-o"></i> Email
                        </span>{" "}
                        {props.data ? props.data.email : "loading"}
                    </p>
                </div>
                <div className="col-md-12">
                    <div className="row">
                        <div className="social">
                            <ul>
                                <li>
                                    <a href={props.data ? props.data.facebook : "/"}>
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href={props.data ? props.data.instagram : "/"}>
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contacto;