import React, {useState, useEffect} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import VerifyPhone from 'components/screens/verify-phone';

const VerifyPhoneContainer: React.FC = () => {
  // If null, no SMS has been sent
  const [confirm, setConfirm] =
    useState<FirebaseAuthTypes.ConfirmationResult | null>(null);

  // verification code (OTP - One-Time-Passcode)
  const [code, setCode] = useState('');
  const [phone, setPhone] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  // Handle login
  function onAuthStateChanged(user: any) {
    if (user) {
      // Some Android devices can automatically process the verification code (OTP) message, and the user would NOT need to enter the code.
      // Actually, if he/she tries to enter it, he/she will get an error message because the code was already used in the background.
      // In this function, make sure you hide the component(s) for entering the code and/or navigate away from this screen.
      // It is also recommended to display a message to the user informing him/her that he/she has successfully logged in.
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  // Handle the button press
  async function signInWithPhoneNumber() {
    const phonePK = `+92${phone}`;
    const testPhone = '+16505553421';
    const confirmation = await auth().signInWithPhoneNumber(testPhone);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      if (confirm) {
        await confirm.confirm(code);
        navigation.navigate('HomePage');
      }
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  return (
    <>
      <VerifyPhone
        signInWithPhoneNumber={signInWithPhoneNumber}
        confirmCode={confirmCode}
        phone={phone}
        setPhone={setPhone}
        code={code}
        setCode={setCode}
        confirm={confirm}
      />
    </>
  );
};

export default VerifyPhoneContainer;
