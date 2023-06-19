import {userModal} from 'modals/user-modal/user-modal';
const API_URL = process.env.REACT_APP_FAKESTORE_API_URL;

export const getAllUsers = async () => {
  const response = await fetch(`${API_URL}/users`);
  const data = await response.json();
  return data;
};

export const getUserByID = async (userID: string) => {
  const response = await fetch(`${API_URL}/users/${userID}`);
  const data = await response.json();
  return data;
};

export const userLogin = async (username: string, password: string) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });
  if (response.ok) {
    const data = await response.json();
    if (data.token) {
      return true;
    }
  } else {
    const errorText = await response.text();
    console.log('Error:', errorText);
  }

  return false;
};

export const addUser = async (userDetails: userModal) => {
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
  return data;
  
};
