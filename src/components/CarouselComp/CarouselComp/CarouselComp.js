import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./CarouselComp.css";

const CarouselComp = ({ hiddenCarousel }) => {
  const carouselClasses = `carousel ${hiddenCarousel ? "carousel-hidden" : "carousel-wrapper"}`;

  return (
    <div className={carouselClasses}>
      <Carousel>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://unsplash.it/id/120/800/400"
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
            src="https://unsplash.it/id/1022/800/400"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://unsplash.it/id/135/800/400"
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
    </div>
  );
};

export default CarouselComp;
