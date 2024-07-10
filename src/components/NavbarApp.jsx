import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../img/GamersParadiseLogo.jpg'

const NavbarApp = () => {
  return (
    <Navbar expand="lg" className='fondo'>
      <Container>
        <Link to={'/'} className='navbar-brand'><img className='logo rounded-circle' src={logo} alt="Logo" /></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to={'/'} className='nav-link btn rounded-pill'>Inicio</Link>
            <Link to={'/QuienesSomos'} className='nav-link btn mx-2 rounded-pill'>¿Quienes Somos?</Link>
            <Link className='nav-link btn me-2 rounded-pill'>Tienda</Link>
            <Link className='nav-link btn rounded-pill'>Iniciar Sesion</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarApp
