import axios from 'axios';
import {productModal} from '../modals/product-modal';
const API_URL = 'https://fakestoreapi.com';

export const addNewProduct = async (productDetails: productModal) => {
  const {title, price, description, category, image} = productDetails;
  const response = await axios.post(`${API_URL}/products`, {
    title: title,
    price: price,
    description: description,
    image: image,
    category: category,
  });
  return response.data;
};

export const updateProduct = async (productDetails: productModal) => {
  const {id, title, price, description, category, image} = productDetails;
  const response = await axios.post(`${API_URL}/products/${id}`, {
    title: title,
    price: price,
    description: description,
    image: image,
    category: category,
  });
  const response1 = await axios.patch(`${API_URL}/products/${id}`, {
    title: title,
    price: price,
    description: description,
    image: image,
    category: category,
  });
  return response.data;
};
