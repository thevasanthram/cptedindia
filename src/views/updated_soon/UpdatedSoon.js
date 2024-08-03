import React from "react";
import { useNavigate } from "react-router-dom";
import "./UpdatedSoon.css"; // Import your CSS for styling
import NotFoundImg from "./../../images/loading.gif";

const UpdateSoon = () => {
  const navigate = useNavigate();

  return (
    <div className="updated-soon-container">
      <div className="updated-soon-illustration">
        <img
          src={NotFoundImg}
          alt="Will be updated soon"
          className="updated-soon-img"
        />
      </div>
      <h1 className="updated-soon-title">Update Pending</h1>
      <p className="updated-soon-text">
        This content will be updated soon. Please check back later.
      </p>
      <button className="updated-soon-button" onClick={() => navigate("/")}>
        Go Back to Home
      </button>
    </div>
  );
};

export default UpdateSoon;
