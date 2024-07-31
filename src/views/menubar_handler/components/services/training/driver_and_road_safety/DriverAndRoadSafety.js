import React from "react";
import "./DriverAndRoadSafety.css";
import workingImage from "./../../../../../../images/working.gif"; // Update with actual path

function DriverAndRoadSafety() {
  return (
    <div className="driver-road-safety-container">
      <h2 className="training-title">Driver and Road Safety</h2>
      <p className="training-description">
        “Not all roads lead to Rome” some are broken, traffic congested and
        without lights. Safety while traveling becomes paramount for employees.
        Our Driver and Road safety training program provides great insight and
        real-time scenarios to be solved.
      </p>
      <div className="training-image-container">
        <img
          src={workingImage}
          alt="Driver and Road Safety"
          className="training-image"
        />
      </div>
    </div>
  );
}

export default DriverAndRoadSafety;
