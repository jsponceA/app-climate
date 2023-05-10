import React from "react";
import ImgLoader from "../assets/img/3.svg";

const Loader = () => {
  return (
    <div className="loader">
      <img src={ImgLoader} alt="Loader image" />
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
