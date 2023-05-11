import React from "react";
import PropTypes from "prop-types";

const Card = ({ data, valueTemp, country, modeTemp }) => {
  const imageArray = data.weather && data.weather[0].icon.toLowerCase();

  return (
    <div className="card">
      <div className="content-temp">
        <p>
          {valueTemp}°{modeTemp === "CTF" ? "F" : "C"}
        </p>
      </div>
      <div className="content-img">
        {data.weather && (
          <img src={`/img/${imageArray}.svg`} alt="img-climate" />
        )}
      </div>
      <div className="content-description">
        <p className="mt-0">VIENTOS</p>
        <p className="mt-0">NUBES</p>
        <p className="mt-0">PRESIÓN</p>
      </div>
      <div className="content-location">
        <p>
          {data.name}, {country}
        </p>
      </div>
      <div className="content-climate">
        <p>{data.weather && data.weather[0].description}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.object.isRequired,
  valueTemp: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  modeTemp: PropTypes.string,
};

export default Card;
