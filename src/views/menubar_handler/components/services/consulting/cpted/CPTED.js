import React from "react";
import "./CPTED.css";
import group_working from "./../../../../../../images/group_working.gif"; // Update with actual path

function CPTED() {
  return (
    <div className="cpted-container">
      <h2 className="cpted-title">
        CPTED - Crime Prevention Through Environmental Design
      </h2>
      <p className="cpted-description">
        CPTEDINDIA applies proactive methodologies and CPTED concepts to
        implement crime prevention strategies. Involves us right from the
        building design/discussion stage to get a holistic safety and security
        design. Get a chance to grab the coveted “CPTED Gold Standard
        Certification” to distinguish you as a market leader.
      </p>
      <div className="image-container">
        <img src={group_working} alt="CPTED" className="cpted-image" />
      </div>
    </div>
  );
}

export default CPTED;
