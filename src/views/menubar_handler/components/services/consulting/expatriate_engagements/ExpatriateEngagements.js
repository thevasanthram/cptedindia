import React from "react";
import "./ExpatriateEngagements.css";

function ExpatriateEngagements() {
  const services = [
    "Groups and Individual briefings for specific requirements and assignments",
    "Training in Life safety",
    "Training in Fire safety",
    "Hotel and Restaurant Audits prior to and post expat visits",
    "Expat housing assessment and audits",
    "Planning and assessments of the expat engagements for the stay duration",
    "Travel route and travel security assessment",
    "Transit management via airport, rail, and road transfers",
    "Hotspot mapping to understand the travel route impacts",
    "Driver–vendor coordination",
    "Procuring local SIM card, parking, and mobile assistance",
    "Installation of tracking devices on request from clients",
    "Coordination with ISOS or specific recognized hospitals in the vicinity to the venue",
    "Backup car and driver assistance provided on request",
  ];

  return (
    <div className="expatriate-container">
      <h2 className="expatriate-title">Expatriate Engagements</h2>
      <p className="expatriate-description">
        The Expat Insider 2023 Survey conducted by the NDTV Profit reports that
        Expats in India face many challenges, including safety concerns,
        bureaucratic difficulties, and environmental issues. CPTEDINDIA
        coordinates with Corporates and individuals to provide a safer
        environment for the Expat community.
      </p>
      <div className="expatriate-services-container">
        {services.map((service, index) => (
          <div key={index} className="expatriate-service-item">
            <span className="expatriate-service-icon">•</span>
            <p className="expatriate-service-text">{service}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpatriateEngagements;
