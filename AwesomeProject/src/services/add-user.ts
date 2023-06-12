
import {userModal} from '../modals/user-modal/user-modal';
const API_URL = 'https://fakestoreapi.com';

export const addUser = async (userDetails: userModal) => {
  console.log(userDetails);
  const {email, username, password, name, address, phone} = userDetails;
  const response = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
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
    }),
  });
  const data = await response.json();
  console.log(data);
  return data;
  
};
