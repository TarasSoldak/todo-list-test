import axios from "axios";
import { IW } from "../store/reducers/weatherSlice";



export const getWeather = async () => {
  try {
    const response = await axios
      .get<IW>(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=12de24d1625ed8b9e67c4b7ee4eb146d`);
    return response
  } catch (error) {
    console.error(error);
  }
}