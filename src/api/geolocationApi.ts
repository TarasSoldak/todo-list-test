import axios from "axios";
import { IGeo } from "../store/geolocationSlice";



export const getGeolocation = async () => {
  try {
    const response = await axios.get<IGeo>('http://ip-api.com/json/?fields=country,city,lat,lon,regionName');
    return response
  } catch (error) {
    console.error(error);
  }
}