import React from "react";
import "./DarkButton.css";

const DarkButton = ({ onClick }) => {
  
  return (
    <div className="toggleDark">
      <input
        type="checkbox"
        className="push-button"
        id="push-button"
        onClick={onClick}
      />
      <label htmlFor="push-button" className="label">
        <span className="moon">🌑</span>
        <span className="sun">🌕</span>
        <div className="ball" />
      </label>
    </div>
  );
  
};

export default DarkButton;
