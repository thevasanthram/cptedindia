import React from "react";
import { useParams } from "react-router-dom";
import componentsMap from "./MenuBarComponents"; // Import your components mapping
import NotFound from "./../not_found/NotFound"; // Import the NotFound component
import "./MenuBarHandler.css"; // Import your CSS for styling

const capitalizeWords = (str) => {
  return str
    .replace(/-/g, " ") // Replace hyphens with spaces
    .split(" ") // Split into words
    .map((word) => {
      // Handle special cases
      if (word.toLowerCase() === "cpted") {
        return "CPTED";
      }
      if (word.toLowerCase() === "ceo") {
        return "CEO";
      }
      if (word.toLowerCase() === "(gold") {
        return "(Gold";
      }
      // Capitalize each word normally
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" "); // Join words back into a single string
};

const MenuBarHandler = () => {
  let { menu_item } = useParams(); // Extract the parameter

  const formattedName = capitalizeWords(menu_item);
  const componentName = formattedName
    .replace(/ /g, "")
    .replace(/&/g, "")
    .replace(/\(/g, "")
    .replace(/\)/g, "");

  console.log("componentName: ", componentName);

  // Get the component from the map
  const DynamicComponent = componentsMap[componentName] || null;

  return (
    <div className="menu-bar-handler">
      {DynamicComponent ? <DynamicComponent /> : <NotFound />}
    </div>
  );
};

export default MenuBarHandler;
