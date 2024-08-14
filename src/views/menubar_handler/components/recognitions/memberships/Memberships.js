import React from "react";
import "./Memberships.css";

import msme from "./../../../../../images/logos/msme.jpg";
import indian_green_building_council from "./../../../../../images/logos/indian_green_building_council.jpg";
import fsai from "./../../../../../images/logos/fsai.jpg";
import national_safety_council from "./../../../../../images/logos/national_safety_council.jpg";
import StartupIndiaPreview from "./../../../../../images/logos/Startup-India_Preview.jpg";

const Membership = () => {
  return (
    <div className="membership-container">
      <h2 className="membership-title">Memberships</h2>
      <div className="membership-logos">
        <img src={msme} alt="MSME" className="membership-logo" />
        <img
          src={indian_green_building_council}
          alt="Indian Green Building Council"
          className="membership-logo"
        />
        <img src={fsai} alt="FSAI" className="membership-logo" />
      </div>
      <div className="membership-logos">
        <img
          src={national_safety_council}
          alt="National Safety Council"
          className="membership-logo"
        />
        <img
          src={StartupIndiaPreview}
          alt="Startup-India"
          className="membership-logo"
        />
      </div>
      <p className="membership-description">We are registered.</p>
    </div>
  );
};

export default Membership;
