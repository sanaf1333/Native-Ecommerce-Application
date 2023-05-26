import axios from 'axios';
const API_URL = 'https://fakestoreapi.com';

export const getAllCarts = async () => {
  const response = await axios.get(`${API_URL}/carts`);
  return response.data;
};

export const getCartByID = async (cartID: string) => {
  const response = await axios.get(`${API_URL}/carts/${cartID}`);
  return response.data;
};

export const getCartByUser = async (userID: string) => {
  const response = await axios.get(`${API_URL}/carts/user/${userID}`);
  return response.data;
};

// export const updateCart = async (cartID: string) => {
//   const response = await axios.put(`${API_URL}/carts/${cartID}`);
//   const response1 = await axios.patch(`${API_URL}/carts/${cartID}`);
//   return response.data;
// };
