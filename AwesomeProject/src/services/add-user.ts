import axios from 'axios';
import {userModal} from '../modals/user-modal/user-modal';
const API_URL = 'https://fakestoreapi.com';

export const addUser = async (userDetails: userModal) => {
  const {email, username, password, name, address, phone} = userDetails;
  const response = await axios.post(`${API_URL}/users`, {
    email: email,
    username: username,
    password: password,
    name: {
      firstname: name.firstName,
      lastname: name.lastName,
    },
    address: {
      city: address.city,
      street: address.street,
      number: address.number,
      zipcode: address.zipcode,
      geolocation: {
        lat: address.geolocation.lat,
        long: address.geolocation.long,
      },
    },
    phone: phone,
  });
  return response.data;
};
