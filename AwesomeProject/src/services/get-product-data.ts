
const API_URL = 'https://fakestoreapi.com';

export const getAllProducts = async () => {
  const response = await fetch(`${API_URL}/products`);
  const data = await response.json();
  return data;
};

export const getProductByID = async (productID: number) => {
  const response = await fetch(`${API_URL}/products/${productID}`);
  const data = await response.json();
  return data;
};

export const sortProductsAsc = async () => {
  const response = await fetch(`${API_URL}/products?sort=asc`);
  const data = await response.json();
  return data;
};

export const sortProductsDesc = async () => {
  const response = await fetch(`${API_URL}/products?sort=desc`);
  const data = await response.json();
  return data;
};
