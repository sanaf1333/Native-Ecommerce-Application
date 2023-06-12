const API_URL = 'https://fakestoreapi.com';

export const getAllCarts = async () => {
  const response = await fetch(`${API_URL}/carts`);
  const data = await response.json();
  return data;
};

export const getCartByID = async (cartID: string) => {
  const response = await fetch(`${API_URL}/carts/${cartID}`);
  const data = await response.json();
  return data;
};

export const getCartByUser = async (userID: string) => {
  const response = await fetch(`${API_URL}/carts/user/${userID}`);
  const data = await response.json();
  return data;
};

