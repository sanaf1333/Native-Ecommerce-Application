import axios from 'axios';
const API_URL = 'https://fakestoreapi.com';

export const getAllProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};

export const getProductByID = async (productID: string) => {
  const response = await axios.get(`${API_URL}/products/${productID}`);
  return response.data;
};

export const sortProductsAsc = async () => {
  const response = await axios.get(`${API_URL}/products?sort=asc`);
  return response.data;
};

export const sortProductsDesc = async () => {
  const response = await axios.get(`${API_URL}/products?sort=desc`);
  return response.data;
};
