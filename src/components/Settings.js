import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Settings({ darkMode, toggleDarkMode }) {
  return (
    <div className="settings d-flex align-items-center p-2">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          id="darkMode"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
        <label className="me-2">Dark Mode</label>
      </div>
    </div>
  );
}

export default Settings;
