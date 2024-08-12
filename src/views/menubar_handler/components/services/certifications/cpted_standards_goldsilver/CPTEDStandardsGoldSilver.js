import React, { useState } from "react";
import "./CPTEDStandardsGoldSilver.css";
import goldCertification from "./../../../../../../images/gold_certification.png";
import silverCertification from "./../../../../../../images/silver_certification.png";

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
        <div className="certification-info">
          <p>
            Professional certifications are a medium to convey credibility,
            expertise, and industry knowledge that would boost the business and
            attract customers in the respective domain. Industry-relevant
            certifications also aid in revenue generation and gain a competitive
            edge over the market competitors and leaders.
          </p>
          <p>
            Get certified with CPTEDINDIA gold standard or silver standard
            certifications to become a market leader.
          </p>
        </div>

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
