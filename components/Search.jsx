import React from "react";

export default function Search() {
  return (
    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass" />
      <input type="text" placeholder="Search for a country..." />
    </div>
  );
}
