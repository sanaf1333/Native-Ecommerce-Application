import {showAlert} from './show-alert';
export const validateEmptyField = (text: string) => {
  if (text === '') {
    return false;
  } else {
    return true;
  }
};
