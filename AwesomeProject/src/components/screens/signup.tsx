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

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [house, setHouse] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [username, setUsername] = useState('');
  const validateEmail = (text: string) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/;
    setEmail(text);

    if (emailRegex.test(text)) {
      setEmailError('');
    } else {
      setEmailError('Please enter valid email address');
    }
  };
  const validatePassword = (text: string) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.])[A-Za-z\d@.]{8,}$/;
    setPassword(text);

    if (passwordRegex.test(text)) {
      setPasswordError('');
    } else {
      setPasswordError(
        'Password must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, and 1 special character.',
      );
    }
  };
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const onSubmit = () => {
    validateEmail(email);
    validatePassword(password);
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
                style={[styles.input, styles.firstBoxInput]}
                onChangeText={setEmail}
                value={email}
                placeholder="Email"
                keyboardType="email-address"
              />
              <TextInput
                style={[styles.input, styles.firstBoxInput]}
                placeholder="Password"
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
              />
              <TextInput
                style={[styles.input, styles.lastBoxInput]}
                onChangeText={setLastName}
                value={lastName}
                placeholder="Last Name"
              />
            </View>
            <View style={styles.TextBoxContainer}>
              <TextInput
                style={[styles.input, styles.firstBoxInput]}
                onChangeText={setUsername}
                value={username}
                placeholder="Username"
              />
              <TextInput
                style={[styles.input, styles.lastBoxInput]}
                onChangeText={setPhone}
                value={phone}
                placeholder="Phone"
                keyboardType="phone-pad"
              />
            </View>
            <View style={styles.TextBoxContainer}>
              <TextInput
                style={[styles.input, styles.firstBoxInput]}
                onChangeText={setCity}
                value={city}
                placeholder="City"
              />
              <TextInput
                style={[styles.input, styles.lastBoxInput]}
                onChangeText={setStreet}
                value={street}
                placeholder="Street"
              />
            </View>
            <View style={styles.TextBoxContainer}>
              <TextInput
                style={[styles.input, styles.firstBoxInput]}
                onChangeText={setHouse}
                value={house}
                placeholder="House no."
              />
              <TextInput
                style={[styles.input, styles.lastBoxInput]}
                onChangeText={setZipcode}
                value={zipcode}
                placeholder="Zipcode"
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
