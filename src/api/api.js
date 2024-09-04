import axios from "axios";

const baseURL = "http://127.0.0.1:8000/api/";

const instance = async (method, endpoint, data = {}, headers = {}) => {
  try {
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
    if (error.response && error.response.status === 400) {
      console.error(`Token expired or invalid for ${method} ${endpoint}`);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/login";
    } else {
      console.error(`Error ${method} ${endpoint}:`, error);
      throw error;
    }
  }
};

export default instance;
