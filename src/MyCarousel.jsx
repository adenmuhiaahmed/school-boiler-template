import React from "react";
import { Carousel } from "react-bootstrap";
import image1 from "./assets/school.png";
import image2 from "./assets/techfair.jpg";
import image3 from "./assets/sportsday.jpg";

function MyCarousel() {
  return (
    <Carousel indicators={false}>
      <Carousel.Item>
        <img
          className="d-block w-100" // Use Bootstrap utility classes
          src={image1}
          alt="First slide"
          style={{
            // background: "rgba(0, 0, 0, 0.76)",
            boxShadow: "inset 0px 0px 1rem rgba(63, 63, 63, 0.5)",
          }}
        />
        <Carousel.Caption>
          <h3 className="section-title">Slide Label</h3>
          <p className="desc">Slide description.</p>
          <a className="updateBtn">View</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" // Use Bootstrap utility classes
          src={image2}
          alt="First slide"
          style={{
            // background: "rgba(0, 0, 0, 0.76)",
            boxShadow: "inset 0px 0px 1rem rgba(63, 63, 63, 0.5)",
          }}
        />
        <Carousel.Caption>
          <h3 className="section-title">Slide Label</h3>
          <p className="desc">Slide description.</p>
          <a className="updateBtn">View</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" // Use Bootstrap utility classes
          src={image3}
          alt="First slide"
          style={{
            // background: "rgba(0, 0, 0, 0.76)",
            boxShadow: "inset 0px 0px 1rem rgba(63, 63, 63, 0.5)",
          }}
        />
        <Carousel.Caption>
          <h3 className="section-title">Slide Label</h3>
          <p className="desc">Slide description.</p>
          <a className="updateBtn">View</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" // Use Bootstrap utility classes
          src={image1}
          alt="First slide"
          style={{
            // background: "rgba(0, 0, 0, 0.76)",
            boxShadow: "inset 0px 0px 1rem rgba(63, 63, 63, 0.5)",
          }}
        />
        <Carousel.Caption>
          <h3 className="section-title">Slide Label</h3>
          <p className="desc">Slide description.</p>
          <a className="updateBtn">View</a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
