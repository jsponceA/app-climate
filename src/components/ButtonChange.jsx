import React from "react";
import PropTypes from "prop-types";

const ButtonChange = ({ changeModeTemp, modeTemp }) => {
  return (
    <div className="btn-change">
      <button type="button" onClick={changeModeTemp}>
        Cambiar a {modeTemp === "KTC" || modeTemp === "FTC" ? "F°" : "C°"}
      </button>
    </div>
  );
};

ButtonChange.propTypes = {
  changeModeTemp: PropTypes.func.isRequired,
};

export default ButtonChange;
