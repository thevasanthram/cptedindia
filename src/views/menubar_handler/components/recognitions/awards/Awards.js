import React, { useState, useEffect, useRef } from "react";
import "./Awards.css";
import awardPhoto from "./../../../../../images/award_medal.png"; // Update with actual path
import DRILogo from "./../../../../../images/DRI logo.png"; // Update with actual path
import certificationEmblem from "./../../../../../images/awards_of_excellence.png"; // Update with actual path
import OsacAwardImage from "./../../../../../images/osac-award-section.png";

function Awards() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    startSlideShow();
    return () => stopSlideShow();
  }, []);

  const startSlideShow = () => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === 0 ? 1 : 0));
    }, 5000); // Change slide every 5 seconds
  };

  const stopSlideShow = () => {
    clearInterval(intervalRef.current);
  };

  const handlePrevClick = () => {
    stopSlideShow();
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 1 : 0));
    startSlideShow();
  };

  const handleNextClick = () => {
    stopSlideShow();
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 1 : 0));
    startSlideShow();
  };

  return (
    <div className="awards-slider-container">
      <div className="awards-slider">
        <div
          className={`awards-container ${currentSlide === 0 ? "active" : ""}`}
          onMouseEnter={stopSlideShow}
          onMouseLeave={startSlideShow}
        >
          <h2 className="awards-title">Award of Excellence</h2>
          <img src={DRILogo} alt="DRILogo" className="dri-logo" />
          <img src={awardPhoto} alt="Award" className="award-photo" />
          <img
            src={certificationEmblem}
            alt="Certification Emblem"
            className="certification-emblem"
          />
          <p className="awards-description">
            The winner of this award has enhanced the business resilience of a
            public sector organization, while improving community preparedness
            as a champion of business continuity to local businesses.
            Nominations will be evaluated on experience and understanding of
            business continuity issues and best practices, promotion of BCM in
            the community, as well as the ability to successfully navigate
            organizational, legislative, or community challenges to achieve
            success.
          </p>
        </div>

        <div
          className={`awards-container ${currentSlide === 1 ? "active" : ""}`}
          onMouseEnter={stopSlideShow}
          onMouseLeave={startSlideShow}
        >
          <h2 className="awards-title">Award of Excellence</h2>
          <img
            src={OsacAwardImage}
            alt="Osac Award"
            className="certification-emblem"
          />
          <p className="awards-description">
            The annual ISF OSAC appreciation awards honour the U.S. Department
            of State employees or groups and private-sector individuals who have
            made significant contributions to enhance the ability of American
            organizations to protect their personnel, assets, information,
            intellectual property, or business operations overseas. OSAC is a
            joint venture between the Department of State and the U.S. private
            sector, enabling public and private sectors to work collaboratively
            to confront global terrorism, crime, and natural disasters.
          </p>
        </div>
      </div>
      <button className="slider-button prev-button" onClick={handlePrevClick}>
        &#9664; {/* Unicode character for left arrow */}
      </button>
      <button className="slider-button next-button" onClick={handleNextClick}>
        &#9654; {/* Unicode character for right arrow */}
      </button>
    </div>
  );
}

export default Awards;
