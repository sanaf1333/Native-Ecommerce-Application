import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  Image,
} from 'react-native';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');

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
          <Text style={styles.text}>Login</Text>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
            keyboardType="email-address"
          />
          {emailError ? (
            <Text style={styles.errorText}>{emailError}</Text>
          ) : null}
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={setPassword}
            value={password}
            secureTextEntry
          />
          {passwordError ? (
            <Text style={styles.errorText}>{passwordError}</Text>
          ) : null}
          <Button title="Submit" onPress={onSubmit} />
          <Text style={styles.createAccountText}>
            Not a user? Create account!
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
    marginTop: '20%',
    marginLeft: '30%',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
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
  createAccountText: {
    alignSelf: 'center',
    padding: 10,
  },
});

export default Login;
