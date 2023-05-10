import React from "react";
import PropTypes from "prop-types";

const InputCity = ({ onChange, onKeyDown }) => {
  return (
    <div className="form-group">
      <box-icon name="search" color="white" size="20px" animation="tada" />
      <input
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
  onChange: PropTypes.func.isRequired,
};

export default InputCity;
