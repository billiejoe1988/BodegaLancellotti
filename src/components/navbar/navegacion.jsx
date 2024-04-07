import React from "react";
import ReactImg from './assets/bodega12.jpg'

export const Navegacion = (props) => {
    return (
        <nav id="menu" className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <button
                        type="button"
                        className="navbar-toggle collapsed"
                        data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1"
                    >
                        {" "}
                        <span className="sr-only"></span>{" "}
                        <span className="icon-bar"></span>{" "}
                        <span className="icon-bar"></span>{" "}
                        <span className="icon-bar"></span>{" "}
                    </button>
                    <a className="navbar-brand page-scroll" href="#page-top">
                        <img onClick={() => navigate("/")} src={ReactImg} alt="" />
                    </a>{" "}
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a href="#bodega" className="page-scroll">
                                Bodega
                            </a>
                        </li>
                        <li>
                            <a href="#nosotros" className="page-scroll">
                                Nosotros
                            </a>
                        </li>
                        <li>
                            <a href="#perspicaz" className="page-scroll">
                                Perspicaz
                            </a>
                        </li>
                        <li>
                            <a href="#visita" className="page-scroll">
                                Visitas
                            </a>
                        </li>
                        <li>
                            <a href="#zafiro" className="page-scroll">
                                Zafiro Eventos
                            </a>
                        </li>
                        <li>
                            <a href="#hospedaje" className="page-scroll">
                                La Cautiva
                            </a>
                        </li>
                        <li>
                            <a href="#contacto" className="page-scroll">
                                Contacto
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};