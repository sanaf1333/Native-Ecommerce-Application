import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  Image,
  ScrollView,
} from 'react-native';
import {validateEmail} from '../../utils/email-validation';
import {validatePassword} from '../../utils/password-validation';
import {validatePhoneNumber} from '../../utils/phone-validation';
import {validateEmptyField} from '../../utils/empty-field-validation';
import {showAlert} from '../../utils/show-alert';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import FastImage from 'react-native-fast-image'
const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [house, setHouse] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [username, setUsername] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const onSubmit = () => {
    navigation.navigate('PhoneSignIn')
    setIsEmailValid(validateEmail(email));
    setIsPasswordValid(validatePassword(password));
    setIsPhoneValid(validatePhoneNumber(phone));
    if (
      !validateEmptyField(firstName) ||
      !validateEmptyField(lastName) ||
      !validateEmptyField(city) ||
      !validateEmptyField(street) ||
      !validateEmptyField(house) ||
      !validateEmptyField(zipcode) ||
      !validateEmptyField(username)
    ) {
      showAlert('', 'All fields are necessary');
    } else {
      if (isEmailValid && isPasswordValid && isPhoneValid) {
        showAlert('', 'pass');
        navigation.navigate('PhoneSignIn')
        //create user object, pass to hook and add call service
      } else {
        showAlert('', 'fail');
      }
    }
    //api call hook for service
  };

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View style={styles.container}>
          <View style={styles.upperTriangle}>
            <Image
              style={styles.logo}
              source={require('../../../public/images/cintyre-logo.png')}
            />
          </View>
          <View style={styles.lowerTriangle} />
          <View style={styles.content}>
            <Text style={styles.text}>Signup</Text>
            <View style={styles.TextBoxContainer}>
              <TextInput
                style={[
                  styles.input,
                  styles.firstBoxInput,
                  !isEmailValid && styles.errorInput,
                ]}
                onChangeText={setEmail}
                value={email}
                placeholder="Email"
                placeholderTextColor="gray"
                keyboardType="email-address"
              />
              <TextInput
                style={[
                  styles.input,
                  styles.firstBoxInput,
                  !isPasswordValid && styles.errorInput,
                ]}
                placeholder="Password"
                placeholderTextColor="gray"
                onChangeText={setPassword}
                value={password}
                secureTextEntry
              />
            </View>
            <View style={styles.TextBoxContainer}>
              <TextInput
                style={[styles.input, styles.firstBoxInput]}
                onChangeText={setFirstName}
                value={firstName}
                placeholder="First Name"
                placeholderTextColor="gray"
              />
              <TextInput
                style={[styles.input, styles.lastBoxInput]}
                onChangeText={setLastName}
                value={lastName}
                placeholder="Last Name"
                placeholderTextColor="gray"
              />
            </View>
            <View style={styles.TextBoxContainer}>
              <TextInput
                style={[styles.input, styles.firstBoxInput]}
                onChangeText={setUsername}
                value={username}
                placeholder="Username"
                placeholderTextColor="gray"
              />
              <TextInput
                style={[
                  styles.input,
                  styles.lastBoxInput,
                  !isPhoneValid && styles.errorInput,
                ]}
                onChangeText={setPhone}
                value={phone}
                placeholder="Phone"
                placeholderTextColor="gray"
                keyboardType="numeric"
              />
            </View>
            <View style={styles.TextBoxContainer}>
              <TextInput
                style={[styles.input, styles.firstBoxInput]}
                onChangeText={setCity}
                value={city}
                placeholder="City"
                placeholderTextColor="gray"
              />
              <TextInput
                style={[styles.input, styles.lastBoxInput]}
                onChangeText={setStreet}
                value={street}
                placeholder="Street"
                placeholderTextColor="gray"
              />
            </View>
            <View style={styles.TextBoxContainer}>
              <TextInput
                style={[styles.input, styles.firstBoxInput]}
                onChangeText={setHouse}
                value={house}
                placeholder="House no."
                placeholderTextColor="gray"
              />
              <TextInput
                style={[styles.input, styles.lastBoxInput]}
                onChangeText={setZipcode}
                value={zipcode}
                placeholder="Zipcode"
                placeholderTextColor="gray"
                keyboardType="numeric"
              />
            </View>

            <Button title="Submit" onPress={onSubmit} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  upperTriangle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: '70%',
    backgroundColor: '#ace4ea',
    borderBottomRightRadius: 500,
  },
  lowerTriangle: {
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 500,
  },
  logo: {
    width: 150,
    height: 150,
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: '10%',
    marginLeft: '30%',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: '40%',
  },
  text: {
    color: 'black',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 32,
  },
  input: {
    height: 40,
    marginVertical: 8,
    borderWidth: 1,
    padding: 10,
    color: 'black',
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 8,
  },
  TextBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  firstBoxInput: {
    flex: 1,
    marginRight: 4,
  },
  lastBoxInput: {
    flex: 1,
    marginLeft: 4,
  },
});

export default Signup;
