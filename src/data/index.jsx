export const API_KEY = "5b0da258768353b9a18dd0f82969291b";
export const DEFAULT_CITY = "Ha Noi";

export const createParams = (country) => {
  if (!country) {
    country = DEFAULT_CITY;
  }
  return {
    q: country,
    appid: API_KEY,
  };
};

export const createParamsForeCast = (country) => {
  if (!country) {
    country = DEFAULT_CITY;
  }
  return {
    q: country,
    appid: API_KEY,
    units: "metric",
  };
};

export const listWeatherImg = {
  "01d": "01d.png",
  "01n": "01n.png",
  "02d": "02d.png",
  "02n": "02n.png",
  "03d": "03d.png",
  "03n": "03d.png",
  "04d": "04d.png",
  "04n": "04d.png",
  "09d": "09d.png",
  "09n": "09d.png",
  "10d": "10d.png",
  "10n": "10n.png",
  "11d": "11d.png",
  "11n": "11d.png",
  "13d": "13d.png",
  "13n": "13d.png",
  "50d": "50d.png",
  "50n": "50d.png",
};
