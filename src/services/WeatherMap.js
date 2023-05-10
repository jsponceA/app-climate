import { axiosWeather } from "../plugins/axios";

const currentWeather = async (params) => {
  const response = await axiosWeather.get("weather", {
    params: params,
  });
  return response.data;
};

const locationByCity = async (params) => {
  const response = await axiosWeather.get("weather", {
    params: params,
  });
  return response.data;
};

export { currentWeather, locationByCity };
