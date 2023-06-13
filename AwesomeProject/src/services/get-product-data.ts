const API_URL = process.env.FAKESTORE_API_URL;

export const getAllProducts = async (params: { order: string } = { order: 'asc' }) => {
  const { order } = params;
  const response = await fetch(`${API_URL}/products?sort=${order}`);
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
