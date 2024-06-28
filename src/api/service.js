/* eslint-disable no-useless-catch */
import instance from "src/config/axiosConfig";

export const fetchMediumsService = async () => {
  try {
    const response = await instance.get(`/mediums`);
    return response;
  } catch (error) {
    throw error;
  }
};
