export const validateEmail = (text: string) => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/;
  if (emailRegex.test(text)) {
    return true;
  } else {
    return false;
  }
};
