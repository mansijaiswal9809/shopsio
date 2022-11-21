import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Carousel1 = () => {
  return (
    <Carousel style={{height:"500px", overflowY:"hidden", marginTop:"40px"}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/I/61Q2snF9glL._SX3000_.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/I/61QuivkXE7L._SX3000_.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Carousel1
