const API_URL = process.env.REACT_APP_FAKESTORE_API_URL;
export const getAllCategories = async () => {
  const response = await fetch(`${API_URL}/products/categories`);
  const data = await response.json();
  return data;
};

export const getProductsByCategory = async ({ category, order }: { category: string; order: string }) => {
  const response = await fetch(`${API_URL}/products/category/${category}?sort=${order}`);
  const data = await response.json();
  return data;
};
export const getProductsByCategoryDesc = async (category: string) => {
  const response = await fetch(`${API_URL}/products/category/${category}?sort=desc`);
  const data = await response.json();
  return data;
};