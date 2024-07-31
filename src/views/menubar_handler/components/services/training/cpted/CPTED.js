import React from "react";
import "./CPTED.css";
import workingGif from "./../../../../../images/working.gif"; // Update with actual path

function CPTED() {
  return (
    <div className="cpted-container">
      <h2 className="cpted-title">
        CPTED - Crime Prevention Through Environmental Design
      </h2>
      <div className="cpted-content">
        <p className="cpted-description">
          CPTEDINDIA applies proactive methodologies and CPTED concepts to
          implement crime prevention strategies. Involves us right from the
          building design/discussion stage to get a holistic safety and security
          design. Get a chance to grab the coveted “CPTED Gold Standard
          Certification” to distinguish you as a market leader.
        </p>
        <div className="cpted-image-container">
          <img src={workingGif} alt="CPTED" className="cpted-image" />
        </div>
      </div>
    </div>
  );
}

export default CPTED;
