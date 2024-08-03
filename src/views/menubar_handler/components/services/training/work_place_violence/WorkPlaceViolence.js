import React from "react";
import "./WorkPlaceViolence.css";
import workingImage from "./../../../../../../images/work-place-violence.gif"; // Update with actual path

function WorkPlaceViolence() {
  return (
    <div className="work-place-violence-container">
      <h2 className="training-title">Work Place Violence</h2>
      <p className="training-description">
        Employees are more productive when they feel they have a safer work
        environment. Protect your employees and company reputation by
        understanding workplace violence management.
      </p>
      <div className="training-image-container">
        <img
          src={workingImage}
          alt="Work Place Violence"
          className="training-work-place-violence-image"
        />
      </div>
    </div>
  );
}

export default WorkPlaceViolence;
