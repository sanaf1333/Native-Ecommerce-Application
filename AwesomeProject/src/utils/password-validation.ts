import {showAlert} from './show-alert';
export const validatePassword = (text: string) => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.])[A-Za-z\d@.]{8,}$/;
  if (passwordRegex.test(text)) {
    return true;
  } else {
    return false;
  }
};
