import axios from "axios";

const axiosWeather = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
});

axiosWeather.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    appid: "a74d65ffda5e5459d60dd61c829ca328",
  };
  return config;
});

const axiosCountries = axios.create({
  baseURL: "https://restcountries.com/v3.1/",
});

export { axiosWeather, axiosCountries };
