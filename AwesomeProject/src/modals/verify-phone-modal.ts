import {FirebaseAuthTypes} from '@react-native-firebase/auth';
export interface verifyPhoneModal{
    signInWithPhoneNumber: () => void;
    confirmCode: () => void;
    phone: string;
    setPhone: (text: string) => void;
    code: string;
    setCode: (text: string) => void;
    confirm: FirebaseAuthTypes.ConfirmationResult | null;
  }