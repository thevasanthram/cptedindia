import React from "react";
import "./CPTED.css";
import group_working from "./../../../../../../images/group_working.gif"; // Update with actual path

function CPTED() {
  return (
    <div className="consulting-cpted-container">
      <h2 className="consulting-cpted-title">
        CPTED - Crime Prevention Through Environmental Design
      </h2>
      <p className="consulting-cpted-description">
        CPTEDINDIA applies proactive methodologies and CPTED concepts to
        implement crime prevention strategies. Involve us right from the
        building design/discussion stage to get a holistic safety and security
        design. Get a chance to grab the coveted <br />
        <b>“CPTED Gold Standard Certification”</b> to distinguish you as a
        market leader.
      </p>

      <div className="consulting-cpted-image-container">
        <img
          src={group_working}
          alt="CPTED"
          className="consulting-cpted-image"
        />
      </div>
    </div>
  );
}

export default CPTED;
