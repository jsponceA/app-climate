import React from "react";
import PropTypes from "prop-types";

const ToggleMode = ({ state, toggleDarkMode }) => {
  return (
    <button type="button" onClick={toggleDarkMode}>
      <box-icon
        animation="tada"
        color={state ? "yellow" : "white"}
        name={state ? "sun" : "moon"}
      />
    </button>
  );
};

ToggleMode.propTypes = {
  state: PropTypes.bool.isRequired,
};

export default ToggleMode;
