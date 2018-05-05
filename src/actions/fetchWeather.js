import axios from 'axios';
const API_KEY = 'c7c2221186fc6f4c86eadd3b96785465';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export default function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  console.log(request);
  return {
    type: FETCH_WEATHER,
    payload:request
  }
}
