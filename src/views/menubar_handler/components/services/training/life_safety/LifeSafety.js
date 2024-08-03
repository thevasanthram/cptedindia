import React from "react";
import "./LifeSafety.css";
import workingImage from "./../../../../../../images/life-safety.jpg"; // Update with actual path

function LifeSafety() {
  return (
    <div className="life-safety-container">
      <h2 className="training-title">Life Safety</h2>
      <p className="training-description">
        It takes less than 4 minutes for the brain to reach brain dead
        condition. You can save a life by providing CPR before the ambulance
        arrives. Get trained and be a “Certified Life Saver”.
      </p>
      <div className="training-image-container">
        <img src={workingImage} alt="Life Safety" className="training-life-safety-image" />
      </div>
    </div>
  );
}

export default LifeSafety;
