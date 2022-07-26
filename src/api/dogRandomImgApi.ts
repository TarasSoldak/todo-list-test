import axios from "axios";



export const getRandomImg = async () => {
  try {
    const response = await axios.get(`https://dog.ceo/api/breeds/image/random`);
    return response
  } catch (error) {
    console.error(error);
  }
}