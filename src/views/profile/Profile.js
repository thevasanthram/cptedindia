import React, { useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [editing, setEditing] = useState(false);
  const [profilePicture, setProfilePicture] = useState(
    "https://via.placeholder.com/150"
  );

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    setEditing(false);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleProfilePictureChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfilePicture(event.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="profile-page">
      <h2>Profile Page</h2>
      <p>Welcome to the Profile Page.</p>
      <div className="profile-container">
        <div className="profile-picture">
          <img src={profilePicture} alt="Profile" />
          <input type="file" onChange={handleProfilePictureChange} />
        </div>
        {editing ? (
          <div className="profile-details">
            <input type="text" value={name} onChange={handleNameChange} />
            <input type="email" value={email} onChange={handleEmailChange} />
            <button onClick={handleSave}>Save</button>
          </div>
        ) : (
          <div className="profile-details">
            <p>
              <strong>Name:</strong> {name}
            </p>
            <p>
              <strong>Email:</strong> {email}
            </p>
            <button onClick={handleEdit}>Edit</button>
          </div>
        )}
      </div>
      <div className="activity-log">
        <h3>Recent Activities</h3>
        <ul>
          <li>Logged in</li>
          <li>Viewed Dashboard</li>
          <li>Updated Profile</li>
          <li>Logged out</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
