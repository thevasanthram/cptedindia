import React, { useState } from "react";
import "./Team.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
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
            alt="Vasanth Ram"
            id="vasanth-image"
          />
        </div>
        <div className="member-info" id="member-info-vasanth">
          <h2 id="member-name-vasanth">Vasanth Ram</h2>
          <p id="member-title-vasanth">(Web Master)</p>
          <p id="member-position-vasanth">Software Engineer, Bengaluru</p>
          <p id="member-education-vasanth">
            Government College of Technology, Coimbatore
          </p>
          <p id="member-skills-vasanth" className="skills">
            Specializing in full-stack applications using React, Node.js,
            JavaScript, and various databases. Proficient in cloud technologies
            and developed websites for two companies.
          </p>
          <div className="contact-info-team" id="contact-info-vasanth">
            <h3 id="contact-header-vasanth">Contact</h3>
            <div className="contact-item" id="contact-item-phone">
              <FaPhoneAlt className="contact-icon" id="contact-icon-phone" />
              <a
                href="tel:+919791720734"
                className="contact-link"
                id="contact-link-phone"
              >
                +91 9791720734
              </a>
            </div>
            <div className="contact-item" id="contact-item-email">
              <FaEnvelope className="contact-icon" id="contact-icon-email" />
              <a
                href="mailto:vasanthram227@gmail.com"
                className="contact-link"
                id="contact-link-email"
              >
                vasanthram227@gmail.com
              </a>
            </div>
            <div className="contact-item" id="contact-item-instagram">
              <FaInstagram
                className="contact-icon"
                id="contact-icon-instagram"
              />
              <a
                href="https://www.instagram.com/thevasanthram/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                id="contact-link-instagram"
              >
                @thevasanthram
              </a>
            </div>
            <div className="contact-item" id="contact-item-whatsapp">
              <FaWhatsapp className="contact-icon" id="contact-icon-whatsapp" />
              <a
                href="https://wa.me/919791720734"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                id="contact-link-whatsapp"
              >
                WhatsApp
              </a>
            </div>
            <div className="contact-item" id="contact-item-linkedin">
              <FaLinkedin className="contact-icon" id="contact-icon-linkedin" />
              <a
                href="https://www.linkedin.com/in/vasanthan-ramalingam-843868194/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                id="contact-link-linkedin"
              >
                LinkedIn
              </a>
            </div>
          </div>
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
              alt="Vasanth Ram"
              id="modal-image-vasanth"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Team;
