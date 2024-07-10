import React from 'react'
import testimonio1 from '../img/testimonio1.jpg'
import testimonio2 from '../img/testimonio2.jpg'
import testimonio3 from '../img/testimonio3.jpg'
import { Col, Row } from 'react-bootstrap'

const QuienesSomos = () => {
  return (
    <section className='mainSection'>
    <div className='text-center container'>
      <h1>¿Quienés Somos?</h1>
      <p>Somos Gamers Paradise, una tienda de venta de videojuegos que busca competir y formar un nombre reconocido de forma internacional. No solo veras los mejores juegos disponibles sino que también vendrán acompañados de las mejores ofertas y promociones así puedas disfrutar de esta gran actividad cuidanado de tu bolsillo</p>
    </div>
      <h2 className='text-center'>Testimonios</h2>
      <article className='container text-center mb-5'>
        <Row className='d-flex justify-content-center'>
      <Col md={3} className='testimonio'>
      <div>
        <img className='testimonioImg rounded-circle p-2' src={testimonio1} alt="" />
      </div>
      <p><strong>- Pedro Gonzalez</strong></p>
      <p className='p-2 pb-0'>"Gamers Paradise es la mejor tienda de videojuegos que he encontrado. ¡Siempre tienen las mejores ofertas!"</p>
      </Col>
      <Col md={3} className='text-center testimonio mx-md-3'>
      <div>
        <img className='testimonioImg rounded-circle p-2' src={testimonio2} alt="" />
      </div>
      <p><strong>- Martina Ayala</strong></p>
      <p className='p-2 pb-0'>"El servicio al cliente es excepcional y siempre encuentro lo que necesito."</p>
      </Col>
      <Col md={3} className='text-center testimonio'>
      <div>
        <img className='testimonioImg rounded-circle p-2' src={testimonio3} alt="" />
      </div>
      <p className=''><strong>- Ernesto Padilla</strong></p>
      <p className='p-2'>"De las mejores páginas de videojuegos que he utilizado"</p>
      </Col>
        </Row>
      </article>
      <article className='container text-center mb-3'>
        <h2>Contactanos</h2>
        <p>Además de nuestras redes sociales, podes contactarnos por nuestro email </p>
            <h3>Email: GamersParadise@gmail.com</h3>
      </article>
    </section>
  )
}

export default QuienesSomos
