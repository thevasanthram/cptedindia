import React, { useEffect, useState } from "react";

function GoogleAnalytics() {
  const [userCount, setUserCount] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/ga4-user-count")
      .then((response) => response.json())
      .then((data) => {
        setUserCount(data.userCount);
        console.log("data.userCount: ", data.userCount);
      })
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {userCount !== null ? (
        <div>User Count: {userCount}</div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default GoogleAnalytics;
