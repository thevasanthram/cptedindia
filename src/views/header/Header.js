import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Ensure this import is present
import "./Header.css";

// Helper function to render menu items recursively
const renderMenuItems = (items, level = 0, selected, setSelected) => {
  const className =
    level === 0
      ? "dropdown"
      : level === 1
      ? "sub-dropdown"
      : "sub-sub-dropdown";

  return (
    <ul className={className}>
      {Object.entries(items).map(([key, value]) => {
        const itemClass =
          level === 1
            ? "sub-dropdown-item"
            : level === 2
            ? "sub-sub-dropdown-item"
            : "dropdown-item";
        const isSelected =
          selected[level] === key || selected.slice(0, level + 1).includes(key);

        return (
          <li
            className={`${itemClass} ${isSelected ? "selected-sub" : ""}`}
            key={key}
            onMouseEnter={() => {
              const newSelected = [...selected];
              newSelected[level] = key;
              setSelected(newSelected);
            }}
          >
            <Link
              to={
                Object.keys(value).length === 0
                  ? key === "CPTED"
                    ? `/menu/${selected[0]
                        ?.toLowerCase()
                        .replace(/ /g, "-")}_${key
                        .toLowerCase()
                        .replace(/ /g, "-")}`
                    : `/menu/${key.toLowerCase().replace(/ /g, "-")}`
                  : `#`
              }
              className={`${key
                .toLowerCase()
                .replace(/ /g, "-")} sub_options_class`}
            >
              {key}
            </Link>
            {Object.keys(value).length > 0 &&
              renderMenuItems(value, level + 1, selected, setSelected)}
          </li>
        );
      })}
    </ul>
  );
};

// Main Header component
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [selected, setSelected] = useState([]);
  const [hoveredMain, setHoveredMain] = useState(null);

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
      Schools: {},
      Colleges: {},
      "Private Groups": {},
      "Recognized Institutes": {},
      "Government Department": {},
    },
    "Contact US": {
      "Founder & CEO": {},
    },
  };

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className="header-content">
        <Link to="/" className="acronym">
          CPTEDINDIA
        </Link>
        <span className="full-text">
          Crime Prevention through Environmental Design
        </span>
      </div>
      <nav className="navbar">
        <ul className="navbar-menu">
          {Object.entries(navBarDivisions).map(([key, value]) => (
            <li
              className={`navbar-item ${
                hoveredMain === key ? "selected-main" : ""
              }`}
              key={key}
              onMouseEnter={() => setHoveredMain(key)}
              onMouseLeave={() => setHoveredMain(null)}
            >
              <Link
                to={
                  Object.keys(value).length === 0
                    ? `/menu/${key.toLowerCase().replace(/ /g, "-")}`
                    : `#`
                }
              >
                {key}
              </Link>
              {Object.keys(value).length > 0 &&
                renderMenuItems(value, 0, selected, setSelected)}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
