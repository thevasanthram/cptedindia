import React from "react";
import "./BusinessContinuity.css";
import workingImage from "./../../../../../../images/working.gif"; // Update with actual path

function BusinessContinuity() {
  return (
    <div className="business-continuity-container">
      <h2 className="training-title">Business Continuity</h2>
      <p className="training-description">
        Minimizing loss by being prepared for the prospective risk and disaster
        is key in any firm or business. Does your business have a continuity
        plan? Contact us to know more.
      </p>
      <div className="training-image-container">
        <img
          src={workingImage}
          alt="Business Continuity"
          className="training-image"
        />
      </div>
    </div>
  );
}

export default BusinessContinuity;
