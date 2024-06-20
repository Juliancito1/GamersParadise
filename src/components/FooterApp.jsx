import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../img/GamersParadiseLogo.jpg";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
const FooterApp = () => {
  return (
    <footer className="fondo p-3">
        <h2 className="text-center">Seguinos en nuestras redes</h2>
      <Container className="justify-content-center d-flex">
        <Link className="rounded-circle btn-social p-2"><FaFacebook className="rounded-circle fs-3"/></Link>
        <Link className="rounded-circle btn-social p-2 mx-lg-3"><FaXTwitter className="rounded-circle fs-3"/></Link>
        <Link className="rounded-circle btn-social p-2 me-lg-3"><FaInstagram className="rounded-circle fs-3"/></Link>
        <Link className="rounded-circle btn-social p-2"><FaFacebook className="rounded-circle fs-3"/></Link>
      </Container>
            <div className="text-center my-2">
            <img className="logo rounded-circle" src={logo} alt="" />
            </div>
        <Container className="d-flex justify-content-center mt-3">
        <Link to={'/'} className='nav-link btn rounded-pill'>Inicio</Link>
            <Link className='nav-link btn mx-2 rounded-pill'>¿Quienes Somos?</Link>
            <Link className='nav-link btn me-2 rounded-pill'>Tienda</Link>
            <Link className='nav-link btn rounded-pill'>Iniciar Sesion</Link>
        </Container>
    </footer>
  );
};

export default FooterApp;
