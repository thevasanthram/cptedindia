import React from "react";
import "./ProjectManagement.css";
import workingImage from "./../../../../../../images/project_management.gif"; // Update with actual path

function ProjectManagement() {
  return (
    <div className="project-management-container">
      <h2 className="project-management-title">Project Management</h2>
      <p className="project-management-description">
        Safety, Security and Risk management enable a company to attain the goal
        and strategic vision. Projects in these domains require systematic
        supervision and coordination for successful completion. Learn the best
        practices and steps involved for an effective project management.
      </p>
      <div className="project-management-image-container">
        <img
          src={workingImage}
          alt="Project Management"
          className="project-management-image"
        />
      </div>
    </div>
  );
}

export default ProjectManagement;
