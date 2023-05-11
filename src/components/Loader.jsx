import React from "react";

const Loader = () => {
  return (
    <div className="loader">
      <img src="/img/03d.svg" alt="Loader image" />
      <p>Weather App</p>
      <div className="dots-container">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default Loader;
