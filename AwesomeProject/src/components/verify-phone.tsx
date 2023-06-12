import React, {useState, useEffect} from 'react';
import {Button, TextInput, StyleSheet, View, Text} from 'react-native';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const PhoneSignIn: React.FC = () => {
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
    const phonePK=`+92${phone}`;
    const testPhone='+16505553421';
    const confirmation = await auth().signInWithPhoneNumber(testPhone);
    setConfirm(confirmation);
    console.log(confirmation);
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
  if (!confirm) {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Verify Phone number</Text>
        <View style={styles.phoneNumber}>
          <TextInput
            style={styles.textBox}
            value="+92"
            editable={false}></TextInput>
          <TextInput
            style={styles.textBoxPhone}
            value={phone}
            onChangeText={text => setPhone(text)}
            placeholder="3xxxxxxxxx"
            placeholderTextColor="gray"
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Phone Number Sign In"
            onPress={() => signInWithPhoneNumber()}
          />
        </View>
      </View>
    );
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.headerText}>Enter OTP</Text>
        <TextInput
          style={styles.textBoxOTP}
          value={code}
          onChangeText={text => setCode(text)}
        />
        <View style={styles.button}>
          <Button title="Confirm Code" onPress={() => confirmCode()} />
        </View>
      </View>
    </>
  );
};

export default PhoneSignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBox: {
    borderColor: 'gray',
    borderWidth: 1,
    color: 'gray',
    margin: 10,
  },
  textBoxOTP: {
    borderColor: 'gray',
    borderWidth: 1,
    color: 'gray',
    margin: 10,
    padding: 10,
    width: '90%',
  },
  textBoxPhone: {
    borderColor: 'gray',
    borderWidth: 1,
    color: 'gray',
    width: '80%',
    margin: 10,
  },
  phoneNumber: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  button: {
    width: '100%',
    margin: 10,
    padding: 10,
    alignSelf: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
  },
});
