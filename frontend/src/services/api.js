import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const askAthena = async (question) => {
  const response = await API.post("/query", {
    question,
  });

  return response.data;
};