import React from "react";
import PropTypes from "prop-types";

const Card = ({ data, valueTemp, country }) => {
  return (
    <div className="card">
      <p>{valueTemp}°</p>
      <p>VIENTOS</p>
      <p>NUBES</p>
      <p>PRESIÓN</p>
      <p>
        {data.name}, {country}
      </p>
      <p>{data.weather && data.weather[0].description}</p>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.object.isRequired,
  valueTemp: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
};

export default Card;
