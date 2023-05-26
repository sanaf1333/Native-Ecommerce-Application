import axios from 'axios';
const API_URL = 'https://fakestoreapi.com';

export const getAllUsers = async () => {
  const response = await axios.get(`${API_URL}/users`);
  return response.data;
};

export const getUserByID = async (userID: string) => {
  const response = await axios.get(`${API_URL}/users/${userID}`);
  return response.data;
};

// export const updateUserData = async (userID: string) => {
//   const response = await axios.put(`${API_URL}/users/${userID}`);
//   const response1 = await axios.patch(`${API_URL}/users/${userID}`);
//   return response.data;
// };
