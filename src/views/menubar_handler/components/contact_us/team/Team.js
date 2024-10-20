import React, { useState } from "react";
import "./Team.css";
import VasanthProfilePicture from "./../../../../../images/contact_us/vasanth-profile-picture.jpg";

const Team = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="team-container" id="team-container">
      <div className="team-member" id="team-member-vasanth">
        <div
          className="profile-image"
          id="profile-image-vasanth"
          onClick={openModal}
        >
          <img
            src={VasanthProfilePicture}
            alt="Vasanth Ram - Web Master"
            id="vasanth-image"
          />
        </div>
        <div className="member-info" id="member-info-vasanth">
          <h1 id="team-heading">Team</h1>
          <h2 id="member-name-vasanth">Vasanth Ram</h2>
          <p id="member-title-vasanth">(Web Master)</p>
          <p id="member-position-vasanth">Software Engineer, Bengaluru</p>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="modal-overlay"
          id="modal-overlay-vasanth"
          onClick={closeModal}
        >
          <div className="modal-content" id="modal-content-vasanth">
            <img
              src={VasanthProfilePicture}
              alt="Vasanth Ram - Web Master"
              id="modal-image-vasanth"
              className="modal-image-animation"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Team;
