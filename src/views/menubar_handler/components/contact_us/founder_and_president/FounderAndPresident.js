// FounderAndPresident.js
import React, { useEffect, useState } from "react";
import "./FounderAndPresident.css"; // Import your CSS file for styling

import dinesh_standing from "./../../../../../images/contact_us/dinesh_standing.png";
import dinesh_with_laptop from "./../../../../../images/contact_us/dinesh_with_laptop.png";
import indian_achievers_awards_for_nation_building from "./../../../../../images/contact_us/indian_achievers_awards_for_nation_building.png";
import launch_of_drug_free_tamilnadu from "./../../../../../images/contact_us/launch_of_drug_free_tamilnadu.png";
import CPTED_presentation_chennai_trade_center from "./../../../../../images/contact_us/CPTED_presentation_chennai_trade_center.png";
import Cpted_2023 from "./../../../../../images/contact_us/Cpted_2023.png";
import Annual_General_Body_Meeting from "./../../../../../images/contact_us/Annual_General_Body_Meeting.png";
import Safe_South_India_Panel_Discussion from "./../../../../../images/contact_us/Safe_South_India_Panel_Discussion.png";
import Panel_Discussion_on_Disruptive_Technologies from "./../../../../../images/contact_us/Panel_Discussion_on_Disruptive_Technologies.png";

const images = [
  dinesh_standing,
  dinesh_with_laptop,
  indian_achievers_awards_for_nation_building,
  launch_of_drug_free_tamilnadu,
  CPTED_presentation_chennai_trade_center,
  Cpted_2023,
  Annual_General_Body_Meeting,
  Safe_South_India_Panel_Discussion,
  Panel_Discussion_on_Disruptive_Technologies,
];

const FounderAndPresident = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="founder-and-president-container">
      <div className="slider-container-wrapper">
        <div className="slider-container">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className={`slide-image ${
                index === currentImage ? "active" : ""
              }`}
            />
          ))}
        </div>
      </div>

      <div className="profile-container">
        <h1>About Us</h1>
        <p>
          Dinesh Elangovan is a Competent expert, Critical thinker, and
          Strategic Leader with 20 years of experience in multiple domains. A
          strong believer that education and experience are key to handling and
          delivering strong results. Dinesh also wears multiple hats such as a
          trusted advisor, guide, facilitator, confidant, Leader, and mentor.
          With his enhanced National and International experience, he promotes
          the vision and strategy for a crime-free society in many forums and
          avenues.
        </p>
        <h2>Public Speaker and Recognition</h2>
        <p>
          Dinesh is also a public speaker and talks on many subjects such as
          Leadership Management, Crisis Management, College to Corporate, Life
          Safety, Fire Safety, Business Continuity, Crime Prevention, CPTED and
          more. These avenues include Schools, Colleges, Sized gatherings,
          Forums, Committees, Associations, and virtual invites. Member of
          multiple relevant groups and associations. Dinesh's entire profile can
          be accessed on LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/dinesh-elangovan-ssb-cdt-pmp-0220952a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          .
        </p>
        <h2>Notable Recognitions</h2>
        <p>
          Notable Recognitions include:
          <ul>
            <li>All India Gold medalist in crime research.</li>
            <li>
              OSAC Distinguished Achievement Individual Award (Only Indian &
              Asian to receive this honor).
            </li>
            <li>
              DRI International Awards of Excellence (The third Indian to
              receive this honor).
            </li>
            <li>
              Indian Achievers Award for Community Development and Nation
              Building.
            </li>
            <li>
              OSAC Country Chapter Achievement Award (Only chapter in India
              under the leadership of Dinesh to receive this award).
            </li>
            <li>
              The International Loss Prevention Magazine mentioned him under two
              categories: "Outstanding Community Champion" & "Social Justice
              Warrior".
            </li>
          </ul>
        </p>
        <h2>Areas of Expertise</h2>
        <p>
          Retail Security Management, Corporate Security Management, Disaster
          Management, Travel Security Management, Loss Prevention Program, Life
          Safety Management, Special Operations, Security Audits, Executive
          Protection, Innovation Management, Asset Protection, CPTED, Transition
          Management, Emergency Response, Incident Management, Forensic Mapping,
          Risk Management & Content Analysis.
        </p>
        <div className="contact-info-wrapper">
          <div className="contact-info">
            <p>Dial: +91 9886333979</p>
            <p>
              Email:{" "}
              <a href="mailto:dinesh.elangovan@yahoo.com">
                dinesh.elangovan@yahoo.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderAndPresident;