import React from 'react'
import carouselImg1 from '../img/Carousel1.jpg'
import carouselImg2 from '../img/Carousel2.jpg'
import carouselImg3 from '../img/Carousel3.jpg'
import Carousel from 'react-bootstrap/Carousel';

const CarouselApp = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className='img-carousel d-block w-100' src={carouselImg1} alt="First Slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className='img-carousel d-block w-100' src={carouselImg2} alt="Second Slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className='img-carousel d-block w-100' src={carouselImg3} alt="Second Slide" />
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselApp
