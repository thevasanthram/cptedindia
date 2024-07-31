import React from "react";
import "./ProjectManagement.css";
import workingImage from "./../../../../../../images/working.gif"; // Update with actual path

function ProjectManagement() {
  return (
    <div className="training-container">
      <h2 className="section-title">Project Management</h2>
      <p className="section-description">
        Safety, Security and Risk management enable a company to attain the goal
        and strategic vision. Projects in these domains require systematic
        supervision and coordination for successful completion. Learn the best
        practices and steps involved for an effective project management.
      </p>
      <div className="image-container">
        <img
          src={workingImage}
          alt="Project Management"
          className="section-image"
        />
      </div>
    </div>
  );
}

export default ProjectManagement;
