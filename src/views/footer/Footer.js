import React, { useEffect, useState } from "react";
import "./Footer.css";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaWhatsapp, // Import the WhatsApp icon
} from "react-icons/fa";

function GoogleAnalytics() {
  const [userCount, setUserCount] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://localhost:5000/ga4-user-count")
      .then((response) => response.json())
      .then((data) => {
        setUserCount(data.userCount);
        console.log("data.userCount: ", data.userCount);
      })
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return <div className="analytics-container">Error: {error} user count</div>;
  }

  return (
    <div className="analytics-container">
      {userCount !== null ? (
        <div className="analytics-content">
          <div className="analytics-title">User Count</div>
          <div className="analytics-number">{userCount}</div>
        </div>
      ) : (
        <div className="analytics-loading">Loading...</div>
      )}
    </div>
  );
}

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="about-us">
          {/* <h2>About Us</h2> */}
          <p id="about_us_text">
            CPTEDINDIA provides top-tier services, fostering a crime-free
            society through expertise and community engagement. Our initiatives
            enhance quality of life and property values while reducing crime and
            insurance costs.
          </p>
        </div>
        <GoogleAnalytics />
        <div className="contact-us">
          <h2>Contact Us</h2>
          <ul className="social-icons">
            <li>
              <a
                href=" https://x.com/home"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61564452770882"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/cptedindia/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/cptedindia-340795322/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="mailto:office@cptedindia.com">
                <FaEnvelope />
              </a>
            </li>
            <li>
              <a href="tel:+919884913382">
                <FaPhone />
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/919884913382" // WhatsApp link with the phone number
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>
            </li>
          </ul>
          {/* <address>
            123 CPTED Street,
            <br />
            Chennai, India
          </address> */}
        </div>
      </div>
      <p>&copy; 2024 CPTEDINDIA</p>
    </footer>
  );
};

export default Footer;
