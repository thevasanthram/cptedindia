import React from "react";
import "./CorporateSecurity.css";
import workingImage from "./../../../../../../images/corporate-security.webp"; // Update with actual path

function CorporateSecurity() {
  return (
    <div className="corporate-security-container">
      <h2 className="corporate-security-title">Corporate Security</h2>
      <p className="corporate-security-description">
        Learn from our experts and leaders who were on ground with corporate
        work experience. Understand from theories, live examples, case studies
        and on ground stimulation exercises.
      </p>
      <div className="corporate-security-image-container">
        <img
          src={workingImage}
          alt="Corporate Security"
          className="corporate-security-image"
        />
      </div>
    </div>
  );
}

export default CorporateSecurity;
