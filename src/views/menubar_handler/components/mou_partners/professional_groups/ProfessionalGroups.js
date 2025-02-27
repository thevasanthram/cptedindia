import React from "react";
import "./ProfessionalGroups.css";

// Import logo images
import RakshaLogo from "./../../../../../images/logos/raksha_logo.jpg";
import IFESCLogo from "./../../../../../images/logos/IFSEC_logo.jpg";
import SecurityAndFireExpoLogo from "./../../../../../images/logos/security_and_fire_expo.jpg";
import JianaConstructionLogo from "./../../../../../images/logos/jiana_construction_logo.jpg";
import ISSPLogo from "./../../../../../images/logos/ISSP lOGO.jpg";

const ProfessionalGroups = () => {
  return (
    <div className="professional-groups-container">
      <h2 className="knowledge-partners-title">Knowledge Partners</h2>
      <p className="knowledge-partners-description">
        Our esteemed Knowledge Partners collaborate with us to share insights
        and their expertise. Their contributions add value in enhancing
        community safety and security.
      </p>
      <div className="logos-container">
        <div className="logo-wrapper">
          <img
            src={RakshaLogo}
            alt="Raksha"
            className="knowledge-partner-logo"
          />
        </div>
        {/* <div className="logo-wrapper">
          <img src={IFESCLogo} alt="IFESC" className="knowledge-partner-logo" />
        </div> */}
        <div className="logo-wrapper">
          <img
            src={SecurityAndFireExpoLogo}
            alt="Security And Fire Expo"
            className="knowledge-partner-logo"
          />
        </div>
        <div className="logo-wrapper">
          <img src={ISSPLogo} alt="ISSP" className="knowledge-partner-logo" />
        </div>
        <div className="logo-wrapper JianaConstructionLogoWrapper">
          <img
            src={JianaConstructionLogo}
            alt="Jiana Construction"
            className="knowledge-partner-logo JianaConstructionLogo"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfessionalGroups;
