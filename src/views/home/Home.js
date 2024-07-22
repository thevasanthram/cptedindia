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
  };

  return (
    <div className="home-page">
      <h2>Welcome to CPTED INDIA</h2>
      <p>
        Explore the principles of Crime Prevention Through Environmental Design.
      </p>

      {/* Carousel Component */}
      <div className="carousel">
        <Slider {...settings}>
          <div className="carousel-slide">
            <div className="carousel-content">
              <h3>Concept 1: Natural Surveillance</h3>
              <p>
                Enhancing visibility to deter criminal activity through
                strategic design.
              </p>
            </div>
          </div>
          <div className="carousel-slide">
            <div className="carousel-content">
              <h3>Concept 2: Territorial Reinforcement</h3>
              <p>
                Designing spaces to express ownership and discourage intrusion.
              </p>
            </div>
          </div>
          <div className="carousel-slide">
            <div className="carousel-content">
              <h3>Concept 3: Access Control</h3>
              <p>Regulating access to enhance security and safety.</p>
            </div>
          </div>
          <div className="carousel-slide">
            <div className="carousel-content">
              <h3>Concept 4: Maintenance</h3>
              <p>
                Keeping environments well-maintained to reduce crime
                opportunities.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Home;
