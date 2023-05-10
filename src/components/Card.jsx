import React from "react";
import PropTypes from "prop-types";
import Img1 from "../assets/img/1.svg";
import Img2 from "../assets/img/2.svg";
import Img3 from "../assets/img/3.svg";
import Img4 from "../assets/img/4.svg";
import Img5 from "../assets/img/5.svg";
import Img6 from "../assets/img/6.svg";
import Img7 from "../assets/img/7.svg";
import Img8 from "../assets/img/8.svg";
import Img9 from "../assets/img/9.svg";

const Card = ({ data, valueTemp, country }) => {
  /* con imagenes es imposible no determina bien el clima */
  const mainDescription = data.weather && data.weather[0].main.toLowerCase();
  let imagePath = Img1;
  if (mainDescription === "clear sky") {
    imagePath = Img1;
  } else if (mainDescription === "few clouds") {
    imagePath = Img2;
  } else if (mainDescription === "scattered clouds") {
    imagePath = Img3;
  } else if (mainDescription === "broken clouds") {
    imagePath = Img4;
  } else if (mainDescription === "shower rain") {
    imagePath = Img5;
  } else if (mainDescription === "rain") {
    imagePath = Img6;
  } else if (mainDescription === "thunderstorm") {
    imagePath = Img7;
  } else if (mainDescription === "snow") {
    imagePath = Img8;
  } else if (mainDescription === "mist") {
    imagePath = Img9;
  }
  /* con imagenes es imposible no determina bien el clima */

  return (
    <div className="card">
      <div className="content-temp">
        <p>{valueTemp}°</p>
      </div>
      <div className="content-img">
        {data.weather && (
          <img
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
            alt="img-climate"
          />
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
};

export default Card;
