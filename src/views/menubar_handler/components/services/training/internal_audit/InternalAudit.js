import React from "react";
import "./InternalAudit.css";
import workingImage from "./../../../../../../images/internal-audit.gif"; // Update with actual path

function InternalAudit() {
  return (
    <div className="training-container">
      <h2 className="section-title">Internal Audit</h2>
      <p className="section-description">
        Do you want an external auditor to pick your paper? Get trained to
        understand how internal audit is done and the process dealt with it.
      </p>
      <div className="image-container">
        <img
          src={workingImage}
          alt="Internal Audit"
          className="section-internal-audit-image"
        />
      </div>
    </div>
  );
}

export default InternalAudit;
