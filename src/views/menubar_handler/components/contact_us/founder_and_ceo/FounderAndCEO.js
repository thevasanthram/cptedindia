import React, { useState, useEffect } from "react";
import "./FounderAndCEO.css";

import dinesh_standing from "./../../../../../images/contact_us/dinesh_standing.png";
import dinesh_with_laptop from "./../../../../../images/contact_us/dinesh_with_laptop.png";
import indian_achievers_awards_for_nation_building from "./../../../../../images/contact_us/indian_achievers_awards_for_nation_building.png";
import launch_of_drug_free_tamilnadu from "./../../../../../images/contact_us/launch_of_drug_free_tamilnadu.png";
import CPTED_presentation_chennai_trade_center from "./../../../../../images/contact_us/CPTED_presentation_chennai_trade_center.png";
import Cpted_2023 from "./../../../../../images/contact_us/Cpted_2023.png";
import Annual_General_Body_Meeting from "./../../../../../images/contact_us/Annual_General_Body_Meeting.png";
import Safe_South_India_Panel_Discussion from "./../../../../../images/contact_us/Safe_South_India_Panel_Discussion.png";
import Panel_Discussion_on_Disruptive_Technologies from "./../../../../../images/contact_us/Panel_Discussion_on_Disruptive_Technologies.png";

const sliderData = [
  { src: dinesh_standing, description: "Event 1 Description" },
  { src: dinesh_with_laptop, description: "Event 2 Description" },
  {
    src: indian_achievers_awards_for_nation_building,
    description: "Indian Achievers award for Nation Building",
  },
  { src: launch_of_drug_free_tamilnadu, description: "Event 4 Description" },
  {
    src: CPTED_presentation_chennai_trade_center,
    description:
      "CPTED Presentation at the Chennai Trade Center 2024. Fire and Safety expo.",
  },
  {
    src: Cpted_2023,
    description: "CPTED - Crime Prevention Through Environmental Design (2023)",
  },
  {
    src: Annual_General_Body_Meeting,
    description:
      "Participated as a speaker in the Annual General Body Meeting held at Delhi",
  },
  {
    src: Safe_South_India_Panel_Discussion,
    description:
      "Panel Discussion on Disruptive Technologies in Enterprise security Management. Moderated the Panel discussions with industry Stalwarts and experts.",
  },
  {
    src: Panel_Discussion_on_Disruptive_Technologies,
    description:
      "Panel Discussion on Disruptive Technologies in Enterprise security Management. Moderated the Panel discussions with industry Stalwarts and experts.",
  },
];

const FounderCEO = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1
      );
    }, 150000); // Slide change interval

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="founder-ceo-container">
      <h1 className="founder-title">
        FOUNDER & CEO: <span className="highlight">Dinesh Elangovan</span>
      </h1>
      <div className="slider-container">
        <button className="slider-button prev" onClick={handlePrev}>
          &lt;
        </button>
        <div
          className="slider-wrapper"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {sliderData.map((slide, index) => (
            <div
              className={`slide ${
                currentIndex === index
                  ? "current"
                  : currentIndex === index - 1
                  ? "prev"
                  : currentIndex === index + 1
                  ? "next"
                  : ""
              }`}
              key={index}
            >
              <img src={slide.src} alt={`Slide ${index + 1}`} />
              <div className="slide-caption">{slide.description}</div>
            </div>
          ))}
        </div>
        <button className="slider-button next" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default FounderCEO;
