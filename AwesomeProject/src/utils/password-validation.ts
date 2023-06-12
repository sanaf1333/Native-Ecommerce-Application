import {showAlert} from './show-alert';
export const validatePassword = (text: string) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]?)(?=.*\d)(?=.*[*$^_@])[A-Za-z\d*$^_@]{5,}$/;
  if (passwordRegex.test(text)) {
    return true;
  } else {
    return false;
  }
};
