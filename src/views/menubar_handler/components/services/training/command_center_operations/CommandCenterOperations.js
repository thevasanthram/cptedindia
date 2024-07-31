import React from "react";
import "./CommandCenterOperations.css";
import workingImage from "./../../../../../../images/working.gif"; // Update with actual path

function CommandCenterOperations() {
  return (
    <div className="command-center-operations-container">
      <h2 className="training-title">Command Center Operations</h2>
      <p className="training-description">
        Learn to commission, retrofit, Collaborate, Communicate, formulate
        procedures, policies, and solve operational challenges with Command
        Center Operations. Do you have the right setup for your organization?
        Are all your locations integrated? Contact us to know more.
      </p>
      <div className="training-image-container">
        <img
          src={workingImage}
          alt="Command Center Operations"
          className="training-image"
        />
      </div>
    </div>
  );
}

export default CommandCenterOperations;
