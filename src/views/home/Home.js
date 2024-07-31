import React from "react";
import "./Home.css";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import objectiveImage from "./../../images/objective_img.gif";
import aimsImage from "./../../images/aims_img.gif";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    fade: false,
    lazyLoad: "ondemand", // Enable lazy loading on demand
    beforeChange: (current, next) => {
      const direction = next > current ? "left" : "right";
      document
        .querySelectorAll(".carousel-slide")
        [current].classList.add(`zoom-out-${direction}`);
      document
        .querySelectorAll(".carousel-slide")
        [next].classList.add(`zoom-in-${direction}`);
    },
    afterChange: (current) => {
      document
        .querySelectorAll(".carousel-slide")
        .forEach((slide) =>
          slide.classList.remove(
            "zoom-in-left",
            "zoom-in-right",
            "zoom-out-left",
            "zoom-out-right"
          )
        );
    },
  };

  return (
    <div id="home_page">
      {/* Carousel Component */}
      <div className="carousel">
        <Slider {...settings}>
          <div className="carousel-slide slide1"></div>
          <div className="carousel-slide slide2"></div>
          <div className="carousel-slide slide3"></div>
          <div className="carousel-slide slide4"></div>
        </Slider>
      </div>

      <div className="cpted-india-container">
        <div className="cpted-india-row">
          <div className="cpted-india-content">
            <h2 className="cpted-india-title">CPTED India Aims</h2>
            <p className="cpted-india-text">
              CPTEDINDIA aims and ensures the fear of crime reduces with
              implementation of crime prevention strategies, improves quality of
              life, reduces insurance cost, enhances property values, decreases
              crime rates, enhances business values and increases a sense of
              community pride.
            </p>
            <p className="cpted-india-text">
              We also collaborate with Business leaders/owners, Planners,
              architects, corporations, municipal leaders, community residence
              and educational institutions in safety planning, development and
              redevelopment projects.
            </p>
          </div>
          <div className="cpted-india-image">
            <img src={aimsImage} alt="CPTED India" />
          </div>
        </div>
      </div>

      <div className="objective-card">
        <div className="objective-image">
          <img src={objectiveImage} alt="Objective" />
        </div>
        <div className="objective-content">
          <h2 className="objective-title">Our Mission</h2>
          <ul className="objective-list">
            <li className="objective-text">
              <strong>Provide high-level service</strong> to customers without
              compromising standards and values.
            </li>
            <li className="objective-text">
              <strong>Contribute with skills and expertise</strong> for a
              crime-free environment and society.
            </li>
            <li className="objective-text">
              <strong>Engage and empower</strong> the younger generation.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
