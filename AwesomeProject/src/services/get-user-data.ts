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

export const userLogin= async (username: string, password: string) => {
  console.log(username, password, API_URL)
  console.log(`${API_URL}/auth/login`);
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
    console.log("Error:", errorText);
  }

  return false;
};
