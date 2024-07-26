import React from "react";
import Slider from "react-slick";
import "./Home.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    fade: false,
    lazyLoad: "ondemand", // Enable lazy loading on demand
    beforeChange: (current, next) => {
      document
        .querySelectorAll(".carousel-slide")
        [current].classList.add("zoom-out");
      document
        .querySelectorAll(".carousel-slide")
        [next].classList.add("zoom-in");
    },
    afterChange: (current) => {
      document
        .querySelectorAll(".carousel-slide")
        .forEach((slide) => slide.classList.remove("zoom-in", "zoom-out"));
    },
  };

  return (
    <div className="home-page">
      <nav className="navbar">
        <div className="nav-item">
          Home
          <div className="sub-menu">
            <div className="sub-item">Sub-Home 1</div>
            <div className="sub-item">Sub-Home 2</div>
          </div>
        </div>
        <div className="nav-item">
          About
          <div className="sub-menu">
            <div className="sub-item">Sub-About 1</div>
            <div className="sub-item">Sub-About 2</div>
          </div>
        </div>
        <div className="nav-item">
          Services
          <div className="sub-menu">
            <div className="sub-item">Service 1</div>
            <div className="sub-item">Service 2</div>
          </div>
        </div>
        <div className="nav-item">
          Contact
          <div className="sub-menu">
            <div className="sub-item">Email</div>
            <div className="sub-item">Phone</div>
          </div>
        </div>
      </nav>
      <h2>Welcome to CPTED INDIA</h2>
      <p>
        Explore the principles of Crime Prevention Through Environmental Design.
      </p>

      {/* Carousel Component */}
      <div className="carousel">
        <Slider {...settings}>
          <div className="carousel-slide slide1">
            <div className="carousel-content">
              <h3>Concept 1: Natural Surveillance</h3>
              <p>
                Enhancing visibility to deter criminal activity through
                strategic design.
              </p>
              <button className="carousel-button">Learn More</button>
            </div>
          </div>
          <div className="carousel-slide slide2">
            <div className="carousel-content">
              <h3>Concept 2: Territorial Reinforcement</h3>
              <p>
                Designing spaces to express ownership and discourage intrusion.
              </p>
              <button className="carousel-button">Learn More</button>
            </div>
          </div>
          <div className="carousel-slide slide3">
            <div className="carousel-content">
              <h3>Concept 3: Access Control</h3>
              <p>Regulating access to enhance security and safety.</p>
              <button className="carousel-button">Learn More</button>
            </div>
          </div>
          <div className="carousel-slide slide4">
            <div className="carousel-content">
              <h3>Concept 4: Maintenance</h3>
              <p>
                Keeping environments well-maintained to reduce crime
                opportunities.
              </p>
              <button className="carousel-button">Learn More</button>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Home;
