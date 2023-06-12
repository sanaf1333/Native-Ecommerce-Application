import React, {useState, useEffect} from 'react';
import {Button, TextInput, StyleSheet, View, Text} from 'react-native';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface verifyPhoneModal{
  signInWithPhoneNumber: () => void;
  confirmCode: () => void;
  phone: string;
  setPhone: (text: string) => void;
  code: string;
  setCode: (text: string) => void;
  confirm: FirebaseAuthTypes.ConfirmationResult | null;
}

const VerifyPhone: React.FC<verifyPhoneModal> = ({signInWithPhoneNumber, confirmCode, phone, setPhone, code, setCode, confirm}) => {
 

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

export default VerifyPhone;

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
