export interface loginModal{
    username: string;
    setUsername: (text: string) => void;
    password: string;
    setPassword: (text: string) => void;
    isUsernameValid: boolean;
    isPasswordValid: boolean;
    dismissKeyboard: () => void;
    onSubmit: () => void;
    onPressCreateAccount: () => void;
  }