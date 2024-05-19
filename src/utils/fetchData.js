import axios from "axios";

export const exerciseOptions ={
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => {
  try {
    const res = await axios(url, options);
    const data = res.data;
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
