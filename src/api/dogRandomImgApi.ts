import axios from "axios";
import { IDogImg } from "../store/reducers/dogRandomImgSlice";



export const getRandomImg = async () => {
    const response = await axios.get<IDogImg>(`https://dog.ceo/api/breeds/image/random`);
    return response
  }