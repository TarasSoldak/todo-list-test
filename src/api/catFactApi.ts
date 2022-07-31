import axios from "axios";
import { ICatFact } from "../store/reducers/catFactSlice";



export const getCatFact = async () => {
  try {
    const response = await axios.get<ICatFact>(`https://catfact.ninja/fact`);
    return response
  } catch (error) {
    console.error(error);
  }
}