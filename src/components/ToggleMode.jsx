import React from "react";
import PropTypes from "prop-types";

const ToggleMode = ({ state }) => {
  return (
    <button type="button">
      <box-icon name={state ? "sun" : "moon"} />
    </button>
  );
};

ToggleMode.propTypes = {
  state: PropTypes.bool.isRequired,
};

export default ToggleMode;
