import React from "react";
import "./CrimePrevention.css";
import workingImage from "./../../../../../../images/crime_prevention.gif"; // Update with actual path

function CrimePrevention() {
  return (
    <div className="crime-prevention-container">
      <h2 className="training-title">Crime Prevention</h2>
      <p className="training-description">
        Learn crime prevention strategies from criminologists and protect your
        business and neighborhood.
      </p>
      <div className="training-image-container">
        <img
          src={workingImage}
          alt="Crime Prevention"
          className="training-crime-prevention-image"
        />
      </div>
    </div>
  );
}

export default CrimePrevention;
