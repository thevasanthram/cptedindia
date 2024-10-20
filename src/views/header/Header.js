import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import CPTEDLogo from "./../../images/logos/cpted_new_logo.jpg";

const navBarDivisions = {
  Services: {
    Consulting: {
      CPTED: {},
      "Risk Management": {},
      "Security Projects": {},
      "Expatriate Engagements": {},
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
  },
  Recognitions: {
    Awards: {},
    Appreciations: {},
    Memberships: {},
    Recommendations: {},
  },
  "MOU/Partners": {
    Schools: {},
    Colleges: {},
    "Professional Groups": {},
    "Recognized Institutes": {},
  },
  "Contact Us": {
    "Founder & President": {},
    Team: {},
  },
};

const HamburgerMenu = ({ navBarDivisions }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const menuRef = useRef(null);
  const [isSelectedEver, setIsSelectedEver] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSubMenuToggle = (e) => {
    e.target.classList.toggle("active");
  };

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleItemClick = (key, level) => {
    // Create a copy of the current state
    let newSelected = [...selected];

    setIsSelectedEver(true);

    if (newSelected.length > 0) {
      newSelected = newSelected.slice(1, newSelected.length);
    }

    // Update the current level with the new key
    newSelected[level] = key;

    // Clear out any sub-level selections if not at the last level
    if (level < newSelected.length - 1) {
      newSelected.fill(null, level + 1);
    }

    // Update the state with the new selection
    setSelected(newSelected);
  };

  const renderMenu = (items, selected = [], level = 0) => (
    <ul className="menu-list-container">
      {Object.entries(items).map(([key, value]) => {
        const isSelected =
          selected[level] === key || selected.slice(0, level + 1).includes(key);

        let linkPath = "";

        if (isSelectedEver) {
          linkPath =
            Object.keys(value).length === 0
              ? key === "CPTED"
                ? `/menu/${selected[2].toLowerCase().replace(/ /g, "-")}_${key
                    .toLowerCase()
                    .replace(/ /g, "-")}`
                : `/menu/${key.toLowerCase().replace(/ /g, "-")}`
              : "#";
        } else {
          linkPath =
            Object.keys(value).length === 0
              ? key === "CPTED"
                ? `/menu/${selected
                    .slice(1, 2)
                    .map((v) => v.toLowerCase().replace(/ /g, "-"))
                    .join("-")}_${key.toLowerCase().replace(/ /g, "-")}`
                : `/menu/${key.toLowerCase().replace(/ /g, "-")}`
              : "#";
        }

        return (
          <li
            key={key}
            className={`menu-list-item ${isSelected ? "selected" : ""}`}
            onClick={() => handleItemClick(key, level)}
          >
            {typeof value === "object" && Object.keys(value).length > 0 ? (
              <>
                <span
                  onClick={(e) => handleSubMenuToggle(e)}
                  className={`menu-link ${isSelected ? "active" : ""}`}
                >
                  {key}
                </span>
                <ul className="submenu-list-container">
                  {renderMenu(value, [...selected, key], level + 1)}
                </ul>
              </>
            ) : (
              <Link
                to={linkPath}
                className="menu-link"
                onClick={() => setMenuOpen(false)}
              >
                {key}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );

  return (
    <div
      ref={menuRef}
      className={`hamburger-menu-container ${menuOpen ? "open" : ""}`}
    >
      <div className="menu-icon-wrapper" onClick={toggleMenu}>
        <span className="menu-bar"></span>
        <span className="menu-bar"></span>
        <span className="menu-bar"></span>
      </div>
      <div className="menu-content-wrapper">
        {renderMenu(navBarDivisions, selected)}
      </div>
    </div>
  );
};

// Helper function to render menu items recursively
const renderMenuItems = (key, items, level = 0, selected, setSelected) => {
  const className =
    level === 0
      ? "dropdown"
      : level === 1
      ? "sub-dropdown"
      : "sub-sub-dropdown";

  const ContactUsClassName = key === "Contact Us" ? "contact-us-dropdown" : "";

  return (
    <ul className={`${className} ${ContactUsClassName}`}>
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
              renderMenuItems(key, value, level + 1, selected, setSelected)}
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
    setScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      {/* <div className="header-content"> */}
      <Link to="/" className="header-content">
        <img
          src={CPTEDLogo}
          alt="CPTEDINDIA Logo"
          className="cpted-india-logo"
        />
        <div id="company-name-and-slogan">
          <Link to="/" className="acronym">
            CPTEDINDIA
          </Link>
          <p id="slogan">Enabling Safer Space by Design</p>
        </div>
      </Link>
      {/* <span className="full-text">
          Crime Prevention through Environmental Design
        </span> */}
      {/* </div> */}
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
                renderMenuItems(key, value, 0, selected, setSelected)}
            </li>
          ))}
        </ul>
      </nav>
      <HamburgerMenu navBarDivisions={navBarDivisions} />
    </header>
  );
};

export default Header;
