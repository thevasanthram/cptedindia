import React from "react";
import "./InternalAudit.css";
import workingImage from "./../../../../../../images/internal-audit.gif"; // Update with actual path

function InternalAudit() {
  return (
    <div className="internal-audit-container">
      <h2 className="internal-audit-title">Internal Audit</h2>
      <p className="internal-audit-description">
        Do you want an external auditor to pick your paper? Get trained to
        understand how internal audit is done and the process dealt with it.
      </p>
      <div className="internal-audit-image-container">
        <img
          src={workingImage}
          alt="Internal Audit"
          className="internal-audit-image"
        />
      </div>
    </div>
  );
}

export default InternalAudit;
