import React from "react";
import "./CPTED.css";
import workingGif from "./../../../../../../images/training_cpted.gif"; // Update with actual path

function CPTED() {
  return (
    <div className="training-cpted-container">
      <h2 className="training-cpted-title">CPTED Training</h2>
      <div className="training-cpted-content">
        <p className="training-cpted-description">
          CPTED – Get trained from the experts to qualify for:
          <br />
          <span className="training-cpted-list">
            <span className="training-cpted-list-item">
              1. <strong>CPTED Certified Specialist</strong> (For beginners)
            </span>
            <br />
            <span className="training-cpted-list-item">
              2. <strong>CPTED Certified Professional</strong> (For
              Professionals)
            </span>
          </span>
          <br />
          Both certifications require candidates to perform physical CPTED
          Assessment and hence training is through offline mode only. We do
          train group sessions.
        </p>
        <div className="training-cpted-image-container">
          <img src={workingGif} alt="CPTED" className="training-cpted-image" />
        </div>
      </div>
    </div>
  );
}

export default CPTED;
