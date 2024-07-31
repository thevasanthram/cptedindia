import React from "react";
import "./SurveillanceCctv.css";
import workingImage from "./../../../../../../images/working.gif"; // Update with actual path

function SurveillanceCctv() {
  return (
    <div className="surveillance-cctv-container">
      <h2 className="training-title">Surveillance and CCTV</h2>
      <p className="training-description">
        Have you placed your camera at the right place without any grey areas or
        privacy issues? Get trained on CCTV Installations, Operational CCTV
        management and Advanced surveillance techniques.
      </p>
      <div className="training-image-container">
        <img
          src={workingImage}
          alt="Surveillance and CCTV"
          className="training-image"
        />
      </div>
    </div>
  );
}

export default SurveillanceCctv;
