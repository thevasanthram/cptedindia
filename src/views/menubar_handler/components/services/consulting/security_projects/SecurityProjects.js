import React from "react";
import "./SecurityProjects.css";
import securityProjectsImage from "./../../../../../../images/award_medal.png"; // Update with actual path

function SecurityProjects() {
  return (
    <div className="security-projects-container">
      <h2 className="section-title">Security Projects</h2>
      <p className="section-description">
        We guide, involve, actively engage and provide support for successful
        completion of Security related Projects. Be it Commissioning,
        Decommissioning, retrofit activities, Installations, Customized
        Trainings or Operations challenges that encompass a security project.
      </p>
      <div className="image-container">
        <img
          src={securityProjectsImage}
          alt="Security Projects"
          className="section-image"
        />
      </div>
    </div>
  );
}

export default SecurityProjects;
