import React, { useEffect, useState } from "react";
import "./Header.css";

const renderMenuItems = (items, level = 0) => {
  const className =
    level === 0
      ? "dropdown"
      : level === 1
      ? "sub-dropdown"
      : "sub-sub-dropdown";
  return (
    <ul className={className}>
      {Object.entries(items).map(([key, value]) => (
        <li
          className={`dropdown-item ${
            level === 1
              ? "sub-dropdown-item"
              : level === 2
              ? "sub-sub-dropdown-item"
              : ""
          }`}
          key={key}
        >
          <a
            href={`#${key.toLowerCase().replace(/ /g, "-")}`}
            className={`${key.toLowerCase().replace(/ /g, "-")}`}
          >
            {key}
          </a>
          {Object.keys(value).length > 0 && renderMenuItems(value, level + 1)}
        </li>
      ))}
    </ul>
  );
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 50); // Adjust the scroll position as needed
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBarDivisions = {
    Services: {
      Consulting: {
        CPTED: {},
        "Risk Management": {},
        "Security Projects": {},
      },
      Training: {
        CPTED: {},
        "Corporate Security": {},
        "Project Management": {},
        "Internal Audit": {},
        "Life Safety": {},
        "Fire Safety": {},
        "Business Continuity": {},
        "Crime Prevention": {},
        "Work Place Violence": {},
        "Surveillance & CCTV": {},
        "Third-Party vendor Training": {},
        "Driver and Road Safety": {},
        "Guard Force Management": {},
        "Command Center Operations": {},
      },
      Certifications: {
        "CPTED Standards (Gold & Silver)": {},
      },
    },
    Media: {
      "Print Media": {},
      Video: {},
      Websites: {},
    },
    Recognitions: {
      Awards: {},
      Appreciations: {},
      Citations: {},
      "Service Renewals": {},
      Recommendations: {},
    },
    "MOU/Partners": {
      College: {},
      Schools: {},
      "Private Groups": {},
      "Recognized Institutes": {},
      "Government Department": {},
    },
    "Contact US": {},
  };

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className="header-content">
        <span className="acronym">CPTED</span>
        <span className="full-text">
          Crime Prevention through Environmental Design
        </span>
      </div>
      <nav className="navbar">
        <ul className="navbar-menu">
          {Object.entries(navBarDivisions).map(([key, value]) => (
            <li className="navbar-item" key={key}>
              <a href={`#${key.toLowerCase().replace(/ /g, "-")}`}>{key}</a>
              {Object.keys(value).length > 0 && renderMenuItems(value)}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
