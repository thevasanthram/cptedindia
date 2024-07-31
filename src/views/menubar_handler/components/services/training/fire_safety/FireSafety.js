import React from "react";
import "./FireSafety.css";
import workingImage from "./../../../../../../images/working.gif"; // Update with actual path

function FireSafety() {
  return (
    <div className="fire-safety-container">
      <h2 className="training-title">Fire Safety</h2>
      <p className="training-description">
        Don’t wait for the fire to remind you about fire safety at home or at
        work. Learn about basic fire safety and immediate response plans.
      </p>
      <div className="training-image-container">
        <img src={workingImage} alt="Fire Safety" className="training-image" />
      </div>
    </div>
  );
}

export default FireSafety;
