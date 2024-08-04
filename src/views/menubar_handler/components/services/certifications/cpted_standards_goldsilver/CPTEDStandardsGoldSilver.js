import React, { useState } from "react";
import "./CPTEDStandardsGoldSilver.css";
import goldCertification from "./../../../../../../images/gold_certification.png";
import silverCertification from "./../../../../../../images/silver_certification.png";
import logo1 from "./../../../../../../images/msme.jpg";
import logo2 from "./../../../../../../images/indian_green_building_council.jpg";
import logo3 from "./../../../../../../images/fsai.jpg";

const CPTEDStandardsGoldSilver = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="cpted-standards-container">
      <div className="cpted-certifications-container">
        <h2 className="cpted-header">CPTED Standard Certifications</h2>
        <div className="cpted-certifications">
          <img
            src={goldCertification}
            alt="Gold Certification"
            className="cpted-certification cpted-gold"
            onClick={() => openModal(goldCertification)}
          />
          <img
            src={silverCertification}
            alt="Silver Certification"
            className="cpted-certification cpted-silver"
            onClick={() => openModal(silverCertification)}
          />
        </div>
      </div>
      <div className="cpted-registered-container">
        <h3 className="registered-header">Registered With</h3>
        <div className="cpted-logos">
          <img src={logo1} alt="MSME Logo" className="cpted-logo" />
          <img
            src={logo2}
            alt="Indian Green Building Council Logo"
            className="cpted-logo"
          />
          <img src={logo3} alt="FSAI Logo" className="cpted-logo" />
        </div>
      </div>
      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <img className="modal-content" src={modalImage} alt="Certification" />
        </div>
      )}
    </div>
  );
};

export default CPTEDStandardsGoldSilver;
