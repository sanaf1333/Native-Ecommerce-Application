import React, {useState} from 'react';
import {Keyboard} from 'react-native';
import {validateEmail} from '@utils/email-validation';
import {validatePassword} from '@utils/password-validation';
import {validatePhoneNumber} from '@utils/phone-validation';
import {validateEmptyField} from '@utils/empty-field-validation';
import {showAlert} from '@utils/show-alert';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {addUser} from '@services/add-user';
import Signup from '@components/screens/signup';

const SignupContainer: React.FC = () => {
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
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const onSubmit = async () => {
    if (
      !validateEmptyField(email) ||
      !validateEmptyField(password) ||
      !validateEmptyField(firstName) ||
      !validateEmptyField(lastName) ||
      !validateEmptyField(phone) ||
      !validateEmptyField(city) ||
      !validateEmptyField(street) ||
      !validateEmptyField(house) ||
      !validateEmptyField(zipcode) ||
      !validateEmptyField(username)
    ) {
      showAlert('', 'All fields are necessary');
    } else if (
      !validateEmail(email) ||
      !validatePassword(password) ||
      !validatePhoneNumber(phone)
    ) {
      showAlert('', 'Invalid email, password, or phone number');
    } else {
      const isValidSign = await addUser({
        email: email,
        username: username,
        password: password,
        phone: phone,
        name: {firstName: firstName, lastName: lastName},
        address: {
          city: city,
          street: street,
          number: house,
          zipcode: zipcode,
          geolocation: {lat: '-37.3159', long: '81.1496'},
        },
      });

      if (isValidSign.id) {
        navigation.navigate('Verify Phone');
      } else {
        showAlert('', 'Sign up failed');
      }
    }
  };

  return (
      <Signup
        dismissKeyboard={dismissKeyboard}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        phone={phone}
        setPhone={setPhone}
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        city={city}
        setCity={setCity}
        street={street}
        setStreet={setStreet}
        house={house}
        setHouse={setHouse}
        zipcode={zipcode}
        setZipcode={setZipcode}
        username={username}
        setUsername={setUsername}
        onSubmit={onSubmit}
      />
  );
};

export default SignupContainer;
