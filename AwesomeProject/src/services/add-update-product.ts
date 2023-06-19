import {productModal} from 'modals/product-modal';
const API_URL = process.env.REACT_APP_FAKESTORE_API_URL;

export const addNewProduct = async (productDetails: productModal) => {
  const {title, price, description, category, image} = productDetails;
  const response = await fetch(`${API_URL}/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: title,
      price: price,
      description: description,
      image: image,
      category: category,
    }),
  });

  const data = await response.json();
  return data;
};

export const updateProduct = async (productDetails: productModal) => {
  const {id, title, price, description, category, image} = productDetails;
  const response = await fetch(`${API_URL}/products/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: title,
      price: price,
      description: description,
      image: image,
      category: category,
    }),
  });

  const response1 = await fetch(`${API_URL}/products/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: title,
      price: price,
      description: description,
      image: image,
      category: category,
    }),
  });

  const data = await response1.json();
  return data;
};

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
