import React from "react";
import "./Footer.css";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <section className="about-us">
          <p id="about_us_text">
            CPTEDINDIA provides top-tier services, fostering a crime-free
            society through expertise and community engagement. Our initiatives
            enhance quality of life and property values while reducing crime and
            insurance costs.
          </p>
        </section>
        <section className="contact-us">
          <h2>Contact Us</h2>
          <ul className="social-icons" aria-label="Social Media Links">
            <li>
              <a
                href="https://x.com/home"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61564452770882"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/cptedindia/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/cptedindia-340795322/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="mailto:office@cptedindia.com" aria-label="Email">
                <FaEnvelope />
              </a>
            </li>
            <li>
              <a href="tel:+919884913382" aria-label="Phone">
                <FaPhone />
              </a>
            </li>
          </ul>
        </section>
      </div>
      <p>&copy; 2024 CPTEDINDIA</p>
    </footer>
  );
};

export default Footer;
