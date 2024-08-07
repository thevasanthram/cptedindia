import React from "react";
import "./RiskManagement.css";
import riskManagementImage from "./../../../../../../images/risk_management.gif"; // Update with actual path

function RiskManagement() {
  return (
    <div className="risk-management-container">
      <h2 className="risk-management-section-title">Risk Management</h2>
      <p className="risk-management-section-description">
        A structured way of managing possible activities that could cause harm.
        Our experts can guide you to form an effective risk management framework
        for your firm.
      </p>
      <div className="risk-management-image-container">
        <img
          src={riskManagementImage}
          alt="Risk Management"
          className="consulting-risk-management-section-image"
        />
      </div>
    </div>
  );
}

export default RiskManagement;
