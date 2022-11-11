import axios from "axios";
import { response } from "express";

//6.a
const API_URL = "/api/users/";

const register = async (userData) => {
  const response = await axios.post(API_URL, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//Convert a JavaScript object into a string with JSON.stringify().

const authService = {
  register,
};
