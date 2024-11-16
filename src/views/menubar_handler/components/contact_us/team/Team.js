import React, { useState } from "react";
import "./Team.css";
import userImage from "./../../../../../images/user_image.png";

const Team = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const teamMembers = [
    { name: "Kavitha J", title: "Admin", image: userImage },
    { name: "Gayathri G", title: "Finance", image: userImage },
    { name: "Divya P", title: "Architect", image: userImage },
    { name: "Vasanth Ram", title: "Web Master", image: userImage },
    { name: "Vinoth Kumar", title: "Real Estate", image: userImage },
  ];

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="team-section">
      <h1 className="team-heading">Team</h1>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <div
              className="profile-image"
              onClick={() => openModal(member.image)}
            >
              <img
                src={member.image}
                alt={`${member.name} - ${member.title}`}
              />
            </div>
            <div className="member-info">
              <h2 className="member-name">{member.name}</h2>
              <p className="member-title">{member.title}</p>
            </div>
          </div>
        ))}
        {isModalOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content">
              <img
                src={modalImage}
                alt="Team Member"
                className="modal-image-animation"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Team;
