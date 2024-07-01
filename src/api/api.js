
import axios from "axios";

const baseURL = "http://127.0.0.1:8000/api/";

const instance = async (method, endpoint, data = {}, headers = {}) => {
  try {
    console.log(data)
    const token = localStorage.getItem("token");
    const config = {
      method,
      url: `${baseURL}${endpoint}`,
      headers: {
        Authorization: `Bearer ${token}`,
        ...headers,
      },
      data,
    };
    const response = await axios(config);
    return response;
  } catch (error) {
    console.error(`Error ${method} ${endpoint}:`, error);
    throw error;
  }
};

export default instance;
