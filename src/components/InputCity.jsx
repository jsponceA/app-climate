import React from "react";
import PropTypes from "prop-types";

const InputCity = ({ isLoding, onChange, onKeyDown }) => {
  return (
    <div className="form-group">
      <box-icon name="search" color="white" size="20px" animation="tada" />
      <input
        disabled={isLoding}
        type="search"
        name="iptSearchCity"
        id="iptSearchCity"
        placeholder="Digita una ciudad y enter"
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};

InputCity.propTypes = {
  isLoding: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
};

export default InputCity;
