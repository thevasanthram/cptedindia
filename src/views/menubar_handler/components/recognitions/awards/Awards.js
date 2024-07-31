import React from "react";
import "./Awards.css";
import awardPhoto from "./../../../../../images/award_medal.png"; // Update with actual path
import DRILogo from "./../../../../../images/DRI logo.png"; // Update with actual path
import certificationEmblem from "./../../../../../images/awards_of_excellence.png"; // Update with actual path

function Awards() {
  return (
    <div className="awards-container">
      <h2 className="awards-title">Award of Excellence</h2>
      <img src={DRILogo} alt="DRILogo" className="dri-logo" />
      <img src={awardPhoto} alt="Award" className="award-photo" />
      <img
        src={certificationEmblem}
        alt="Certification Emblem"
        className="certification-emblem"
      />
      <p className="awards-description">
        The winner of this award has enhanced the business resilience of a
        public sector organization, while improving community preparedness as a
        champion of business continuity to local businesses. Nominations will be
        evaluated on experience and understanding of business continuity issues
        and best practices, promotion of BCM in the community, as well as the
        ability to successfully navigate organizational, legislative, or
        community challenges to achieve success.
      </p>
    </div>
  );
}

export default Awards;
