import { useEffect, useState } from "react";
import "./assets/css/style.css";
import { currentWeather, locationByCity } from "./services/WeatherMap";
import { getCountry } from "./services/Country";
import { getCurrentPosition } from "./utils/geolocation";
import TitleApp from "./components/TitleApp";
import InputCity from "./components/InputCity";
import ToggleMode from "./components/ToggleMode";
import Card from "./components/Card";
import ButtonChange from "./components/ButtonChange";

const App = () => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [modeTemp, setModeTemp] = useState("");
  const [valueTemp, setValueTemp] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [weather, setWeather] = useState({});
  const [weatherFilters, setWeatherFilters] = useState({
    lat: null,
    lon: null,
    lang: "es",
  });

  const currentGelocation = async () => {
    const responseCurrentLocation = await getCurrentPosition();
    if (!responseCurrentLocation) {
      console.error(
        "Su navegador no permite gelocalización, o asigne los permisos necesario y actualize."
      );
      return;
    }
    setWeatherFilters((prev) => ({
      ...prev,
      lat: responseCurrentLocation.latitude,
      lon: responseCurrentLocation.longitude,
    }));
  };

  const getCurrentWeatherData = async () => {
    try {
      const responseWeather = await currentWeather(weatherFilters);
      const responseContry = await getCountry(responseWeather.sys.country);
      setWeather(responseWeather);
      setCountry(responseContry[0].name.common);
      setValueTemp(responseWeather.main.temp);
      setModeTemp("KTC");
    } catch (error) {
      console.log(error);
    } finally {
      console.log("final");
    }
  };

  const getLocationByCity = async () => {
    try {
      const responseLocation = await locationByCity({ q: city });
      setWeatherFilters((prev) => ({
        ...prev,
        lat: responseLocation.coord.lat,
        lon: responseLocation.coord.lon,
      }));
      setModeTemp("");
    } catch (error) {
      console.log(error);
    } finally {
      console.log("final");
    }
  };

  const handleIptSearchChange = (e) => {
    setCity(e.target.value);
  };

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      if (city === "") {
        alert("Ingrese una ciudad");
        return;
      }
      await getLocationByCity();
    }
  };

  const convertKelvinToCelsius = (value) => {
    const celsius = value - 273.15;
    return Math.round(celsius);
  };

  const convertCelsiusToFahrenheit = (value) => {
    const fahrenheit = value * 1.8 + 32;
    return Math.round(fahrenheit);
  };

  const convertFahrenheitToCelsius = (value) => {
    const celsius = ((value - 32) * 5) / 9;
    return Math.round(celsius);
  };

  const changeModeTemp = () => {
    setModeTemp(modeTemp === "CTF" ? "FTC" : "CTF");
  };

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    currentGelocation();
  }, []);

  useEffect(() => {
    if (modeTemp === "KTC") {
      setValueTemp(convertKelvinToCelsius(valueTemp));
    } else if (modeTemp === "CTF") {
      setValueTemp(convertCelsiusToFahrenheit(valueTemp));
    } else if (modeTemp === "FTC") {
      setValueTemp(convertFahrenheitToCelsius(valueTemp));
    }
  }, [modeTemp]);

  useEffect(() => {
    if (weatherFilters.lat && weatherFilters.lon) {
      getCurrentWeatherData();
    }
  }, [weatherFilters]);

  return (
    <div className="container">
      <TitleApp title="Weather App" />
      <div className="content-ipt-search">
        <InputCity onChange={handleIptSearchChange} onKeyDown={handleKeyDown} />
      </div>
      <div className="content-toggle-mode">
        <ToggleMode state={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
      <Card data={weather} valueTemp={valueTemp} country={country} />
      <ButtonChange changeModeTemp={changeModeTemp} modeTemp={modeTemp} />
    </div>
  );
};

export default App;
