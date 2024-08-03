import React from "react";
import Slider from "react-slick";
import "./Home.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import objectiveImage from "./../../images/objective_img.gif";
import aimsImage from "./../../images/aims_img.gif";
import SustainableGoals from "./../../images/sustainable_goals.png";
import PositiveActivity from "./../../images/positive_activity.jpg";
import CPTEDOriginAndTheory from "./../../images/cpted_origin_&_theory.jpg";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    fade: true,
    beforeChange: (current, next) => {
      const slides = document.querySelectorAll(".home-carousel-slide");
      slides.forEach((slide) => slide.classList.remove("home-slide-enter"));
      slides[next].classList.add("home-slide-enter");
    },
    appendDots: (dots) => (
      <div className="home-custom-dots-container" id="custom-slick-dot">
        <ul className="home-custom-dots">
          {dots.map((dot, index) => (
            <li
              key={index}
              className={`home-custom-dot ${
                index === 0
                  ? "home-dot-symbol-1"
                  : index === 1
                  ? "home-dot-symbol-2"
                  : index === 2
                  ? "home-dot-symbol-3"
                  : index === 3
                  ? "home-dot-symbol-4"
                  : "home-dot-symbol-5"
              }`}
            >
              {dot}
            </li>
          ))}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`home-dot-symbol ${
          i === 0
            ? "home-dot-symbol-1"
            : i === 1
            ? "home-dot-symbol-2"
            : i === 2
            ? "home-dot-symbol-3"
            : i === 3
            ? "home-dot-symbol-4"
            : "home-dot-symbol-5"
        }`}
      >
        ●
      </div>
    ),
  };

  return (
    <div id="home_page">
      <div className="home-carousel">
        <Slider {...settings}>
          <div className="home-carousel-slide home-slide1 home-slide-enter">
            <div className="home-content-wrapper">
              <div className="home-cpted-india-content">
                <h2 className="home-cpted-india-title">CPTED</h2>
                <p className="home-cpted-india-text">
                  CPTEDINDIA aims and ensures the fear of crime reduces with
                  implementation of crime prevention strategies, improves
                  quality of life, reduces insurance cost, enhances property
                  values, decreases crime rates, enhances business values and
                  increases a sense of community pride.
                </p>
                <p className="home-cpted-india-text">
                  We also collaborate with Business leaders/owners, Planners,
                  architects, corporations, municipal leaders, community
                  residence and educational institutions in safety planning,
                  development and redevelopment projects.
                </p>
              </div>
              <div className="home-cpted-india-image">
                <img src={aimsImage} alt="CPTED India" />
              </div>
            </div>
          </div>
          <div className="home-carousel-slide home-slide2">
            <div className="home-content-wrapper">
              <div className="home-objective-image">
                <img src={objectiveImage} alt="Objective" />
              </div>
              <div className="home-objective-content">
                <h2 className="home-objective-title">Our Mission</h2>
                <ul className="home-objective-list">
                  <li className="home-objective-text">
                    <strong>Provide high-level service</strong> to customers
                    without compromising standards and values.
                  </li>
                  <li className="home-objective-text">
                    <strong>Contribute with skills and expertise</strong> for a
                    crime-free environment and society.
                  </li>
                  <li className="home-objective-text">
                    <strong>Engage and empower</strong> the younger generation.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="home-carousel-slide home-slide3">
            <img
              src={SustainableGoals}
              alt="Sustainable Goals"
              className="home-carousel-image"
            />
            <div className="home-slide-caption">
              <h2>
                CPTED positions as one of the important contributors to attain
                the Sustainable goals listed by United Nations
              </h2>
            </div>
          </div>
          <div className="home-carousel-slide home-slide4">
            <img
              src={PositiveActivity}
              alt="Positive Activity"
              className="home-carousel-image"
            />
          </div>
          <div className="home-carousel-slide home-slide5">
            <img
              src={CPTEDOriginAndTheory}
              alt="CPTED Origin and Theory"
              className="home-carousel-image"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Home;
