export interface signupModal{
    dismissKeyboard: () => void;
    email: string;
    setEmail: (text: string) => void;
    password: string;
    setPassword: (text: string) => void;
    firstName: string;
    setFirstName: (text: string) => void;
    lastName: string;
    setLastName: (text: string) => void;
    phone: string;
    setPhone: (text: string) => void;
    city: string;
    setCity: (text: string) => void;
    street: string;
    setStreet: (text: string)=> void;
    house: string;
    setHouse: (text: string) => void;
    zipcode: string;
    setZipcode: (text: string) => void;
    username: string;
    setUsername: (text: string) => void;
    onSubmit: () => void;
  }