
import axios from 'axios';

const api = axios.create({baseURL: 'https://pro.openweathermap.org/data/2.5/forecast/hourly?q=London,us&mode=json'});

export default api;