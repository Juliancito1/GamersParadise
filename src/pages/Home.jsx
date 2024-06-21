import React from 'react'
import CarouselApp from '../components/CarouselApp'
import Destacados from '../components/Destacados'

const Home = () => {
  return (
    <>
      <section className='mainSection'>
      <CarouselApp/>
      <article className='text-center my-5 container-fluid'>
      <h1>El Mejor Lugar para aquel que ama los <strong>Videojuegos</strong></h1>
      <hr />
      <p>Los videojuegos nos transportan a mundos fascinantes donde podemos ser héroes, estrategas, exploradores y mucho más. Nos encantan porque combinan entretenimiento, desafío y creatividad, permitiéndonos vivir experiencias únicas y emocionantes. Además, fomentan habilidades como la resolución de problemas, la coordinación y el trabajo en equipo. En nuestro e-commerce de videojuegos, celebramos esta pasión ofreciendo una amplia variedad de títulos para todos los gustos y edades, porque entendemos que cada partida es una aventura inolvidable.</p>
      <h2 className='mt-5'>Los Más Destacados</h2>
      <hr />
        <Destacados/>
      </article>
      </section>
    </>
  )
}

export default Home
