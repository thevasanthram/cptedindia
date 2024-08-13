import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css"; // Import your CSS for styling
import NotFoundImg from "./../../images/not_found.png";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <main className="not-found">
      <section className="illustration">
        <img src={NotFoundImg} alt="404 Not Found" />
      </section>
      <h1>404</h1>
      <p>Oops! The route you are looking for does not exist.</p>
      <button onClick={() => navigate("/")}>Go Back to Home</button>
    </main>
  );
};

export default NotFound;
