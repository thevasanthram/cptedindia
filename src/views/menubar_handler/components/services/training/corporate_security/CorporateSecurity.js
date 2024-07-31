import React from "react";
import "./CorporateSecurity.css";
import workingImage from "./../../../../../../images/working.gif"; // Update with actual path

function CorporateSecurity() {
  return (
    <div className="training-container">
      <h2 className="section-title">Corporate Security</h2>
      <p className="section-description">
        Learn from our experts and leaders who were on ground with corporate
        work experience. Understand from theories, live examples, case studies
        and on ground stimulation exercises.
      </p>
      <div className="image-container">
        <img
          src={workingImage}
          alt="Corporate Security"
          className="section-image"
        />
      </div>
    </div>
  );
}

export default CorporateSecurity;
