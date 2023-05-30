
const API_URL = 'https://fakestoreapi.com';

export const getAllCategories = async () => {
  const response = await fetch(`${API_URL}/products/categories`);
  const data = await response.json();
  return data;
};

export const getProductsByCategory = async (category: string) => {
  const response = await fetch(`${API_URL}/products/category/${category}`);
  const data = await response.json();
  return data;
};
