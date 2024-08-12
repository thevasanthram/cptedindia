import React, { useState } from "react";
import "./CPTEDStandardsGoldSilver.css";
import goldCertification from "./../../../../../../images/gold_certification.png";
import silverCertification from "./../../../../../../images/silver_certification.png";
import logo1 from "./../../../../../../images/logos/msme.jpg";
import logo2 from "./../../../../../../images/logos/indian_green_building_council.jpg";
import logo3 from "./../../../../../../images/logos/fsai.jpg";
import logo4 from "./../../../../../../images/logos/national_safety_council.jpg";

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
          <img src={logo1} alt="MSME" className="cpted-logo" />
          <img
            src={logo2}
            alt="Indian Green Building Council"
            className="cpted-logo"
          />
          <img src={logo3} alt="FSAI" className="cpted-logo" />
          <img
            src={logo4}
            alt="National Safety Council"
            className="cpted-logo"
          />
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
