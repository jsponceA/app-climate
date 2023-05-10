import { axiosCountries } from "../plugins/axios";

const getCountry = async (code) => {
  const response = await axiosCountries.get(`alpha/${code}`);
  return response.data;
};

export { getCountry };
