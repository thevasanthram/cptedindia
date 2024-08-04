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
        <div className="about-us">
          <h2>About Us</h2>
          <p id="about_us_text">
            CPTED INDIA provides top-tier services, fostering a crime-free
            society through expertise and community engagement. Our initiatives
            enhance quality of life and property values while reducing crime and
            insurance costs.
          </p>
        </div>
        <div className="contact-us">
          <h2>Contact Us</h2>
          <ul className="social-icons">
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/dinesh-elangovan-cia-ssb-cdt-pmp-cpted-0220952a/"
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
              <a href="tel:+1234567890">
                <FaPhone />
              </a>
            </li>
          </ul>
          <address>
            123 CPTED Street,
            <br />
            Chennai, India
          </address>
        </div>
      </div>
      <p>&copy; 2024 CPTED INDIA</p>
    </footer>
  );
};

export default Footer;
