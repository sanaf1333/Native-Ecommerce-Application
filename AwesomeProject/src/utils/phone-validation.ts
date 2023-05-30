import {showAlert} from './show-alert';
export const validatePhoneNumber = (phone: string) => {
  const phoneNumberRegex = /^03\d{9}$/;

  if (phoneNumberRegex.test(phone)) {
    return true;
  } else {
    return false;
  }
};
