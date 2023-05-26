import axios from 'axios';
const API_URL = 'https://fakestoreapi.com';

export const getAllCategories = async () => {
  const response = await axios.get(`${API_URL}/products/categories`);
  return response.data;
};

export const getProductsByCategory = async (category: string) => {
  const response = await axios.get(`${API_URL}/products/category/${category}`);
  return response.data;
};
