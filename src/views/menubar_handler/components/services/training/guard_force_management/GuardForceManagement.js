import React from "react";
import "./GuardForceManagement.css";
import workingImage from "./../../../../../../images/working.gif"; // Update with actual path

function GuardForceManagement() {
  return (
    <div className="guard-force-management-container">
      <h2 className="training-title">Guard Force Management</h2>
      <p className="training-description">
        “A trained and knowledgeable guard at the company entry gates is more
        powerful than the CEO of the Company”. The company will be in media,
        reputation will be damaged resulting to financial loss and legal
        implications, If he/she does not stop or identify the threat or the
        intruder intending to cause harm to the firm. Get trained to deploy the
        best Guard force for active management.
      </p>
      <div className="training-image-container">
        <img
          src={workingImage}
          alt="Guard Force Management"
          className="training-image"
        />
      </div>
    </div>
  );
}

export default GuardForceManagement;
