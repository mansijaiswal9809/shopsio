import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Carousel1 = () => {
  return (
    <Carousel
      style={{ overflowY: "hidden", marginTop: "40px" }}
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/I/61Q2snF9glL._SX3000_.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/I/61QuivkXE7L._SX3000_.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousel1;
