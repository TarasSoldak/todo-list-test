import axios from "axios";
import { IGeo } from "../store/reducers/geolocationSlice";



export const getGeolocation = async () => {
    const response = await axios.get<IGeo>('http://ip-api.com/json/?fields=country,city,lat,lon,regionName');
    return response
}