import React from "react";
import "./ThirdPartyVendorTraining.css";
import workingImage from "./../../../../../../images/third-party-vendor-training.gif"; // Update with actual path

function ThirdPartyVendorTraining() {
  return (
    <div className="third-party-vendor-training-container">
      <h2 className="third-party-vendor-training-title">
        Third-Party Vendor Training
      </h2>
      <p className="third-party-vendor-training-description">
        Are your employees and vendors together at a common space in the office?
        Are your employees safe interacting with third-party vendors? Does your
        third-party vendor know emergency drills? Engage us and we will train
        the third-party vendors.
      </p>
      <div className="third-party-vendor-training-image-container">
        <img
          src={workingImage}
          alt="Third Party Vendor Training"
          className="third-party-vendor-training-image"
        />
      </div>
    </div>
  );
}

export default ThirdPartyVendorTraining;
