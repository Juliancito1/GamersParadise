import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../img/GamersParadiseLogo.jpg'

const NavbarApp = () => {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Link to={'/'} className='navbar-brand'><img className='logo rounded-circle' src={logo} alt="Logo" /></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to={'/'} className='nav-link'>Inicio</Link>
            <Link className='nav-link'>¿Quienes Somos?</Link>
            <Link className='nav-link'>Tienda</Link>
            <Link className='nav-link'>Iniciar Sesion</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarApp
